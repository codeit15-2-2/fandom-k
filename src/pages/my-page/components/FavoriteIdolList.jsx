import AvatarProfile from '@components/favorites/AvatarProfile';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@utils/cn';
import useFavoriteHandler from '../hooks/useFavoriteHandler';
import useWindowSize from '@hooks/useWindowSize';

const FavoriteIdolList = ({ favorites, setFavorites, setIdols }) => {
  const width = useWindowSize();
  const avatarSize = width < 1024 ? 'm' : 'l'; // 화면 크기에 따라 props에 들어갈 size 값 변경

  const { handleRemoveFavorite } = useFavoriteHandler({
    favorites,
    setFavorites,
    setIdols,
  });

  //setTimeout으로 아직 관심있는 아이돌이 없습니다 늦게뜨게하기
  return (
    <div className='min-h-[18rem]'>
      <div
        className={cn(
          'cursor-grab overflow-x-auto overflow-y-auto scroll-smooth whitespace-nowrap active:cursor-grabbing',
          width >= 1024 ? 'scrollbar-custom' : 'no-scrollbar',
        )}
      >
        <div className='flex px-2'>
          <AnimatePresence>
            {favorites && favorites.length > 0 ? (
              favorites.map((fav) => (
                <motion.div
                  key={fav.id}
                  className='mr-10 inline-flex flex-col items-center'
                  exit={{ opacity: 0, scale: 1.0 }}
                  transition={{ type: 'Spring', duration: 0.4 }}
                >
                  <AvatarProfile
                    id={fav.id}
                    src={fav.profilePicture}
                    name={fav.name}
                    group={fav.group}
                    size={avatarSize}
                    onItemClick={() => handleRemoveFavorite(fav)}
                  >
                    <AvatarProfile.IdolRemoveButton />
                  </AvatarProfile>
                </motion.div>
              ))
            ) : (
              // 데이터가 비어있을 때에도 기본 높이값을 통해 레이아웃 높이를 고정
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='flex h-[16rem] w-full items-center justify-center text-[1.8rem] text-gray-400'
              >
                아직 관심있는 아이돌이 없습니다.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FavoriteIdolList;
