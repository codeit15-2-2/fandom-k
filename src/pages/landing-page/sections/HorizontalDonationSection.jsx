import { useObserver } from '@pages/landing-page/hooks/useObserver';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import { cn } from '@libs/cn';
import handphone from '@assets/elements/elem_handphone.webp';
import { motion } from 'motion/react';
import logo from '@assets/logos/logo.webp';
import { useMemo } from 'react';

// Logo component with animation
const Logo = ({ isVisible }) => (
  <motion.img
    src={logo}
    alt='로고 이미지'
    className='w-[18rem]'
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ type: 'spring', stiffness: 80, damping: 30 }}
  />
);

// Title component with animation
const Title = ({ isVisible }) => (
  <motion.h1
    className='text-center text-[20rem]/60 font-bold tracking-tighter'
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ type: 'spring', stiffness: 80, damping: 30 }}
  >
    EASY
    <br />
    DONATION
  </motion.h1>
);

// Progress bar component with animation
const ProgressBar = ({ isVisible }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ type: 'spring', stiffness: 80, damping: 30 }}
    className='mt-20 h-4 w-1/2 flex-1 rounded-full bg-white/30'
  >
    <motion.div
      className='h-4 rounded-full bg-white'
      initial={{ width: 0 }}
      animate={isVisible ? { width: '100%' } : { width: 0 }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 30,
        delay: 2,
      }}
    />
  </motion.div>
);

// Text component with animation
const AnimatedText = ({ isVisible, children, delay, direction = 'left' }) => (
  <motion.h1
    className='text-8xl font-semibold'
    initial={{
      opacity: 0,
      x: direction === 'left' ? -50 : 50,
    }}
    animate={
      isVisible
        ? {
            opacity: 1,
            x: 0,
          }
        : {
            opacity: 0,
            x: direction === 'left' ? -50 : 50,
          }
    }
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.h1>
);

// Phone image component with animation
const PhoneImage = ({ isVisible }) => (
  <motion.div
    className='absolute bottom-0 flex -translate-x-40 items-center justify-center'
    initial={{ y: 200, opacity: 0 }}
    animate={isVisible ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
    transition={{ type: 'spring', stiffness: 40, damping: 15 }}
  >
    <img src={handphone} alt='핸드폰 이미지' />
  </motion.div>
);

const HorizontalDonationSection = () => {
  // useObserver 훅 사용하여 스크롤 애니메이션 제어
  const [sectionRef, isVisible] = useObserver({
    threshold: 0.2, // 섹션이 20% 이상 보이면 감지
    delay: 300, // 300ms 지연 후 애니메이션 시작
    rootMargin: '0px', // 기본값 사용
  });

  // 텍스트 콘텐츠 메모이제이션
  const textContent = useMemo(
    () => ({
      left: (
        <>
          클릭으로
          <br />
          가까워지는
        </>
      ),
      right: (
        <>
          최애와
          <br />나
        </>
      ),
    }),
    [],
  );

  return (
    <div
      ref={sectionRef}
      className={cn(
        SNAP_ITEM,
        'from-brand-1 to-brand-2 relative overflow-hidden bg-gradient-to-br',
      )}
    >
      {/*후원 설명 섹션 */}
      <div className='relative flex h-full min-h-[10rem] w-full max-w-[160rem] flex-col items-center justify-center p-24 text-white'>
        <div className='mb-20 flex h-full w-full flex-col items-center justify-center'>
          <Logo isVisible={isVisible} />
          <Title isVisible={isVisible} />
        </div>

        <div className='mt-40 flex h-full w-full justify-between gap-14'>
          <AnimatedText isVisible={isVisible} delay={0.8} direction='left'>
            {textContent.left}
          </AnimatedText>

          <ProgressBar isVisible={isVisible} />

          <AnimatedText isVisible={isVisible} delay={1.0} direction='right'>
            {textContent.right}
          </AnimatedText>
        </div>

        <PhoneImage isVisible={isVisible} />
      </div>
    </div>
  );
};

export default HorizontalDonationSection;
