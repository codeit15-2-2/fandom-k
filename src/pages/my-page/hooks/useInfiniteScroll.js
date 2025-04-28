import { useEffect } from 'react';

//IntersectionObserver를 사용한 무한 스크롤
//화면을 아래로 내릴때 뷰포트에 loaderRef가 닿으면(나타나면)추가데이터를 불러오는 방식(handleMoreIdols())
const useInfiniteScroll = ({
  targetRef,
  onIntersect,
  hasMore,
  rootMargin = '0px 0px 50px 0px',
  threshold = 1.0,
}) => {
  useEffect(() => {
    if (!targetRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect(); // unmount,hasmore,handleMoreIdols가 변경,재호출될때마다 기존의 observer를 해제하여 메모리 누수 방지
    };
  }, [targetRef, onIntersect, hasMore, rootMargin, threshold]);
};

export default useInfiniteScroll;
