import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import { useState, useEffect } from 'react';
import FavoriteList from './components/FavoriteList';
import AddFavorite from './components/AddFavorite';
import { getIdols } from '@apis/idolsApi';

export default function MyPage() {
  const [myFavorites, setMyFavorites] = useState([]);
  const [allIdols, setAllIdols] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);

  useEffect(() => {
    const fetchIdols = async () => {
      try {
        const { list } = await getIdols({
          cursor: 0,
          pageSize: 9999,
        });
        setAllIdols(list);
      } catch (err) {
        console.log(err);
      }
    };

    fetchIdols();
  }, []);

  return (
    <div className='min-h-screen w-full bg-black text-white'>
      <Header />

      <div className='flex justify-center px-0 py-10 sm:px-4 lg:px-10'>
        <div className='flex w-full max-w-[1400px] flex-col gap-20'>
          <section className='mt-40'>
            <h2 className='title-text mb-6'>내가 관심있는 아이돌</h2>
            <FavoriteList
              favorite={myFavorites}
              setIdol={setAllIdols}
              setFavorite={setMyFavorites}
            />
          </section>

          <section>
            <h2 className='title-text mb-6'>
              관심 있는 아이돌을 추가해보세요.
            </h2>
            <AddFavorite
              idol={allIdols}
              setIdol={setAllIdols}
              setFavorite={setMyFavorites}
            />
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
