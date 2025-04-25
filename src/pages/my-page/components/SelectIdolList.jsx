import AvatarProfile from '@components/favorites/AvatarProfile';
import { useState, useRef, useEffect, useCallback } from 'react';
import useWindowSize from '@hooks/useWindowSize';
import { setStoredFavorites } from '@utils/storeFavorite';
import Button from '@components/common/Button';
import { AnimatePresence, motion } from 'motion/react';

//화면하단 get요청을 통해 받아온 아이돌데이터들이 렌더링되고 아이돌들을 선택하여 관심있는 아이돌에 추가하기위한 컴포넌트

const IdolSelectList = ({
  idols,
  setIdols,
  setFavorites,
  handleMoreIdols,
  hasMore,
  favorites,
  isLoading,
  isError,
}) => {
  console.log('SelectIdolList 리렌더');
  const [selectedIds, setSelectedIds] = useState([]);
  const width = useWindowSize();
  const avatarSize = width < 1024 ? 'm' : 'l'; //화면크기에 따라 props에 들어갈 size값 변경
  const buttonSize = width < 768 ? 's' : 'xl';

  const loaderRef = useRef(null);

  //favorites 배열에 추가할 아이돌들을 클릭/터치로 선택하는 로직 -> AvatarProfile 컴포넌트를 통해 체크표시가 됨
  const handleSelect = useCallback((id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  }, []);
  //favorites 배열에 추가하는 로직
  const handleAddFavorites = () => {
    const selectedIdols = idols.filter((idol) => selectedIds.includes(idol.id));
    const newFavorites = [...favorites, ...selectedIdols];
    setFavorites(newFavorites); // favorites state에 저장
    setStoredFavorites(newFavorites); // localStorage에도 저장
    setIdols((prev) => prev.filter((idol) => !selectedIds.includes(idol.id))); //선택된 아이돌들은 렌더를 안시키도록
    setSelectedIds([]);
  };

  //IntersectionObserver를 사용한 무한 스크롤
  //화면을 아래로 내릴때 뷰포트에 loaderRef가 닿으면(나타나면)추가데이터를 불러오는 방식(handleMoreIdols())
  useEffect(() => {
    if (!loaderRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleMoreIdols();
          console.log('더 불러옴');
        }
      },
      {
        threshold: 1.0,
        rootMargin: '0px 0px 50px 0px',
      },
    );

    observer.observe(loaderRef.current);

    //cleanUp 함수
    return () => {
      observer.disconnect(); // unmount,hasmore,handleMoreIdols가 변경,재호출될때마다 기존의 observer를 해제하여 메모리 누수 방지
    };
  }, [handleMoreIdols, hasMore]);

  return (
    <div className='relative'>
      <h2 className='mb-20 text-[1.8rem] font-bold sm:text-[2.4rem]'>
        관심 있는 아이돌을 추가해보세요.
      </h2>
      {/* 레이아웃 깨짐 방지용 최소 높이 */}
      <div className='min-h-[40rem]'>
        {/* {isLoading && (
          <Spinner className='fixed bottom-[30rem] left-1/2 h-30 w-30 -translate-x-1/2' />
        )} */}
        <AnimatePresence>
          {idols.length > 0 ? (
            <div className='grid grid-cols-3 gap-x-6 gap-y-10 md:grid-cols-6 lg:grid-cols-8'>
              {idols.map((item) => (
                <motion.div
                  key={item.id}
                  className='flex flex-col items-center gap-3'
                  whileTap={{ scale: 0.7 }}
                >
                  <AvatarProfile
                    id={item.id}
                    src={item.profilePicture}
                    name={item.name}
                    group={item.group}
                    size={avatarSize}
                    selectedIds={selectedIds}
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
            <div className='flex h-[24rem] items-center justify-center text-[2.4rem] text-gray-400'>
              더 이상 추가할 수 있는 아이돌이 없습니다.
            </div>
          )}
        </AnimatePresence>

        {/* 버튼은 하단에 고정 */}
        <div className='fixed bottom-[5rem] left-1/2 mt-10 flex -translate-x-1/2 items-center justify-center'>
          <Button
            size={buttonSize}
            color='pink'
            rounded
            onClick={handleAddFavorites}
            disabled={selectedIds.length === 0} //선택된 아이돌이 없을경우 비활성화
            isLoading={isLoading}
          >
            추가하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IdolSelectList;
