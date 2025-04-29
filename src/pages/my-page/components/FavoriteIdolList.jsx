import AvatarProfile from '@components/favorites/AvatarProfile';
import { animate, AnimatePresence, motion } from 'motion/react';
import { cn } from '@utils/cn';
import useFavoriteHandler from '../hooks/useFavoriteHandler';
import useDeviceSize from '@hooks/useDeviceSize';
import usePreventScrollBar from '../hooks/usePreventScrollBar';
import { useState } from 'react';

//추가된 아이돌들을 렌더링하는 컴포넌트

const FavoriteIdolList = ({ favorites, setFavorites, setIdols }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { isDesktop } = useDeviceSize();
  const avatarSize = isDesktop ? 'l' : 'm';

  const { handleRemoveFavorite } = useFavoriteHandler({
    favorites,
    setFavorites,
    setIdols,
  });

  const onAnimate = usePreventScrollBar(favorites);

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className='min-h-[20rem] md:min-h-[22rem]'>
      <div
        className={cn(
          'scrollbar-custom cursor-grab overflow-y-hidden scroll-smooth pb-6 whitespace-nowrap active:cursor-grabbing',
          onAnimate ? 'overflow-x-auto' : 'overflow-x-hidden',
        )}
      >
        <div
          className='flex gap-x-6 px-2'
          style={{ pointerEvents: isAnimating ? 'none' : 'auto' }} //애니메이션 진행중이면 클릭/터치막기
        >
          <AnimatePresence>
            {favorites && favorites.length > 0 ? (
              favorites.map((fav, index) => (
                <motion.div
                  key={fav.id}
                  className='mr-10 inline-flex flex-col items-center gap-3 pb-12'
                  initial={{ x: 100, y: 0, rotate: 0, opacity: 0 }}
                  animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layout
                  transition={{
                    type: 'spring',
                    stiffness: 140,
                    damping: 20,
                    delay: index * 0.001,
                    layout: { duration: 0.1 },
                    opacity: { duration: 0.1 },
                  }}
                  onAnimationStart={handleAnimationStart}
                  onAnimationComplete={handleAnimationEnd}
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
                className='flex min-h-[18rem] w-full items-center justify-center text-[1.8rem] text-gray-400 md:min-h-[20rem]'
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
