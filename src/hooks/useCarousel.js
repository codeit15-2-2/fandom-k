import { useEffect, useRef, useState, useCallback } from 'react';
/**
 * @typedef {Object} CarouselOptions
 * @property {number} totalDataLength - 캐러셀에 표시할 전체 데이터 항목의 수
 * @property {number} offset - 한 화면에 표시할 카드의 개수
 */

/**
 * @typedef {Object} CarouselReturn
 * @property {number} currentIndex - 현재 표시되는 첫 번째 항목의 인덱스 값
 * @property {number} width - 각 캐러셀 항목의 너비 (픽셀셀)
 */

const DURATION = 300;

export const useCarousel = ({ totalDataLength, offset, data, gap = '20' }) => {
  // 보여줄 페이지 위치
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(200);
  // 애니메이션 중복 방지를 위한 상태 관리
  const [isTransitioning, setIsTransitioning] = useState(false);
  //캐러셀의 width를 지정해주기 위한 ref
  const carouselRef = useRef(null);

  const calculateWidth = useCallback(() => {
    if (carouselRef.current) {
      const totalGapWidth = gap * (offset - 1);
      const cardWidth =
        (carouselRef.current.offsetWidth - totalGapWidth) / offset;
      setWidth(cardWidth);
    }
  }, [offset]);

  useEffect(() => {
    if (!data?.length) return;

    calculateWidth();
    window.addEventListener('resize', calculateWidth);

    return () => {
      window.removeEventListener('resize', calculateWidth);
    };
  }, [data, calculateWidth]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    if (currentIndex >= totalDataLength - offset) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setTimeout(() => setIsTransitioning(false), DURATION);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    if (currentIndex <= 0) {
      setCurrentIndex(totalDataLength - offset);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    setTimeout(() => setIsTransitioning(false), DURATION);
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
