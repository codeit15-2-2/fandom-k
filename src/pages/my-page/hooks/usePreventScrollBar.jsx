import { useState, useEffect } from 'react';

//Favorite 리스트에 추가될시 애니메이션 때문에 스크롤바가 생길정도로 데이터가 많지않더라도 스크롤바가 나타났다 사라지는 이슈를 해결하기위한 커스텀 훅
const usePreventScrollBar = (favorites) => {
  const [onAnimate, setOnAnimate] = useState(false);

  useEffect(() => {
    if (favorites.length > 0) {
      const timer = setTimeout(() => {
        setOnAnimate(true);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setOnAnimate(false);
    }
  }, [favorites.length]);
  return onAnimate;
};

export default usePreventScrollBar;
