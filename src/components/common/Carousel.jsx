import { AnimatePresence, motion } from 'motion/react';
import { useCarousel } from '@hooks/useCarousel';
import ChevronRight from '@assets/icons/icon_chevron-right';
import ChevronLeft from '@assets/icons/icon_chevron-left';
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
  const slideBy = 1;

  const { index, back, leaving, toggleLeaving, changeIndex, currentItems } =
    useCarousel(data, offset, slideBy);

  const rowVariants = {
    initial: (back) => {
      return {
        x: back ? -100 : 100,
        opacity: 0,
      };
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: 'tween',
        ease: 'easeInOut',
      },
    },
    exit: (back) => {
      return {
        x: back ? 100 : -100,
        opacity: 0,
        transition: {
          duration: 0.5,
          type: 'tween',
          ease: 'easeInOut',
        },
      };
    },
  };

  return (
    <>
      <div className='relative overflow-hidden p-20'>
        <AnimatePresence
          initial={false}
          custom={back}
          onExitComplete={toggleLeaving}
          mode='wait'
        >
          <motion.div
            custom={back}
            key={index}
            variants={rowVariants}
            initial='initial'
            animate='visible'
            exit='exit'
            className='absolute grid w-full grid-cols-5 px-10'
          >
            {currentItems.map((item) => (
              <motion.div key={item.id}>{item.name}</motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <button
          className='absolute right-0 cursor-pointer bg-gray-100/80 p-2'
          onClick={() => changeIndex('next')}
        >
          <ChevronRight />
        </button>
        <button
          className='absolute left-0 cursor-pointer bg-gray-100/80 p-2'
          onClick={() => changeIndex('prev')}
        >
          <ChevronLeft />
        </button>
      </div>
    </>
  );
};

export default Carousel;
