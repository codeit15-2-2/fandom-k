import { useRef, useEffect, useState, useCallback } from 'react';

/**
 * 내부에서 elementRef를 만들고 그 요소의 높이를 반환한다.
 * @returns [elementRef, height]
 */
const useElementHeight = () => {
  const elementRef = useRef(null);
  const [height, setHeight] = useState(0);

  // setHeight 함수에 메모이제이션 적용
  const updateHeight = useCallback(() => {
    if (elementRef.current && elementRef.current.offsetHeight !== height) {
      setHeight(elementRef.current.offsetHeight);
    }
  }, [height]); // height 값이 바뀔 때만 함수가 변경되도록 함

  useEffect(() => {
    updateHeight(); // 초기 높이 설정
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [updateHeight]); // updateHeight가 변경될 때마다 재실행

  return [elementRef, height];
};

export default useElementHeight;
