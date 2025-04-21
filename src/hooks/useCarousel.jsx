import { useState } from 'react';

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
        if (nextStartIdx > maxStartIdx) return 0;
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
