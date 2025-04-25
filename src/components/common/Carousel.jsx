import { motion } from 'motion/react';
import { useCarousel } from '@hooks/useCarousel';
import IdolCardList from '@components/card/IdolCard';
import ChevronLeft from '@assets/icons/icon_chevron-left';
import ChevronRight from '@assets/icons/icon_chevron-right';
import { useState, useEffect } from 'react';

/**
 * Carousel 컴포넌트
 *
 * 슬라이드 형태로 콘텐츠를 보여주는 컴포넌트입니다.
 * 한 번에 여러 개의 아이템을 보여줄 수 있으며, 좌우 화살표로 슬라이드를 이동할 수 있습니다.
 *
 *
 * @param {Object} props - Carousel props
 * @param {React.ComponentType<{ item: any }>} props.RenderComponent - 각 슬라이드에 렌더링할 컴포넌트. `item` prop을 받아야 합니다.
 * @param {number} [props.slideToShow=4] - 한 번에 보여줄 아이템 수 (기본값: 4)
 * @param {number} [props.gap=4] - 아이템 간의 간격(px 단위, 기본값: 4)
 * @param {string} [props.itemClassName=''] - 각 슬라이드 아이템에 추가할 Tailwind CSS 클래스 또는 사용자 정의 클래스
 * @example
 * <Carousel
 *   RenderComponent={({ item }) => <Card item={item} />} 컴포넌트는 함수형으로 작성해야 props를 넘겨줄 수 있음음
 *   slideToShow={4}
 *   gap={8}
 *   itemClassName="rounded-lg shadow-md"
 * />
 *
 *
 * @returns {JSX.Element} 슬라이드 캐러셀 UI
 */

const Carousel = ({
  data,
  RenderComponent,
  slideToShow = 4, // 기본값으로 4개 표시
  gap = 4, // 아이템 간격
  button,
  ...props
}) => {
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

  // 아이템 너비 계산 (카드 너비를 이정하게 유지하고 싶다면)
  const itemWidth = `calc((100% - ${(responsiveOffset - 1) * gap}px) / ${responsiveOffset})`;

  console.log('data', data);

  if (!data) return null;

  return (
    <div className='relative'>
      <motion.div
        ref={carouselRef}
        className={`flex ${gap > 0 ? `gap-${gap}` : ''}`}
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
            key={item.id}
            style={{ minWidth: itemWidth, width: itemWidth }}
          >
            {RenderComponent && (
              <RenderComponent
                id={item.id}
                src={item.idol.profilePicture}
                location={item.subtitle}
                credit={item.receivedDonations}
                title={item.title}
                daysLeft='4'
                button={button}
              >
                <IdolCardList.IdolCardFooter />
              </RenderComponent>
            )}
          </motion.div>
        ))}
      </motion.div>

      <button
        className='absolute top-1/2 -left-10 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-gray-800/60 p-2 text-white'
        onClick={prevSlide}
        disabled={isTransitioning}
      >
        <ChevronLeft />
      </button>
      <button
        className='absolute top-1/2 -right-10 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-gray-800/60 p-2 text-white'
        onClick={nextSlide}
        disabled={isTransitioning}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
