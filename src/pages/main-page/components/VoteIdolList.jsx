import IdolList from '@components/vote/IdolList';
import { useChartContext } from '@contexts/ChartContext';

const VoteIdolList = ({ isModal = true }) => {
  // Context에서 데이터 가져오기 (모달용 또는 메인 페이지용)
  const {
    chartDataList,
    modalChartDataList,
    selectedId,
    handleSelectIdol,
    isLoading,
    modalIsLoading,
  } = useChartContext();

  // 모달용 또는 메인 페이지용 데이터 결정
  const dataList = isModal ? modalChartDataList : chartDataList;
  const loading = isModal ? modalIsLoading : isLoading;

  if (loading && (!dataList || dataList.length === 0)) {
    return <p className='text-center text-gray-400'>데이터를 불러오는 중...</p>;
  }

  if (!dataList || dataList.length === 0) {
    return <p className='text-center text-gray-400'>데이터가 없습니다.</p>;
  }

  return (
    <div className='flex max-h-[60vh] w-full flex-col gap-3 overflow-y-auto mask-y-from-90% mask-y-to-100% py-8 [&::-webkit-scrollbar]:hidden'>
      <div className='flex w-full flex-col gap-5'>
        {dataList.map((idol) => {
          return (
            <IdolList
              key={idol.id}
              id={idol.id}
              src={idol.profilePicture}
              rank={idol.rank}
              group={idol.group}
              name={idol.name}
              votes={idol.totalVotes}
              selectedId={selectedId}
              onChange={() => handleSelectIdol(idol.id)}
            >
              <div className='flex flex-col'>
                <IdolList.IdolNameWithGroup />
                <IdolList.IdolVoteCount />
              </div>
              <IdolList.IdolSelectRadio />
            </IdolList>
          );
        })}
      </div>
    </div>
  );
};

export default VoteIdolList;
