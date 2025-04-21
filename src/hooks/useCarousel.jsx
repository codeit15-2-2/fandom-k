import { useEffect, useRef, useState } from 'react';

export const useCarousel = ({ totalDataLength, offset }) => {
  // 보여줄 페이지 위치
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  // 애니메이션 중복 방지를 위한 상태 관리
  const [isTransitioning, setIsTransitioning] = useState(false);
  //캐러셀의 width를 지정해주기 위한 ref
  const carouselRef = useRef(null);

  //
  useEffect(() => {
    if (carouselRef.current) {
      // 캐러셀 전체의 넓이 / 한 번에 보여줄 수 있는 카드 수
      const cardWidth = carouselRef.current.offsetWidth / offset;
      setWidth(cardWidth);
    }
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (currentIndex >= totalDataLength - offset) {
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500);
    } else {
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (currentIndex <= 0) {
      setCurrentIndex(totalDataLength - offset);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    } else {
      setCurrentIndex(currentIndex - 1);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };
  return {
    currentIndex,
    width,
    carouselRef,
    isTransitioning,
    nextSlide,
    prevSlide,
  };
};
