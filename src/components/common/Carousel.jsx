import { motion } from 'motion/react';
import { useCarousel } from '@hooks/useCarousel';
import IdolCardList from '@components/card/IdolCard';
import ChevronLeft from '@assets/icons/icon_chevron-left';
import ChevronRight from '@assets/icons/icon_chevron-right';
import { useState, useEffect } from 'react';

const gap = 20;
const slideToShow = 4;

const Carousel = ({ data, RenderComponent, button, ...props }) => {
  const [responsiveOffset, setResponsiveOffset] = useState(slideToShow);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setResponsiveOffset(4);
      } else if (window.innerWidth >= 768) {
        setResponsiveOffset(3);
      } else if (window.innerWidth >= 640) {
        setResponsiveOffset(2);
      } else {
        setResponsiveOffset(1);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const {
    currentIndex,
    width,
    carouselRef,
    isTransitioning,
    nextSlide,
    prevSlide,
  } = useCarousel({
    totalDataLength: data?.length,
    offset: responsiveOffset,
    data,
  });

  // 아이템 너비 계산
  const itemWidth = `calc((100% - ${(responsiveOffset - 1) * gap}px) / ${responsiveOffset})`;

  if (!data) return null;

  return (
    <div className='relative w-full'>
      <div className='overflow-hidden'>
        <motion.div
          ref={carouselRef}
          className='flex'
          style={{ gap: `${gap}px` }}
          animate={{
            x: currentIndex * -width,
          }}
          transition={{
            type: 'tween',
            duration: 0.5,
          }}
        >
          {data.map((item) => (
            <motion.div
              className='flex justify-center'
              key={item.id}
              style={{ minWidth: itemWidth, width: itemWidth }}
            >
              {RenderComponent && (
                <RenderComponent
                  data={item}
                  id={item.id}
                  src={item.idol.profilePicture}
                  location={item.subtitle}
                  credit={item.receivedDonations}
                  targetCredit={item.targetDonation}
                  title={item.title}
                  deadline={item.deadline}
                  button={button}
                >
                  <IdolCardList.IdolCardFooter />
                </RenderComponent>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 외부 버튼 */}
      <button
        className='absolute top-1/2 -left-15 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-gray-800/60 p-2 text-white'
        onClick={prevSlide}
        disabled={isTransitioning}
      >
        <ChevronLeft />
      </button>
      <button
        className='absolute top-1/2 -right-15 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-gray-800/60 p-2 text-white'
        onClick={nextSlide}
        disabled={isTransitioning}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
