import { useContext, createContext } from 'react';
import SelectedLayer from '../common/SelectedLayer';
import ProfileImg from '@components/common/ProfileImg';

const IdolContext = createContext({
  id: null,
  src: '',
  rank: '',
  group: '',
  name: '',
  votes: 0,
  selectedId: null,
  onChange: () => {},
});

/* 아이돌 리스트 컴포넌트 사용법
- 소개
아이돌 리스트 컴포넌트는 합성 컴포넌트로, 원하는 컴포넌트를 외부에서 합성해서 사용할 수 있습니다.
합성 대상은 IdolNameWithGroup와 IdolVoteCount, IdolSelectRadio입니다.


- 반응형 사용법
기본 width가 100%이고, margin은 0으로 설정되어 있습니다. 외부에서 레이아웃과 컴포넌트 간 여백을 설정하고 사용해주세요.
*/

/**
 * 아이돌 리스트 컴포넌트 props (기본형과 투표형을 함께 사용하므로 아래의 자세한 사용법을 참고해주세요.)
 * @typedef {Object} IdolListProps
 * @property {number} props.id - [기본형 | 투표형] 아이돌 id
 * @property {string} props.src - [기본형 | 투표형] 이미지
 * @property {number} props.rank - [기본형 | 투표형] 순위
 * @property {string} props.group - [기본형 | 투표형] 아이돌 그룹
 * @property {string} props.name - [기본형 | 투표형] 아이돌 이름
 * @property {number} props.votes - [기본형 | 투표형] 투표 수 (string으로 사용 시, 포맷 설정 함수에서 오류가 발생합니다.)
 * @property {number} [props.selectedId] - [투표형] 현재 선택된 아이돌 id (선택적)
 * @property {function} [props.onChange] - [투표형] selectedId 변경시 값 저장 이벤트 핸들러 (선택적)
 */
/**
 * @example
 * 1. 기본형 사용법 예시
 * selectedId와 onChange를 제외하고 props을 넘겨줍니다. (투표형 props이 없어도 오류나지 않습니다.)
 * 내부에서 프로필 사진과 순위는 고정되어있습니다. 따라서 외부에서 IdolNameWithGroup와 IdolVoteCount만 합성합니다.
 *
 * <IdolList
 *   id={1}
 *   src={'~'}
 *   rank={1}
 *   group={'뉴진스'}
 *   name={'민지'}
 *   votes={240000}
 * >
 *   <IdolList.IdolNameWithGroup />
 *   <IdolList.IdolVoteCount />
 * </IdolList>
 *
 * @example
 * 2. 투표형 사용법 예시
 * selectedId와 onChange를 포함해 props을 넘겨줍니다. onChange는 selectedId를 변경하는 이벤트 핸들러입니다.
 * 현재 투표형 디자인은 아이돌 이름과 투표 수가 세로 정렬이 되어야 하므로, <div className='flex flex-col'>으로 묶어줍니다.
 * 외부에서 IdolNameWithGroup와 IdolVoteCount, IdolSelectRadio을 합성합니다.
 *
 * <IdolList
 *   id={10}
 *   src={'~'}
 *   rank={1}
 *   group={'뉴진스'}
 *   name={'민지'}
 *   votes={240003}
 *   selectedId={selectedId}
 *   onChange={onSelectIdol}
 * >
 *   <div className='flex flex-col'>
 *     <IdolList.IdolNameWithGroup />
 *     <IdolList.IdolVoteCount />
 *   </div>
 *   <IdolList.IdolSelectRadio />
 * </IdolList>
 */
const IdolList = ({
  id,
  src,
  rank,
  group,
  name,
  votes,
  selectedId,
  onChange,
  children,
}) => {
  const contextValue = {
    id,
    src,
    rank,
    group,
    name,
    votes,
    selectedId,
    onChange,
  };

  return (
    <IdolContext.Provider value={contextValue}>
      <label className={onChange !== undefined ? 'cursor-pointer' : ''}>
        <div className='sub-content-text flex w-full items-center gap-4 [&>*:last-child]:ml-auto'>
          <IdolImg selected={selectedId === id} />
          <IdolRank />
          {children}
        </div>
      </label>
    </IdolContext.Provider>
  );
};

// 아이돌 이미지 컴포넌트
const IdolImg = ({ selected }) => {
  const { src } = useContext(IdolContext);

  return (
    <ProfileImg src={src} size='s'>
      {selected && <SelectedLayer />}
    </ProfileImg>
  );
};

// 아이돌 순위 컴포넌트
const IdolRank = () => {
  const { rank } = useContext(IdolContext);

  return <p className='text-brand-1 m-0'>{rank}</p>;
};

// 아이돌 그룹명 및 이름 컴포넌트
const IdolNameWithGroup = () => {
  const { group, name } = useContext(IdolContext);

  return (
    <p className='m-0 text-white'>
      {group} {name}
    </p>
  );
};

// 아이돌 투표 수 컴포넌트
const IdolVoteCount = () => {
  const { votes } = useContext(IdolContext);

  return (
    <p className='m-0 text-white opacity-60'>{votes.toLocaleString()}표</p>
  );
};

// 아이돌 투표(radio) 컴포넌트
const IdolSelectRadio = ({ ...props }) => {
  const { id, onChange } = useContext(IdolContext);

  return (
    <input
      className='accent-brand-1 h-5 w-5 cursor-pointer'
      name='idolVote'
      value={id}
      type='radio'
      onChange={onChange}
      {...props}
    />
  );
};

IdolList.IdolImg = IdolImg;
IdolList.IdolRank = IdolRank;
IdolList.IdolNameWithGroup = IdolNameWithGroup;
IdolList.IdolVoteCount = IdolVoteCount;
IdolList.IdolSelectRadio = IdolSelectRadio;

export default IdolList;
