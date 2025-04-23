import AvatarProfile from '@components/favorites/AvatarProfile';
import { useState, useRef, useEffect } from 'react';
import useWindowSize from '@hooks/useWindowSize';
import { setStoredFavorites } from '@utils/storeFavorite';

const AddFavorite = ({
  idol,
  setIdol,
  setFavorite,
  handleMoreIdols,
  hasMore,
  favorite
}) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const width = useWindowSize();
  const avatarSize = width < 1024 ? 'm' : 'l';

  const loaderRef = useRef(null);

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handleAddFavorites = () => {
    const selectedIdols = idol.filter((idol) => selectedIds.includes(idol.id));
    const newFavorites = [...favorite, ...selectedIdols];
    setFavorite(newFavorites); // favorite state에 저장
    setStoredFavorites(newFavorites); // localStorage에도 저장
    setIdol((prev) => prev.filter((idol) => !selectedIds.includes(idol.id))); //선택된 아이돌들은 렌더를 안시키도록
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
        rootMargin: '0px 0px -200px 0px',
      },
    );

    observer.observe(loaderRef.current);

    return () => {
      observer.disconnect();// unmount,hasmore,handleMoreIdols가 변경,재호출될때마다 기존의 observer를 해제하여 메모리 누수 방지
    };
  }, [handleMoreIdols, hasMore]);

  return (
    <div>
      <div className='min-h-[260px]'>
        {idol.length > 0 ? (
          <div className='grid grid-cols-3 gap-2 gap-x-6 gap-y-10 md:grid-cols-6 lg:grid-cols-8'>
            {idol.map((item) => (
              <div key={item.id} className='flex flex-col items-center gap-3'>
                <AvatarProfile
                  id={item.id}
                  src={item.profilePicture}
                  name={item.name}
                  group={item.group}
                  size={avatarSize}
                  selectedIds={selectedIds}
                  onItemClick={handleSelect}
                />
              </div>
            ))}

            {hasMore && <div ref={loaderRef} className='h-10 w-full'></div>}
          </div>
        ) : (
          <div className='flex h-[240px] items-center justify-center text-[2.4rem] text-gray-400'>
            더 이상 추가할 수 있는 아이돌이 없습니다.
          </div>
        )}
      </div>

      <div className='mt-10 flex justify-center'>
        <button
          onClick={handleAddFavorites}
          className='flex items-center gap-2 rounded-full bg-red-400 px-30 py-10 text-[2.4rem] text-white transition hover:bg-red-500'
          disabled={selectedIds.length === 0}
        >
          <span>추가하기</span>
        </button>
      </div>
    </div>
  );
};

export default AddFavorite;
