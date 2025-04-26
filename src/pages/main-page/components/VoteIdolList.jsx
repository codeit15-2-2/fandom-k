import IdolList from '@components/vote/IdolList';

const VoteIdolList = ({ chartDataList, selectedId, onSelect }) => {
  if (!chartDataList || chartDataList.length === 0) {
    return <p className='text-center text-gray-400'>데이터가 없습니다.</p>;
  }

  return (
    <div className='flex max-h-[60vh] w-full flex-col gap-3 py-8 overflow-y-auto mask-y-from-90% mask-y-to-100% [&::-webkit-scrollbar]:hidden'>
      <div className='flex w-full flex-col gap-5'>
        {chartDataList.map((idol) => {
          // console.log('idolVote', idol)
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
              onChange={() => onSelect(idol.id)}
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
