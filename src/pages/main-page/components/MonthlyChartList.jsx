/**
 * 아이돌 목록을 표시하는 컴포넌트
 *
 * @param {Object} props
 * @param {Array} props.idolData - 표시할 아이돌 객체 배열
 * @param {React.ComponentType} props.IdolList - 각 아이돌을 표시할 컴포넌트
 * @returns {JSX.Element}
 */

const MonthlyChartList = ({ idolData, IdolList }) => {
  //idolData가 제대로 불러오지 않았을 경우 처리
  if (!idolData || idolData.length === 0) {
    return <div>아이돌 정보가 없습니다.</div>;
  }

  return (
    <div className='grid w-full grid-cols-1 gap-5 border-2 md:grid-cols-2'>
      {idolData.map((idol) => (
        <div className='border-b border-gray-100 text-white' key={idol.id}>
          <IdolList
            id={idol.id}
            src={idol.profilePicture}
            rank={idol.rank}
            group={idol.group}
            name={idol.name}
            votes={idol.totalVotes}
          >
            <IdolList.IdolNameWithGroup />
            <IdolList.IdolVoteCount />
          </IdolList>
        </div>
      ))}
    </div>
  );
};

export default MonthlyChartList;
