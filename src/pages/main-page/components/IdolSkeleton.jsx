/**
 * 스켈레톤 UI 컴포넌트
 * - 데이터 로딩 중 표시할 스켈레톤 UI
 */
export const IdolSkeleton = () => {
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
export const SkeletonList = ({ count = 10 }) => {
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
