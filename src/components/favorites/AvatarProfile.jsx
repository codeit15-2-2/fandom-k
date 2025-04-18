import { useContext, createContext } from 'react';
import { cn } from '@/utils/cn';
import ProfileImg from '@components/common/ProfileImg';
import RemoveButton from './RemoveButton';
import SelectedLayer from '@components/common/SelectedLayer';

const AvatarProfileContext = createContext({
  id: null,
  src: '',
  name: '',
  group: '',
  size: '',
  selectedIds: null,
  onItemClick: () => {},
});

/* 아바타 프로필 컴포넌트 사용법
- 소개
아바타 프로필 컴포넌트는 합성 컴포넌트로, 기본형과 선택형, 삭제형을 지원합니다.
1) 기본형 : 단순 프로필 확인으로 아무 동작도 하지 않습니다.
2) 선택형 : 관심 아이돌을 등록하는 과정에서, 프로필을 선택하면 체크 표시로 선택 됐음을 보여집니다.
3) 삭제형 : 이미 관심 아이돌로 선택된 상태로, 프로필 사진 우상단에 삭제 버튼이 함께 보여집니다.


- 반응형 사용법
s, m, l로 size를 설정하여 사용할 수 있습니다. 기본 사이즈는 'm' 입니다. (프로필 이미지 100px)
*/

/**
 * 아바타 프로필 컴포넌트 props (기본형과 삭제형, 선택형을 함께 사용합니다.)
 * @typedef {Object} AvatarProfileProps
 * @property {number} props.id - [기본형 | 선택형 | 삭제형] 아이돌 id
 * @property {string} props.src - [기본형 | 선택형 | 삭제형] 이미지 src
 * @property {string} props.name - [기본형 | 선택형 | 삭제형] 아이돌 이름
 * @property {string} props.group - [기본형 | 선택형 | 삭제형] 아이돌 그룹
 * @property {'s' | 'm' | 'l'} [size] - [기본형 | 선택형 | 삭제형] 사이즈 (default size: m)
 * @property {number[]} [selectedIds] - [선택형] 관심 있는 아이돌의 id값으로 이뤄진 number 배열 (프로필 이미지 위에 체크 표시)
 * @property {(id: number) => void} [onItemClick] - [선택형 | 삭제형] 컴포넌트 클릭시 해당 아이돌 id로 실행될 함수
 */
/**
 * @example
 * 1. 기본형 사용법 예시
 * 아무 동작도 실행되지 않습니다. 단순 정보 확인용입니다.
 * 기본 아이돌 정보와 size를 prop으로 전달합니다.
 *     <AvatarProfile
 *       id={10}
 *       src={'~'}
 *       group={'블랙핑크'}
 *       name={'제니'}
 *       size={'s'}
 *     />
 *
 * 2. 선택형 사용법 예시
 * 새롭게 관심 아이돌을 추가할 때 사용합니다. 다중 선택이 가능합니다.
 * selectedIds에는 관심 아이돌의 id가 담긴 숫자 배열이 전달됩니다. selectedIds에 해당하면 프로필 사진 위 체크 표시가 보여집니다.
 * onItemClick에는 아바타 프로필 하나가 선택됐을 때, 그 id 값 하나를 전달하면서 실행될 함수를 전달합니다.
 * 예를 들어 onItemClick 함수는 selectedIds에 id를 추가하고, 중복 선택시 삭제되는 토글 기능을 구현할 수 있습니다.
 *     <AvatarProfile
 *       id={1}
 *       src={'~'}
 *       group={'블랙핑크'}
 *       name={'제니'}
 *       size={'m'}
 *       selectedIds={favoriteIds}
 *       onItemClick={toggleFavoriteIdol}
 *     />
 *
 * 3. 삭제형 사용법 예시
 * 이미 관심 아이돌로 등록되어 있을 때 사용합니다. 외부에서 삭제 버튼인 IdolRemoveButton을 추가합니다.
 * onItemClick에는 아바타 프로필 하나가 선택됐을 때, 그 id 값 하나를 전달하면서 실행될 함수를 전달합니다.
 *     <AvatarProfile
 *       id={3}
 *       src={'~'}
 *       group={'블랙핑크'}
 *       name={'제니'}
 *       size={'l'}
 *       onItemClick={removeFavoriteIdol}
 *     >
 *       <AvatarProfile.IdolRemoveButton />
 *    </AvatarProfile>
 */
const AvatarProfile = ({
  id,
  src,
  name,
  group,
  size = 'm',
  selectedIds = null,
  onItemClick,
  children,
}) => {
  const contextValue = {
    id,
    src,
    name,
    group,
    size,
    selectedIds,
    onItemClick,
  };
  const selected = selectedIds && selectedIds.includes(id);

  return (
    <AvatarProfileContext.Provider value={contextValue}>
      <div
        className={cn(
          'relative flex w-fit flex-col items-center',
          onItemClick && 'cursor-pointer',
        )}
        onClick={onItemClick ? () => onItemClick(id) : undefined} // 전달받은 onClick이 있을때만 작동
      >
        {children}
        <AvatarProfile.IdolImg selected={selected} />
        <AvatarProfile.IdolName />
        <AvatarProfile.IdolGroup />
      </div>
    </AvatarProfileContext.Provider>
  );
};

// 삭제 버튼 컴포넌트
const IdolRemoveButton = () => {
  return <RemoveButton />;
};

// 프로필 이미지 컴포넌트
const IdolImg = ({ selected }) => {
  const { size, src } = useContext(AvatarProfileContext);

  return (
    <div className='mb-4'>
      <ProfileImg src={src} size={size}>
        {selected && <SelectedLayer />}
      </ProfileImg>
    </div>
  );
};

// 아이돌 이름 컴포넌트
const IdolName = () => {
  const { name } = useContext(AvatarProfileContext);

  return <p className='content-text text-white'>{name}</p>;
};

// 아이돌 그룹명 컴포넌트
const IdolGroup = () => {
  const { group } = useContext(AvatarProfileContext);

  return <p className='sub-content-text text-gray-400'>{group}</p>;
};

AvatarProfile.IdolRemoveButton = IdolRemoveButton;
AvatarProfile.IdolImg = IdolImg;
AvatarProfile.IdolName = IdolName;
AvatarProfile.IdolGroup = IdolGroup;

export default AvatarProfile;
