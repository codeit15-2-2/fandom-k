import { useState } from 'react';
import { getCharts } from '@apis/chartsApi';

/**
 * 차트 리스트 페이지네이션을 위한 커스텀 훅
 * 
 * @param {'male' | 'female'} gender - 조회할 차트 성별 (남자/여자)
 * @returns {{
 *   chartDataList: Array,              // 현재까지 불러온 차트 데이터 리스트
 *   nextCursor: number | null,         // 다음 페이지를 위한 커서 (null이면 더 이상 없음)
 *   isLoading: boolean,                // 데이터 로딩 중 여부
 *   fetchIdolData: (cursor?: number) => Promise<void>, // 차트 데이터 추가 로드 함수
 *   resetPagination: () => void        // 리스트 및 커서 초기화 함수
 * }}
 */
export const useChartPagination = (gender) => {
  const [chartDataList, setChartDataList] = useState([]);
  const [nextCursor, setNextCursor] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * 현재 화면 크기에 따라 pageSize 반환
   * - 모바일, 태블릿: 5개
   * - PC: 10개
   */
  const getResponsivePageSize = () => {
    const width = window.innerWidth;
    if (width <= 768) return 5;
    if (width <= 1024) return 5;
    return 10;
  };

  /**
   * 차트 데이터와 커서 상태 초기화
   */
  const resetPagination = () => {
    setChartDataList([]);
    setNextCursor(0);
  };

  /**
   * 차트 데이터 요청 함수
   * @param {number} cursor - 현재 커서 위치 (기본값 0)
   */
  const fetchIdolData = async (cursor = 0) => {
    setIsLoading(true);
    try {
      const pageSize = getResponsivePageSize();
      const res = await getCharts({
        gender,
        cursor,
        pageSize,
      });
      setChartDataList((prev) => [...prev, ...res.idols]);
      setNextCursor(res.nextCursor);
    } catch (error) {
      console.log('차트 데이터 요청 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    chartDataList,
    nextCursor,
    isLoading,
    fetchIdolData,
    resetPagination,
  };
};
