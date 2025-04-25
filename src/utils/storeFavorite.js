export const FAVORITE_KEY = 'Favorites'; //localStorage Key값 지정

//localStorage에 Json형태로 저장된 favorite에 추가된 아이돌들을 파싱하여 가져오는 로직
export const getStoredFavorites = () => {
  const data = localStorage.getItem(FAVORITE_KEY);
  return data ? JSON.parse(data) : [];
};

//추가로직을 통해 아이돌들을 추가하면 localStorage에도 Json형태로 저장하는 로직
export const setStoredFavorites = (favorites) => {
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorites));
};
