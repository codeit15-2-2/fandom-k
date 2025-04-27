import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useChartPagination } from '@hooks/useChartPagination';
import Button from '@components/common/Button';
import MonthlyChartList from './MonthlyChartList';
import IdolList from '@components/vote/IdolList';

/**
 * 스켈레톤 UI 컴포넌트
 * - 데이터 로딩 중 표시할 스켈레톤 UI
 */
const IdolSkeleton = () => {
  return (
    <div className='animate-pulse border-b border-gray-100 p-5'>
      <div className='flex items-center'>
        <div className='h-[7rem] w-[7rem] rounded-full bg-gray-700'></div>
        <div className='ml-4 flex-1'>
          <div className='mb-2 h-[2rem] w-[10rem] rounded bg-gray-700'></div>
        </div>
        <div className='h-8 w-10 rounded bg-gray-700'></div>
      </div>
    </div>
  );
};

/**
 * 스켈레톤 목록 컴포넌트
 * - 지정된 수만큼 스켈레톤 아이템을 생성
 */
const SkeletonList = ({ count = 10 }) => {
  return (
    <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2'>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <IdolSkeleton key={`skeleton-${index}`} />
        ))}
    </div>
  );
};

/**
 * 이달의 차트 콘텐츠 페이지
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

  // 첫 로딩 시 (아직 데이터가 없고 로딩 중인 경우) 스켈레톤 UI 표시
  const isInitialLoading =
    isLoading && (!chartDataList || chartDataList.length === 0);

  return (
    <div className='flex min-h-[500px] flex-col'>
      {/* 첫 로딩 시에는 스켈레톤 UI 표시, 그 외에는 아이돌 목록 표시 */}
      {isInitialLoading ? (
        <SkeletonList />
      ) : (
        <MonthlyChartList idolData={chartDataList} IdolList={IdolList} />
      )}

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
            onClick={() => {
              // 다음 페이지가 없을 때 호출되지 않도록
              if (nextCursor === null) return;
              fetchIdolData(nextCursor);
            }}
          >
            {isLoading ? '로딩 중...' : '더보기'}
          </Button>
        )}
      </div>
    </div>
  );
}
