import { useEffect } from 'react';
import { useState } from 'react';

/**
 * 요소가 화면에 나타날 때 감지하는 커스텀 훅
 * @param {Object} options - Intersection Observer 옵션
 * @param {number} options.threshold - 요소가 얼마나 보여야 감지할지 임계값 (0~1)
 * @param {number} options.delay - 요소가 보인 후 상태 변경까지의 지연시간 (ms)
 * @param {string} options.rootMargin - Observer의 rootMargin 값
 * @returns {Array} [ref, isVisible, setIsVisible] - 관찰할 요소의 ref / 가시성 상태 / 가시성 상태 설정 함수
 */

export const useObserver = ({
  threshold = 0.3,
  delay = 100,
  rootMargin = '0px',
} = {}) => {
  const [ref, setRef] = useState(null);
  const [isIntersecting, setIsIntersecting] =
    useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    ref && observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin]);

  useEffect(() => {
    if (isIntersecting) {
      const timeout = setTimeout(
        () => setIsVisible(true),
        delay,
      );
      return () => clearTimeout(timeout);
    }
  }, [isIntersecting, delay]);

  return [setRef, isVisible, setIsVisible];
};
