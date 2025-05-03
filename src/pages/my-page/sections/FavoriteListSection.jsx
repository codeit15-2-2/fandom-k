import { lazy, memo, Suspense } from 'react';
import Spinner from '@assets/icons/icon_spinner';

import MiddleDivider from '../components/MiddleDivider';

const FavoriteIdolList = lazy(() => import('../components/FavoriteIdolList'));

//화면상단 관심있는 아이돌로 추가된 아이돌들이 나타나는 섹션
//FavoriteIdolList 컴포넌트를 렌더링함

const FavoriteListSection = ({ favorites, setFavorites, setIdols }) => {
  return (
    <div className='flex flex-col gap-20 py-10'>
      <h2 className='text-shadow-2xl mt-20 text-[1.8rem] font-bold sm:text-[2.4rem]'>
        내가 관심있는 아이돌
      </h2>

      <div className='relative overflow-hidden'>
        <div className='pointer-events-none absolute top-0 left-0 z-10 h-full w-10 bg-gradient-to-r from-black to-transparent' />
        <div className='pointer-events-none absolute top-0 right-0 z-10 h-full w-10 bg-gradient-to-l from-black to-transparent' />

     
          <FavoriteIdolList
            favorites={favorites}
            setFavorites={setFavorites}
            setIdols={setIdols}
          />
       
      </div>

      {/* 중간 구분선 */}
      <MiddleDivider />
    </div>
  );
};

export default memo(FavoriteListSection);
