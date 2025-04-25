import Header from '@components/layouts/Header';
import FavoriteList from './components/FavoriteIdolList';
import useMypageIdols from './hooks/useMyPageIdols';
import IdolSelectList from './components/SelectIdolList';

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

      <div className='mx-auto max-w-[140rem] px-6 shadow-2xl shadow-pink-300/60 md:px-6 lg:px-6 xl:px-48'>
        <FavoriteList
          favorites={favorites}
          setIdols={setIdols}
          setFavorites={setFavorites}
        />

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
