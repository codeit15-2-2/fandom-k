import { useObserver } from '@pages/landing-page/hooks/useObserver';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import { cn } from '@libs/cn';
import handphoneMobile from '@assets/elements/elem_handphone_mobile.webp';
import handphoneTablet from '@assets/elements/elem_handphone_tablet.webp';
import { motion } from 'motion/react';

// Heading component with animation
const AnimatedHeading = ({ isVisible, children, delay }) => (
  <motion.h1
    className='text-center text-6xl font-semibold md:text-8xl'
    initial={{ opacity: 0, y: 30 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.7, delay }}
  >
    {children}
  </motion.h1>
);

// Progress bar component with animation
const VerticalProgressBar = ({ isVisible }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.7, delay: 0.5 }}
    className='h-full w-[1rem] rounded-full bg-white/30 md:w-[2rem]'
  >
    <motion.div
      className='w-[1rem] rounded-full bg-white/70 md:w-[2rem]'
      initial={{ height: 0 }}
      animate={isVisible ? { height: '100%' } : { height: 0 }}
      transition={{ type: 'spring', damping: 50, stiffness: 60, delay: 3 }}
    />
  </motion.div>
);

// Phone image component with animation
const PhoneImage = ({ isVisible }) => (
  <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
    <motion.div
      className='translate-y-20'
      initial={{ x: -1000, scale: 0.8 }}
      animate={isVisible ? { x: 0, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 40, damping: 15, delay: 1.5 }}
    >
      <img
        src={handphoneMobile}
        className='block md:hidden'
        alt='모바일 핸드폰 이미지'
      />
      <img
        src={handphoneTablet}
        className='hidden translate-y-30 scale-130 md:block'
        alt='태블릿 핸드폰 이미지'
      />
    </motion.div>
  </div>
);

const VerticalDonationSection = () => {
  // useObserver 훅 사용하여 스크롤 애니메이션 제어
  const [sectionRef, isVisible] = useObserver({
    threshold: 0.3, // 섹션이 30% 이상 보이면 감지
    delay: 300, // 300ms 지연 후 애니메이션 시작
    rootMargin: '0px', // 기본값 사용
  });

  return (
    <div
      ref={sectionRef}
      className={cn(
        SNAP_ITEM,
        'from-brand-1 to-brand-2 relative overflow-hidden bg-gradient-to-br',
      )}
    >
      {/*후원 설명 섹션 */}
      <div className='relative flex h-full min-h-[80rem] w-full flex-col items-center justify-center px-20 py-40 text-white'>
        <div className='flex h-full flex-col items-center gap-8'>
          <AnimatedHeading isVisible={isVisible} delay={0.3}>
            클릭으로
            <br />
            가까워지는
          </AnimatedHeading>

          <VerticalProgressBar isVisible={isVisible} />

          <AnimatedHeading isVisible={isVisible} delay={0.7}>
            최애와
            <br />나
          </AnimatedHeading>
        </div>

        <PhoneImage isVisible={isVisible} />
      </div>
    </div>
  );
};

export default VerticalDonationSection;
