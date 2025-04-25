import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useChartPagination } from '@hooks/useChartPagination';
import Button from '@components/common/Button';
import MonthlyChartList from './MonthlyChartList';
import IdolList from '@components/vote/IdolList';

/**

* 이들의 차트 콘텐츠 페이지
* - 성별(gender)에 따라 차트 데이터를 요청해 리스트로 출력
* - 커서 기반 페이지네이션으로 "더보기" 구현
*/
export default function MonthlyChartContent() {
  // 현재 URL 경로에 따라 성별 결정
  const location = useLocation();
  const gender = location.pathname.includes('female') ? 'female' : 'male';

  // 차트 페이징 관련 훅 (데이터, 로딩 상태, 요청 함수 등)
  const {
    chartDataList,
    nextCursor,
    isLoading,
    fetchIdolData,
    resetPagination,
  } = useChartPagination(gender);

  // gender가 바뀌면 초기화 후 첫 페이지 데이터를 재요청
  useEffect(() => {
    resetPagination();
    fetchIdolData(0);
  }, [gender]);

  return (
    <>
      {/*props로 아이돌 데이터와 IdolList 컴포넌트를 넘겨 주어야 합니다. */}
      <MonthlyChartList idolData={chartDataList} IdolList={IdolList} />

      {/* 더보기 버튼 (커서가 존재할 경우에만 노출)*/}
      <div className='flex justify-center'>
        {nextCursor !== null && (
          <Button
            className='mt-20 mb-4' //추가 클래스네임
            color='gray'
            size='l'
            border
            btnType='button'
            isLoading={isLoading}
            onClick={() => fetchIdolData(nextCursor)}
          >
            더보기
          </Button>
        )}
      </div>
    </>
  );
}
