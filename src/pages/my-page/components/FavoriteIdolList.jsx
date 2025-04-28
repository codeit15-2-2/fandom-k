import AvatarProfile from '@components/favorites/AvatarProfile';
import { animate, AnimatePresence, motion } from 'motion/react';
import { cn } from '@utils/cn';
import useFavoriteHandler from '../hooks/useFavoriteHandler';
import useDeviceSize from '@hooks/useDeviceSize';
import usePreventScrollBar from '../hooks/usePreventScrollBar';

//추가된 아이돌들을 렌더링하는 컴포넌트

const FavoriteIdolList = ({ favorites, setFavorites, setIdols }) => {
  const { isDesktop } = useDeviceSize();
  const avatarSize = isDesktop - 2 ? 'm' : 'l';

  const { handleRemoveFavorite } = useFavoriteHandler({
    favorites,
    setFavorites,
    setIdols,
  });

  const onAnimate = usePreventScrollBar(favorites);

  return (
    <div className='min-h-[14rem] md:min-h-[20rem]'>
      <div
        className={cn(
          'scrollbar-custom cursor-grab overflow-y-hidden scroll-smooth pb-6 whitespace-nowrap active:cursor-grabbing',
          onAnimate ? 'overflow-x-auto' : 'overflow-x-hidden',
        )}
      >
        <div className='flex px-2'>
          <AnimatePresence>
            {favorites && favorites.length > 0 ? (
              favorites.map((fav, index) => (
                <motion.div
                  key={fav.id}
                  className='mr-10 inline-flex flex-col items-center'
                  initial={{ x: 100, y: 0, rotate: 0, opacity: 0 }}
                  animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    delay: index * 0.1,
                  }}
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
                transition={{ delay: 1, duration: 0.5 }}
                className='flex min-h-[15rem] w-full items-center justify-center text-[1.8rem] text-gray-400 md:min-h-[18rem]'
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
