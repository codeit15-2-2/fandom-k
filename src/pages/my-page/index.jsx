import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import { useState, useEffect } from 'react';
import FavoriteList from './components/FavoriteList';
import AddFavorite from './components/AddFavorite';
import { getIdols } from '@apis/idolsApi';
import { getStoredFavorites } from '@utils/storeFavorite';

export default function MyPage() {
  const [myFavorites, setMyFavorites] = useState([]);
  const [allIdols, setAllIdols] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchIdols = async (cursor = null) => {
    if (isLoading || (cursor === null && allIdols.length > 0)) return;
    setIsLoading(true);

    try {
      const { list, nextCursor: newCursor } = await getIdols({
        cursor,
        pageSize: 16,
      });

      const storedFavorites = getStoredFavorites();
      setMyFavorites(storedFavorites);

      const filteredList = list.filter(
        (idol) => !storedFavorites.some((fav) => fav.id === idol.id),
      );

      setAllIdols((prev) => [...prev, ...filteredList]);
      setNextCursor(newCursor);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIdols();
  }, []);
  return (
    <div className='min-h-screen w-full bg-black text-white'>
      <Header />

      <div className='mx-auto max-w-[1400px] px-6 md:px-6 lg:px-48 xl:px-48'>
        <div className='flex flex-col gap-20 py-10'>
          <section className='mt-20'>
            <h2 className='mb-10 text-[1.6rem] font-bold sm:text-[2.4rem]'>
              내가 관심있는 아이돌
            </h2>
            <div className='min-h-[180px]'>
              <FavoriteList
                favorite={myFavorites}
                setIdol={setAllIdols}
                setFavorite={setMyFavorites}
              />
            </div>

            {/* 중간구분선 */}
            <div className='flex w-full justify-center'>
              <div className='my-10 w-full max-w-[1200px] border-t border-gray-700'></div>
            </div>
          </section>

          <section className='relative md:mt-30'>
            <h2 className='mb-10 text-[1.6rem] font-bold sm:text-[2.4em]'>
              관심 있는 아이돌을 추가해보세요.
            </h2>

            <div className='min-h-[400px]'>
              <AddFavorite
                idol={allIdols}
                setIdol={setAllIdols}
                setFavorite={setMyFavorites}
                handleMoreIdols={() => fetchIdols(nextCursor)}
                hasMore={!!nextCursor}
                favorite={myFavorites}
                isLoading={isLoading}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
