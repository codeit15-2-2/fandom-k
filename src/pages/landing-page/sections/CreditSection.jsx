import { cn } from '@libs/cn';
import Button from '@pages/landing-page/components/common/Button';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import loopVideo from '@assets/loop.mp4';
import logo from '@assets/logos/logo.webp';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

// 메인 크레딧 섹션
const CreditSection = () => (
  <section className={cn(SNAP_ITEM, 'relative bg-[#000000]')}>
    <CreditBackgroundVideo />
    <CreditHeader />
    <CreditDescription />
    <GradientLayout />
  </section>
);

// 배경 비디오 컴포넌트
const CreditBackgroundVideo = () => (
  <motion.video
    className='absolute left-1/2 z-0 h-full w-full max-w-[120rem] min-w-[80rem] -translate-x-1/2 -translate-y-1/8 object-contain'
    loop
    autoPlay
    muted
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 100 }}
    viewport={{ once: false }}
    transition={{
      type: 'spring',
      stiffness: 60,
      damping: 30,
      mass: 0.5,
      delay: 1,
    }}
  >
    <source src={loopVideo} />
  </motion.video>
);

// 배경 그래디언트 레이아웃
const GradientLayout = () => (
  <div className='to-brand-2/20 absolute bottom-0 z-0 h-full w-full bg-gradient-to-tl from-purple-100/10 via-purple-500/10' />
);

// 헤더 섹션
const CreditHeader = () => <div className='h-1/4' />;

// 설명 + CTA 섹션
const CreditDescription = () => (
  <motion.div
    className='z-10 mt-20 flex flex-col items-center justify-center gap-16 text-4xl font-semibold text-white md:mt-10 md:text-7xl'
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 100 }}
    viewport={{ once: false }}
    transition={{
      type: 'spring',
      stiffness: 60,
      damping: 30,
      mass: 0.5,
      delay: 2,
    }}
  >
    <div className='flex flex-col gap-4'>
      <p className='text-center'>진심이 현실이 되는 공간</p>
      <p className='flex items-center justify-center gap-2'>
        <img src={logo} className='h-auto w-1/5' alt='FANDOM-K 로고' />
        <span>에서 시작해보세요</span>
      </p>
    </div>
    <Link to='/main'>
      <Button>크레딧 받고 시작하기</Button>
    </Link>
  </motion.div>
);
export default CreditSection;
