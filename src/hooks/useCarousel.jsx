import { useState } from 'react';

/**
 * useCarousel
 *
 * @param {Array} data - 전체 캐러셀 데이터 배열
 * @param {number} offset - 한 번에 보여줄 아이템 수
 * @param {number} [slideBy=1] - 슬라이드 한 번에 이동할 아이템 수
 * @returns {{
 *   index: number, // 현재 페이지 인덱스
 *   back: boolean, // 이전 방향으로 이동했는지 여부
 *   leaving: boolean, // 현재 애니메이션 중인지 여부
 *   toggleLeaving: () => void, // leaving 상태 토글 함수
 *   changeIndex: (direction: 'next' | 'prev') => void, // 슬라이드 방향 전환 함수
 *   currentItems: Array // 현재 보여질 아이템 배열
 * }}
 *
 * @example
 * const {
 *   index,
 *   back,
 *   leaving,
 *   toggleLeaving,
 *   changeIndex,
 *   currentItems
 * } = useCarousel(data, 5, 1);
 */

export const useCarousel = (data, offset, slideBy = 1) => {
  const [index, setIndex] = useState(0);
  const [back, setBack] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const changeIndex = (direction) => {
    if (leaving) return;

    const totalData = data.length;
    const maxStartIdx = totalData - offset;

    setIndex((prev) => {
      if (direction === 'next') {
        setBack(false);
        setLeaving(true);

        const nextStartIdx = (prev + 1) * slideBy;
        if (nextStartIdx > maxStartIdx) return 0; // 루프
        return prev + 1;
      } else {
        setBack(true);
        setLeaving(true);

        const nextStartIdx = (prev - 1) * slideBy;
        if (nextStartIdx < 0) return Math.floor(maxStartIdx / slideBy);
        return prev - 1;
      }
    });
  };

  const startIdx = index * slideBy;
  const currentItems = data.slice(startIdx, startIdx + offset);

  return {
    index,
    back,
    leaving,
    toggleLeaving,
    changeIndex,
    currentItems,
  };
};
