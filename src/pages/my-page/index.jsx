import { AnimatePresence, motion } from 'motion/react';
import { lazy } from 'react';
const FavoriteListSection = lazy(
  () => import('./sections/FavoriteListSection'),
);

const IdolSelectSection = lazy(() => import('./sections/SelectListSection'));
import useMypageIdols from './hooks/useMyPageIdols';

import FixedButton from './components/common/Button';
import useFavoriteHandler from './hooks/useFavoriteHandler';

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

  const { selectedIdols, handleSelect, handleAddFavorites } =
    useFavoriteHandler({
      idols,
      favorites,
      setFavorites,
      setIdols,
    });

  return (
    <div className='relative w-full min-h-screen text-white bg-black'>
      <div className='mx-auto max-w-[140rem] rounded-2xl px-6 md:px-6 lg:px-6 xl:px-48'>
        <FavoriteListSection
          favorites={favorites}
          setIdols={setIdols}
          setFavorites={setFavorites}
        />

        <IdolSelectSection
          idols={idols}
          setIdols={setIdols}
          setFavorites={setFavorites}
          handleMoreIdols={() => fetchIdols(nextCursor)}
          hasMore={!!nextCursor}
          favorites={favorites}
          isLoading={isLoading}
          isError={isError}
          handleSelect={handleSelect}
          selectedIdols={selectedIdols}
        />
      </div>

      <FixedButton
        onClick={handleAddFavorites}
        isLoading={isLoading}
        selectedIdols={selectedIdols}
      ></FixedButton>
    </div>
  );
}
