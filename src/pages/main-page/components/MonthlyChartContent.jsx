import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useChartContext } from '@contexts/ChartContext';
import Button from '@components/common/Button';
import MonthlyChartList from './MonthlyChartList';
import IdolList from '@components/vote/IdolList';
import ErrorMessage from './ChartErrorMessage';
import { SkeletonList } from './IdolSkeleton';

/**
 * 이달의 차트 콘텐츠 페이지
 * - 성별(gender)에 따라 차트 데이터를 요청해 리스트로 출력
 * - 커서 기반 페이지네이션으로 "더보기" 구현
 */
export default function MonthlyChartContent() {
  // 현재 URL 경로에 따라 성별 결정
  const location = useLocation();
  const urlGender = location.pathname.includes('female') ? 'female' : 'male';

  // 차트 페이징 관련 훅 (데이터, 로딩 상태, 요청 함수 등)
  const {
    gender,
    setGender,
    chartDataList,
    isLoading,
    fetchIdolData,
    nextCursor,
  } = useChartContext();

  // 초기 데이터 로딩 또는 재시도 함수
  const loadInitialData = useCallback(() => {
    fetchIdolData(); // 커서 없이 호출하여 첫 페이지 데이터 로드
  }, [fetchIdolData]);

  const loadMore = useCallback(() => {
    if (nextCursor !== null && !isLoading) {
      fetchIdolData(nextCursor);
    }
  }, [nextCursor, isLoading, fetchIdolData]);

  // URL이 변경되면 gender 값 업데이트
  useEffect(() => {
    if (gender !== urlGender) {
      setGender(urlGender);
    }
  }, [urlGender, gender, setGender]);

  let content;
  if (isLoading) {
    content = <SkeletonList />;
  } else if (!chartDataList || chartDataList.length === 0) {
    content = <ErrorMessage onRetry={loadInitialData} />;
  } else {
    content = <MonthlyChartList idolData={chartDataList} IdolList={IdolList} />;
  }

  return (
    <div className='flex min-h-[50rem] flex-col'>
      {content}

      {/* 더보기 버튼 (커서가 존재할 경우에만 노출)*/}
      <div className='mb-20 flex justify-center'>
        {nextCursor !== null && (
          <Button
            className='mt-20 mb-4' //추가 클래스네임
            color='gray'
            size='l'
            border
            btnType='button'
            isLoading={isLoading}
            disabled={isLoading}
            onClick={loadMore}
          >
            {isLoading ? '로딩 중...' : '더보기'}
          </Button>
        )}
      </div>
    </div>
  );
}
