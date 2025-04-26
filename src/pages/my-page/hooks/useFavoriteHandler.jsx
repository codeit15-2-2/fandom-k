import { useState, useCallback } from 'react';
import { setStoredFavorites } from '@utils/storeFavorite';

//아이돌 리스트간의 추가,삭제 로직을 커스텀훅으로 분리

const useFavoriteHandler = ({ idols, favorites, setFavorites, setIdols }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  //추가할 아이돌들을 선택하는 로직
  const handleSelect = useCallback((id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  }, []);

  //선택된 아이돌들을 FavoriteList에 추가하는 로직
  const handleAddFavorites = useCallback(() => {
    const selectedIdols = idols.filter((idol) => selectedIds.includes(idol.id));

    // 중복된 id값을 가진 아이돌이 추가되는것을 방지
    const newFavorites = [
      ...favorites,
      ...selectedIdols.filter(
        (idol) => !favorites.some((fav) => fav.id === idol.id),
      ),
    ];

    setFavorites(newFavorites);
    setStoredFavorites(newFavorites);
    setIdols((prev) => prev.filter((idol) => !selectedIds.includes(idol.id)));
    setSelectedIds([]);
  }, [idols, selectedIds, favorites, setFavorites, setIdols]);

  //FavoriteList에서 아이돌을 삭제하는 로직
  const handleRemoveFavorite = useCallback(
    (selectedFavIdol) => {
      const newFavorites = favorites.filter(
        (fav) => fav.id !== selectedFavIdol.id,
      );
      setFavorites(newFavorites);
      setStoredFavorites(newFavorites);
      setIdols((prev) => [...prev, selectedFavIdol]);
    },
    [favorites, setFavorites, setIdols],
  );

  return {
    selectedIds,
    handleSelect,
    handleAddFavorites,
    handleRemoveFavorite,
  };
};

export default useFavoriteHandler;
