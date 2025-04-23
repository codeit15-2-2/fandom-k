import Header from '@components/layouts/Header';
import FavoriteList from './components/FavoriteList';


import useMypageIdols from '@hooks/useMyPageIdols';
import IdolSelectList from './components/IdolSelectList';

export default function MyPage() {
  const {
    favorites,
    setFavorites,
    idols,
    setIdols,
    nextCursor,
    fetchIdols,
    isLoading,
    isError,
  } = useMypageIdols();

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

        <IdolSelectList
          idols={idols}
          setIdols={setIdols}
          setFavorites={setFavorites}
          handleMoreIdols={() => fetchIdols(nextCursor)}
          hasMore={!!nextCursor}
          favorites={favorites}
          isLoading={isLoading}
          isError={isError}
        />
      </div>
    </div>
  );
}
