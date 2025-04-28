import { createContext, useContext, useState, useEffect } from 'react';
import { getCharts } from '@apis/chartsApi';
import useDeviceSize from '@hooks/useDeviceSize';

// Context 생성
const ChartContext = createContext(null);

// 모달용 모든 데이터 가져오기 위한 pageSize
const MODAL_PAGE_SIZE = 1000;

/**
 * ChartContext를 사용하기 위한 커스텀 훅
 * @returns {Object} ChartContext 값
 */
export const useChartContext = () => {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error('useChartContext must be used within a ChartProvider');
  }
  return context;
};

/**
 * 차트 데이터를 관리하는 Provider 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 하위 컴포넌트
 * @returns {JSX.Element} Provider 컴포넌트
 */
export const ChartProvider = ({ children }) => {
  // 메인 페이지 차트 상태
  const [chartDataList, setChartDataList] = useState([]);
  const [mainGender, setMainGender] = useState('female');
  const [nextCursor, setNextCursor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 모달용 차트 상태 (별도 관리)
  const [modalChartDataList, setModalChartDataList] = useState([]);
  const [modalGender, setModalGender] = useState('female');
  const [modalNextCursor, setModalNextCursor] = useState(null);
  const [modalIsLoading, setModalIsLoading] = useState(false);

  // 선택된 아이돌 ID
  const [selectedId, setSelectedId] = useState(null);

  /**
   * 현재 화면 크기에 따라 pageSize 반환
   * - 모바일, 태블릿: 5개
   * - PC: 10개
   */
  const { isDesktop } = useDeviceSize();
  
  const getResponsivePageSize = () => {
    if (isDesktop) return 10;
    return 5;
  };

  /**
   * 차트 데이터와 커서 상태 초기화 (메인 페이지용)
   */
  const resetPagination = () => {
    setChartDataList([]);
    setNextCursor(null);
    setIsLoading(false);
  };

  /**
   * 차트 데이터와 커서 상태 초기화 (모달용)
   */
  const resetModalPagination = () => {
    setModalChartDataList([]);
    setModalNextCursor(null);
    setModalIsLoading(false);
  };

  /**
   * totalVotes 기준으로 내림차순 정렬한 후,
   * 동점자는 동일한 순위를 부여하고 순위를 재계산합니다.
   *
   * @param {Array} idols - 순위를 부여할 아이돌 리스트
   * @returns {Array} - rank 속성이 포함된 아이돌 객체 리스트
   */
  const assignRanks = (idols) => {
    let currentRank = 1; // 현재 순위 (시작은 1위)
    return idols
      .slice()
      .sort((a, b) => b.totalVotes - a.totalVotes) // totalVotes 기준 내림차순 정렬
      .map((idol, index, arr) => {
        if (index === 0) return { ...idol, rank: currentRank }; // 첫 번째 항목은 무조건 1위

        const prev = arr[index - 1];
        const isSameVotes = idol.totalVotes === prev.totalVotes;

        // 동점이면 이전과 같은 순위, 아니면 현재 인덱스 기준 +1 순위
        currentRank = isSameVotes ? currentRank : index + 1;
        return { ...idol, rank: currentRank };
      });
  };

  /**
   * 중복된 아이돌을 제거합니다 (ID 기준)
   * @param {Array} idols - 중복 제거할 아이돌 리스트
   * @returns {Array} - 중복이 제거된 아이돌 리스트
   */
  const removeDuplicates = (idols) => {
    const uniqueIdols = [];
    const idSet = new Set();

    for (const idol of idols) {
      if (!idSet.has(idol.id)) {
        idSet.add(idol.id);
        uniqueIdols.push(idol);
      }
    }

    return uniqueIdols;
  };

  /**
   * 메인 페이지 차트 데이터 요청 함수
   * @param {number} cursor - 현재 커서 위치 (기본값 0)
   */
  const fetchIdolData = async (cursor = 0) => {
    setIsLoading(true);
    try {
      const pageSize = getResponsivePageSize();
      const res = await getCharts({
        gender: mainGender,
        cursor,
        pageSize,
      });

      // 전체 리스트를 합치고 중복 제거 후 정렬 + totalVotes 기준 정렬 후 rank 재할당
      setChartDataList((prev) => {
        // 이전 데이터와 새 데이터 합치기
        const combined = [...prev, ...res.idols];
        // ID 기준으로 중복 제거
        const uniqueIdols = removeDuplicates(combined);
        // 순위 부여
        const ranked = assignRanks(uniqueIdols);

        return ranked;
      });

      setNextCursor(res.nextCursor);
    } catch (error) {
      console.log('차트 데이터 요청 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * 모달용 차트 데이터 요청 함수
   * @param {number} cursor - 현재 커서 위치 (기본값 0)
   */
  const fetchModalIdolData = async (cursor = 0) => {
    setModalIsLoading(true);
    try {
      const pageSize = MODAL_PAGE_SIZE;
      const res = await getCharts({
        gender: modalGender,
        cursor,
        pageSize,
      });

      // 전체 리스트를 합치고 중복 제거 후 정렬 + totalVotes 기준 정렬 후 rank 재할당
      setModalChartDataList((prev) => {
        // 이전 데이터와 새 데이터 합치기
        const combined = [...prev, ...res.idols];
        // ID 기준으로 중복 제거
        const uniqueIdols = removeDuplicates(combined);
        // 순위 부여
        const ranked = assignRanks(uniqueIdols);

        return ranked;
      });

      setModalNextCursor(res.nextCursor);
    } catch (error) {
      console.log('모달 차트 데이터 요청 실패:', error);
    } finally {
      setModalIsLoading(false);
    }
  };

  // 메인 페이지 성별 변경 시 데이터 갱신
  useEffect(() => {
    resetPagination();
    fetchIdolData(0);
  }, [mainGender]);

  // 모달 페이지 성별 변경 시 데이터 갱신
  useEffect(() => {
    resetModalPagination();
    fetchModalIdolData(0);
  }, [modalGender]);

  // 컴포넌트 마운트 시 초기 데이터 로드
  useEffect(() => {
    fetchIdolData(0);
    fetchModalIdolData(0);
  }, []);

  /**
   * 아이돌 선택 핸들러
   * @param {number} id - 선택한 아이돌 ID
   */
  const handleSelectIdol = (id) => {
    setSelectedId(id);
  };

  // Context로 전달할 값
  const value = {
    // 메인 페이지용 상태
    chartDataList,
    gender: mainGender,
    setGender: setMainGender,
    nextCursor,
    isLoading,
    fetchIdolData,
    resetPagination,

    // 모달용 상태
    modalChartDataList,
    modalGender,
    setModalGender,
    modalNextCursor,
    modalIsLoading,
    fetchModalIdolData,
    resetModalPagination,

    // 공통 상태
    selectedId,
    handleSelectIdol,
  };

  return (
    <ChartContext.Provider value={value}>{children}</ChartContext.Provider>
  );
};
