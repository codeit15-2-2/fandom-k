import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useCarousel } from '@hooks/useCarousel';
const data = [
  { id: 1, name: '지연' },
  { id: 2, name: '철수' },
  { id: 3, name: '철수3' },
  { id: 4, name: '철수4' },
  { id: 5, name: '철수5' },
  { id: 6, name: '철수6' },
  { id: 7, name: '철수7' },
  { id: 8, name: '철수8' },
  { id: 9, name: '철수9' },
  { id: 10, name: '철수10' },
  { id: 11, name: '철수11' },
  { id: 12, name: '철수12' },
  { id: 13, name: '철수13' },
  { id: 14, name: '철수14' },
  { id: 15, name: '철수15' },
  { id: 16, name: '철수16' },
];

const Carousel = (
  {
    /*data*/
  },
) => {
  const offset = 5;

  const { index, back, leaving, toggleLeaving, changeIndex, currentItems } =
    useCarousel(data, offset);

  const rowVariants = {
    initial: (back) => {
      return {
        x: back ? -window.outerWidth : window.outerWidth,
      };
    },
    visible: {
      x: 0,
    },
    exit: (back) => {
      return {
        x: back ? window.outerWidth : -window.outerWidth,
      };
    },
  };

  return (
    <>
      <button onClick={() => changeIndex('next')}>다음 캐러셀</button>
      <button onClick={() => changeIndex('prev')}>이전 캐러셀</button>
      <div className='relative'>
        <AnimatePresence
          initial={false}
          custom={back}
          onExitComplete={toggleLeaving}
        >
          <motion.div
            custom={back}
            key={index}
            variants={rowVariants}
            initial='initial'
            animate='visible'
            exit='exit'
            transition={{ type: 'tween', duration: '1' }}
            className='absolute grid w-full grid-cols-5'
          >
            {currentItems.map((item) => (
              <motion.div key={item.id}>{item.name}</motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Carousel;
