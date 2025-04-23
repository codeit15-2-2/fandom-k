export const FAVORITE_KEY = 'Favorites';

export const getStoredFavorites = () => {
  const data = localStorage.getItem(FAVORITE_KEY);
  return data ? JSON.parse(data) : [];
};

export const setStoredFavorites = (favorites) => {
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorites));
};
