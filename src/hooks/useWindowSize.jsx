import { useEffect, useState } from 'react';

//현재 창 크기 파악용 hook -> 이 훅을통해 화면마다 공통 컴포넌트 propSize를 다르게 요청
const useWindowSize = () => {
  const [width, setWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export default useWindowSize;
