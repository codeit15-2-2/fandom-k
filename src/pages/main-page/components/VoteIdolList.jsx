import IdolList from '@components/vote/IdolList';
import { useChartContext } from '@contexts/ChartContext';
import Scrollbars from 'react-custom-scrollbars-2';

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

  /**
   * 스크롤 컨테이너의 내부 뷰를 렌더링하는 함수
   *
   * @param {Object} style - 기본 스타일 객체
   * @param {Object} props - 기타 속성들
   * @returns {JSX.Element} - 스크롤 영역의 컨테이너 요소
   *
   * paddingRight: 스크롤바와 컨텐츠 사이 간격을 위해 오른쪽 여백 추가 (라디오 버튼과 스크롤바가 겹치지 않도록 함)
   */
  const renderView = ({ style, ...props }) => {
    return (
      <div
        {...props}
        style={{
          ...style,
          paddingRight: '20px',
        }}
      />
    );
  };

  /**
   * 수직 스크롤바의 스크롤 막대를 렌더링하는 함수
   *
   * @param {Object} style - 기본 스타일 객체
   * @param {Object} props - 기타 속성들
   * @returns {JSX.Element} - 스크롤바 썸 요소
   *
   * backgroundColor: 스크롤바 색상 설정 (브랜드 컬러 변수 사용)
   * borderRadius: 스크롤바 모서리 둥글기 설정
   * width: 스크롤바 너비 설정
   */
  const renderThumbVertical = ({ style, ...props }) => (
    <div
      {...props}
      style={{
        ...style,
        backgroundColor: 'var(--color-brand-1)',
        borderRadius: '4px',
        width: '6px',
      }}
    />
  );

  return (
    <Scrollbars
      style={{ height: '60vh', width: '100%' }}
      renderThumbVertical={renderThumbVertical}
      renderView={renderView}
    >
      <div className='flex w-full flex-col gap-3 mask-y-from-95% mask-y-to-100% py-8'>
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
    </Scrollbars>
  );
};

export default VoteIdolList;
