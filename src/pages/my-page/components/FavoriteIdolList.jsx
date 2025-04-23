import AvatarProfile from '@components/favorites/AvatarProfile';
import useWindowSize from '@hooks/useWindowSize';
import { setStoredFavorites } from '@utils/storeFavorite';

import { useRef, useState } from 'react';
import MiddleDivider from './MiddleDivider';

//화면상단 관심있는 아이돌로 추가된 아이돌들을 렌더링하는 컴포넌트

const FavoriteList = ({ favorites, setFavorites, setIdols }) => {
  const width = useWindowSize();
  const avatarSize = width < 1024 ? 'm' : 'l'; //화면크기에 따라 props에 들어갈 size값 변경

  // 드래그를 통한 좌우 스크롤
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

  //favorites 배열에서 선택된 아이돌을 삭제하는 로직
  const handleRemoveFavorite = (selectedFavIdol) => {
    const newFavorites = favorites.filter(
      (fav) => fav.id !== selectedFavIdol.id,
    );
    setFavorites(newFavorites);
    setStoredFavorites(newFavorites); //로컬스토리지에 갱신하여 저장

    setIdols((prev) => [...prev, selectedFavIdol]); //Idol배열에도 favorite에서 제거된 아이돌을 다시 렌더링 하기위해 최신화
  };

  return (
    <div className='flex flex-col gap-20 py-10'>
      <h2 className='mt-20 text-[1.6rem] font-bold sm:text-[2.4rem]'>
        내가 관심있는 아이돌
      </h2>
      {/* 레이아웃 깨짐 방지용 최소 높이 */}
      <div className='min-h-[18rem]'>
        <div
          className='scrollbar-custom lg:scrollbar scrollbar-hide cursor-grab overflow-x-auto whitespace-nowrap active:cursor-grabbing'
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className='flex px-2'>
            {favorites && favorites.length > 0 ? (
              favorites.map((fav) => (
                <div
                  key={fav.id}
                  className='mr-10 inline-flex flex-col items-center'
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
                </div>
              ))
            ) : (
              <div className='flex h-[16rem] w-full items-center justify-center text-[2.4rem] text-gray-400'>
                아직 관심있는 아이돌이 없습니다.
              </div>
              // 데이터가 비어있을때에도 기본 높이값을통해 레이아웃 높이를 고정
            )}
          </div>
        </div>
      </div>
      {/* 중간구분선 */}
      <MiddleDivider />
    </div>
  );
};

export default FavoriteList;
