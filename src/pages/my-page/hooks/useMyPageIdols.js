import { useState, useEffect } from 'react';
import { getIdols } from '@apis/idolsApi';
import { getStoredFavorites } from '@utils/storeFavorite';

// 아이돌데이터 get 요청, state들을 분리해놓기위한 만든 hook
const useMypageIdols = () => {
  const [favorites, setFavorites] = useState([]); //선택후 추가된 아이돌들이 저장될 state
  const [idols, setIdols] = useState([]); //api요청을 통해 받은 아이돌데이터가 저장될 state
  const [nextCursor, setNextCursor] = useState(null); //데이터를 분할해서 받아오기위한 cursor state
  const [isLoading, setIsLoading] = useState(false); // 로딩상태임을 다른 컴포넌트에 알려 관련 로직을 위한 state
  const [isError, setIsError] = useState(null); // Error여부 전달용 state

  const fetchIdols = async (cursor = null) => {
    if (isLoading || (cursor === null && idols.length > 0)) return;
    setIsLoading(true);
    setIsError(null);

    try {
      const { list, nextCursor } = await getIdols({
        cursor,
        pageSize: 16,
      });

      const storedFavorites = getStoredFavorites();
      setFavorites(storedFavorites);

      //가져온 데이터중 localStorage상에 저장된 아이돌들은 제외
      const filteredList = list.filter(
        (idol) => !storedFavorites.some((fav) => fav.id === idol.id),
      );
      console.log(nextCursor);
      setIdols((prev) => [...prev, ...filteredList]);
      setNextCursor(nextCursor);
    } catch (err) {
      console.error(err);
      setIsError('서버요청중 에러가 발생하였습니다.');
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
    isError,
  };
};

export default useMypageIdols;
