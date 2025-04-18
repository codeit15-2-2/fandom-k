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
  selectedIds: null,
  onItemClick: () => {},
});

const AvatarProfile = ({
  id,
  src,
  name,
  group,
  selectedIds = null,
  onItemClick,
  children,
}) => {
  const contextValue = {
    id,
    src,
    name,
    group,
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

// 삭제 아이콘 컴포넌트
const IdolRemoveButton = () => {
  return <RemoveButton />;
};

// 프로필 이미지 컴포넌트
const IdolImg = ({ selected }) => {
  const { src } = useContext(AvatarProfileContext);

  return (
    <div className='mb-4'>
      <ProfileImg src={src} size='m'>
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
