import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import { useState, useEffect } from 'react';
import FavoriteList from './components/FavoriteList';
import AddFavorite from './components/AddFavorite';
import { getIdols } from '@apis/idolsApi';
import { getStoredFavorites } from '@utils/storeFavorite';
import MiddleDivider from './components/middleDivider';

export default function MyPage() {
  const [favorites, setFavorites] = useState([]);
  const [idols, setIdols] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  

  const fetchIdols = async (cursor = null) => {
    if (isLoading || (cursor === null && idols.length > 0)) return;
    setIsLoading(true);

    try {
      const { list, nextCursor: newCursor } = await getIdols({
        cursor,
        pageSize: 16,
      });

      const storedFavorites = getStoredFavorites();
      setFavorites(storedFavorites);

      //가져온 데이터중 localStorage상에 저장된 아이돌들은 제외
      const filteredList = list.filter(
        (idol) => !storedFavorites.some((fav) => fav.id === idol.id),
      );

      setIdols((prev) => [...prev, ...filteredList]);
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

      <div className='mx-auto max-w-[140rem] px-6 md:px-6 lg:px-6 xl:px-48'>
        <div className='flex flex-col gap-20 py-10'>
          <FavoriteList
            favorites={favorites}
            setIdols={setIdols}
            setFavorites={setFavorites}
          />
        </div>

        <AddFavorite
          idols={idols}
          setIdols={setIdols}
          setFavorites={setFavorites}
          handleMoreIdols={() => fetchIdols(nextCursor)}
          hasMore={!!nextCursor}
          favorites={favorites}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
