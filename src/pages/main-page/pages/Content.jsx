import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getCharts } from '@apis/chartsApi';
import Button from '@components/common/Button';
import IdolListTabContent from '../components/Idol-list-tab-content';
import IdolList from '@components/vote/IdolList';

export default function Content() {
  const [chartDataList, setChartDataList] = useState([]);
  const [nextCursor, setNextCursor] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // 현재 URL 경로에 따라 성별 결정
  const location = useLocation();
  const gender = location.pathname.includes('female') ? 'female' : 'male';

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

  // gender가 바뀌면 초기화 후 첫 페이지 요청
  useEffect(() => {
    setChartDataList([]);
    setNextCursor(0);
    fetchIdolData(0);
  }, [gender]);

  /**
   * 차트 데이터 요청 함수
   * @param {number} cursor - 현재 커서 위치 (기본값 0)
   */
  const fetchIdolData = async (cursor = 0) => {
    setIsLoading(true);
    try {
      const responsivePageSize = getResponsivePageSize();
      const res = await getCharts({
        gender,
        cursor,
        pageSize: responsivePageSize,
      });

      // 기존 리스트에 새 데이터 추가
      setChartDataList((prev) => [...prev, ...res.idols]);
      setNextCursor(res.nextCursor);
    } catch (error) {
      console.log('차트 데이터 요청 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * 더보기 버튼 클릭 시 다음 페이지 요청
   */
  const handleLoadMore = () => {
    if (nextCursor !== null && !isLoading) {
      fetchIdolData(nextCursor);
    }
  };

  return (
    <>
      {/*props로 아이돌 데이터와 IdolList 컴포넌트를 넘겨 주어야 합니다. */}
      <IdolListTabContent idolData={chartDataList} IdolList={IdolList} />

      {/* 더보기 버튼 */}
      <div className='flex justify-center'>
        {nextCursor !== null && (
          <Button
            className='mt-20 mb-4' //추가 클래스네임
            btnText='더보기'
            color='gray'
            size='l'
            border
            btnType='button'
            onClick={handleLoadMore}
          />
        )}
      </div>
    </>
  );
}
