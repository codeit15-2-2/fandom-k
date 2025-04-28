import { useObserver } from '@pages/landing-page/hooks/useObserver';
import { cn } from '@libs/cn';
import Button from '@pages/landing-page/components/common/Button';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import loopVideo from '@assets/loop.mp4';
import logo from '@assets/logos/logo.webp';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

// 메인 크레딧 섹션
const CreditSection = () => {
  // useObserver 훅 사용하여 스크롤 애니메이션 제어
  const [sectionRef, isVisible] = useObserver({
    threshold: 0.3, // 섹션이 30% 이상 보이면 감지
    delay: 300, // 300ms 지연 후 애니메이션 시작
    rootMargin: '0px', // 기본값 사용
  });

  return (
    <section
      ref={sectionRef}
      className={cn(SNAP_ITEM, 'relative overflow-hidden bg-[#000000]')}
    >
      <CreditBackgroundVideo isVisible={isVisible} />
      <CreditHeader />
      <CreditDescription isVisible={isVisible} />
      <GradientLayout />
    </section>
  );
};

// 배경 비디오 컴포넌트
const CreditBackgroundVideo = ({ isVisible }) => (
  <motion.video
    className='absolute left-1/2 z-0 h-full w-full max-w-[120rem] min-w-[80rem] -translate-x-1/2 -translate-y-1/8 object-contain'
    loop
    autoPlay
    muted
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{
      type: 'spring',
      stiffness: 60,
      damping: 30,
      mass: 0.5,
      delay: 0.5, // 비디오가 먼저 등장하도록 딜레이 조정
    }}
  >
    <source src={loopVideo} />
  </motion.video>
);

// 배경 그래디언트 레이아웃
const GradientLayout = () => (
  <div className='to-brand-2/20 clip absolute bottom-0 z-0 h-full w-full bg-gradient-to-tl from-purple-100/10 via-purple-500/10' />
);

// 헤더 섹션
const CreditHeader = () => <div className='h-1/4' />;

// 설명 + CTA 섹션
const CreditDescription = ({ isVisible }) => (
  <motion.div
    className='z-10 mt-20 flex flex-col items-center justify-center gap-16 text-4xl font-semibold text-white md:mt-10 md:text-7xl'
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{
      type: 'spring',
      stiffness: 60,
      damping: 30,
      mass: 0.5,
      delay: 1.2, // 비디오 다음에 설명이 등장하도록 딜레이 조정
    }}
  >
    <div className='flex flex-col gap-4'>
      <motion.p
        className='text-center'
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        진심이 현실이 되는 공간
      </motion.p>
      <motion.p
        className='flex items-center justify-center gap-2'
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <motion.img
          src={logo}
          className='h-auto w-1/5'
          alt='FANDOM-K 로고'
          initial={{ scale: 0.8 }}
          animate={isVisible ? { scale: 1 } : { scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 200, delay: 2.0 }}
        />
        <span>에서 시작해보세요</span>
      </motion.p>
    </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 2.3 }}
    >
      <Button>크레딧 받고 시작하기</Button>
    </motion.div>
  </motion.div>
);

export default CreditSection;
