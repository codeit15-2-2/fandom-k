import { useState, useCallback,useMemo } from 'react';
import { setStoredFavorites } from '@utils/storeFavorite';
import { useToast } from '@contexts/ToastContext';

// 아이돌 리스트간의 추가, 삭제 로직을 커스텀 훅으로 분리

const useFavoriteHandler = ({ idols, favorites, setFavorites, setIdols }) => {
  const [selectedIdols, setSelectedIdols] = useState([]);
  const { showSuccess } = useToast();

  // 추가할 아이돌들을 선택하는 로직
  const handleSelect = useCallback((id) => {
    setSelectedIdols((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  }, []);

  // 선택된 아이돌들을 FavoriteList에 추가하는 로직
  const handleAddFavorites = useCallback(() => {
    const selectedIdolObjects = idols.filter((idol) =>
      selectedIdols.includes(idol.id),
    );

    // 중복된 id값을 가진 아이돌이 추가,리스트에 생성되는 것을 방지
    const newFavorites = [
      ...favorites,
      ...selectedIdolObjects.filter(
        (idol) => !favorites.some((fav) => fav.id === idol.id),
      ),
    ];

    setFavorites(newFavorites);
    setStoredFavorites(newFavorites);
    setIdols((prev) => prev.filter((idol) => !selectedIdols.includes(idol.id)));
    setSelectedIdols([]);

    // 토스트 알림 추가
    if (selectedIdolObjects.length > 0) {
      showSuccess(
        `${selectedIdolObjects.length}명의 아이돌이 관심 목록에 추가되었습니다.`,
      );
    }
  }, [idols, selectedIdols, favorites, setFavorites, setIdols, showSuccess]);

  // FavoriteList에서 아이돌을 삭제하는 로직
  const handleRemoveFavorite = useCallback(
    (selectedFavIdol) => {
      const newFavorites = favorites.filter(
        (fav) => fav.id !== selectedFavIdol.id,
      );
      setFavorites(newFavorites);
      setStoredFavorites(newFavorites);
      setIdols((prev) => [...prev, selectedFavIdol]);

      // 토스트 알림 추가
      showSuccess(`${selectedFavIdol.name}님이 관심 목록에서 제거되었습니다.`);
    },
    [favorites, setFavorites, setIdols, showSuccess],
  );

  return {
    selectedIdols,
    handleSelect,
    handleAddFavorites,
    handleRemoveFavorite,
  };
};

export default useFavoriteHandler;
