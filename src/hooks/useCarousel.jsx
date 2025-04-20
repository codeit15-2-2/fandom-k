import { useState } from 'react';

export const useCarousel = (data, offset) => {
  const [index, setIndex] = useState(0);
  const [back, setBack] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const changeIndex = (direction) => {
    if (leaving) return;

    const totalData = data.length;
    const maxIndex = Math.floor(totalData / offset) - 1;

    setIndex((prev) => {
      if (direction === 'next') {
        setBack(false);
        setLeaving(true);
        return prev === maxIndex ? 0 : prev + 1;
      } else {
        setBack(true);
        setLeaving(true);
        return prev === 0 ? maxIndex : prev - 1;
      }
    });
  };

  const currentItems = data.slice(offset * index, offset * index + offset);

  return {
    index,
    back,
    leaving,
    toggleLeaving,
    changeIndex,
    currentItems,
  };
};
