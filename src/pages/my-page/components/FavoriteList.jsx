import AvatarProfile from '@components/favorites/AvatarProfile';
import useWindowSize from '@hooks/useWindowSize';
import { setStoredFavorites } from '@utils/storeFavorite';
import Spinner from '@assets/icons/icon_spinner';

import { useRef, useState } from 'react';

const FavoriteList = ({ favorite, idol, setFavorite, setIdol ,isLoading }) => {
  const width = useWindowSize();
  const propSize = width < 1024 ? 'm' : 'l';

  //좌우 스크롤
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  //favorite에서 삭제
  const handleRemoveFavorite = (favoriteItem) => {
    const newFavorites = favorite.filter((i) => i.id !== favoriteItem.id);
    setFavorite(newFavorites);
    setStoredFavorites(newFavorites);

    setIdol((prev) => [...prev, favoriteItem]);
  };

  return (
    <div
      className='scrollbar-custom lg:scrollbar scrollbar-hide cursor-grab overflow-x-auto whitespace-nowrap active:cursor-grabbing'
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className='flex px-2'>
        {favorite && favorite.length > 0 ? (
          favorite.map((item) => (
            <div
              key={item.id}
              className='mr-10 inline-flex flex-col items-center'
            >
              <AvatarProfile
                id={item.id}
                src={item.profilePicture}
                name={item.name}
                group={item.group}
                size={propSize}
                onItemClick={() => handleRemoveFavorite(item)}
              >
                <AvatarProfile.IdolRemoveButton />
              </AvatarProfile>
            </div>
          ))
        ) : (
          <div className='flex h-[160px] w-full items-center justify-center text-[2.4rem] text-gray-400'>
            아직 관심있는 아이돌이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteList;
