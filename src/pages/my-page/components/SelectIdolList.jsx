import { useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import AvatarProfile from '@components/favorites/AvatarProfile';
import Button from '@components/common/Button';
import useWindowSize from '@hooks/useWindowSize';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

//추가될 아이돌들을 선택하는 컴포넌트

const IdolSelectList = ({
  idols,
  handleSelect,
  selectedIdols,
  handleMoreIdols,
  hasMore,
  isError,
}) => {
  const width = useWindowSize();
  const avatarSize = width < 1024 ? 'm' : 'l';
  const loaderRef = useRef(null);

  useInfiniteScroll({
    targetRef: loaderRef,
    onIntersect: handleMoreIdols,
    hasMore,
  });

  return (
    <AnimatePresence>
      {idols.length > 0 ? (
        <div className='grid grid-cols-3 gap-x-6 gap-y-10 md:grid-cols-6 lg:grid-cols-8'>
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
        <div className='flex h-[24rem] flex-col items-center justify-center text-[2.4rem] text-red-500'>
          서버 요청 중 에러가 발생하였습니다.
          <Button
            color='pink'
            size='m'
            onClick={handleMoreIdols}
            rounded
            className='mt-3'
          >
            재요청하기
          </Button>
        </div>
      ) : (
        <div className='flex h-[24rem] items-center justify-center text-[1.8rem] text-gray-400'>
          더 이상 추가할 수 있는 아이돌이 없습니다.
        </div>
      )}
    </AnimatePresence>
  );
};

export default IdolSelectList;
