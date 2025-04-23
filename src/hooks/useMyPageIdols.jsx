import { useState, useEffect } from 'react';
import { getIdols } from '@apis/idolsApi';
import { getStoredFavorites } from '@utils/storeFavorite';

const useMypageIdols = () => {
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

  return {
    favorites,
    setFavorites,
    idols,
    setIdols,
    nextCursor,
    fetchIdols,
    isLoading,
  };
};

export default useMypageIdols;
