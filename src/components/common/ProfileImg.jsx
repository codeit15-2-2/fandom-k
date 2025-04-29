import { cn } from '@/utils/cn';

const PROFILE_IMG_SIZE_STYLES = {
  s: 'w-[7rem] h-[7rem]',
  m: 'w-[10rem] h-[10rem]',
  l: 'w-[12rem] h-[12rem]',
};

/** 프로필 이미지 컴포넌트
 * @param {Object} props
 * @param {string} props.src - 이미지 URL
 * @param {'s'|'m'|'l'} [props.size='s'] - 프로필 이미지 크기 (s=70px, m=100px, l=120px)
 * @param {React.ReactNode} [props.children] - 이미지 위에 겹쳐질 추가 요소 (예: Selected 레이어 등)
 *
 * @example
 * <ProfileImg src={'~'} size="m" />
 * @example
 * <ProfileImg src={imgUrl} size="s">{selected && <SelectedLayer />}</ProfileImg>
 */
const ProfileImg = ({ src, size = 's', children }) => {
  const profileImgClassNames = cn(
    'border-brand-1 aspect-square rounded-full border-1 p-[0.4rem] select-none pointer-events-none',
    PROFILE_IMG_SIZE_STYLES[size],
  );

  return (
    <div className={profileImgClassNames}>
      <div className='relative h-full w-full overflow-hidden rounded-full'>
        <img
          className='block h-full w-full object-cover'
          src={src}
          alt='profile image'
        />
        {children}
      </div>
    </div>
  );
};

export default ProfileImg;
