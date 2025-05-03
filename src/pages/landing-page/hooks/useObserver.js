import { useEffect, useState } from 'react';

/**
 * 요소가 화면에 나타날 때 감지하는 커스텀 훅
 * @param {Object} options - Intersection Observer 옵션
 * @param {number} options.threshold - 요소가 얼마나 보여야 감지할지 임계값 (0~1)
 * @param {number} options.delay - 요소가 보인 후 상태 변경까지의 지연시간 (ms)
 * @param {string} options.rootMargin - Observer의 rootMargin 값
 * @returns {Array} [ref, isVisible, setIsVisible] - 관찰할 요소의 ref / 가시성 상태 / 가시성 상태 설정 함수
 */

export const useObserver = ({
  threshold = 0.5,
  delay = 100,
  rootMargin = '0px',
} = {}) => {
  const [ref, setRef] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observer = null;

    // ref가 null이 아닐 때만 observer 생성 및 관찰 시작
    if (ref) {
      observer = new IntersectionObserver(
        ([entry]) => {
          // isIntersecting 상태 업데이트
          setIsIntersecting(entry.isIntersecting);

          // 요소가 보이면 observer 중단
          if (entry.isIntersecting) {
            observer.disconnect();
          }
        },
        { threshold, rootMargin },
      );

      observer.observe(ref);
    }

    // 클린업 함수에서 observer가 존재할 경우만 disconnect
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [ref, threshold, rootMargin]);

  useEffect(() => {
    let timeout = null;

    if (isIntersecting) {
      timeout = setTimeout(() => setIsVisible(true), delay);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isIntersecting, delay]);

  return [setRef, isVisible, setIsVisible];
};
