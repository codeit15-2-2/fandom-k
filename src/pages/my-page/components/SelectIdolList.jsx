import { useRef, memo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import AvatarProfile from '@components/favorites/AvatarProfile';
import Button from '@components/common/Button';
import useDeviceSize from '@hooks/useDeviceSize';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

//추가될 아이돌들을 선택하는 컴포넌트

const IdolSelectList = ({
  idols,
  handleSelect,
  selectedIdols,
  handleMoreIdols,
  hasMore,
  isError,
  isLoading,
}) => {
  const { isDesktop } = useDeviceSize();
  const avatarSize = isDesktop ? 'l' : 'm';
  const loaderRef = useRef(null);

  useInfiniteScroll({
    targetRef: loaderRef,
    onIntersect: handleMoreIdols,
    hasMore,
  });

  return (
    <AnimatePresence>
      {idols.length > 0 ? (
        <div className='grid grid-cols-3 gap-x-6 gap-y-10 md:grid-cols-6'>
          {idols.map((item) => (
            <motion.div
              key={item.id}
              className='flex flex-col items-center gap-3'
              whileTap={{ scale: 0.9 }}
            >
              <AvatarProfile
                id={item.id}
                src={item.profilePicture}
                name={item.name}
                group={item.group}
                size={avatarSize}
                selectedIds={selectedIdols}
                onItemClick={handleSelect}
              />
            </motion.div>
          ))}
          {hasMore && <div ref={loaderRef} className='h-10 w-full'></div>}
        </div>
      ) : isError ? (
        <div className='text-brand-2 flex h-[24rem] flex-col items-center justify-center gap-4 text-[1.4rem] md:text-[2.4rem]'>
          서버 요청 중 에러가 발생하였습니다.
          <Button
            color='gray'
            size='xs'
            onClick={handleMoreIdols}
            className='mt-3 py-8'
          >
            재요청하기
          </Button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className='flex h-[24rem] items-center justify-center text-[1.8rem] text-gray-400'
        >
          {isLoading
            ? '데이터 불러오는중'
            : '더 이상 추가할 수 있는 아이돌이 없습니다.'}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IdolSelectList;
