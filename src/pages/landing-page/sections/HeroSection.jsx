import Button from '@pages/landing-page/components/common/Button';
import Circle from '@pages/landing-page/components/elements/Circle';
import DarkLayout from '@pages/landing-page/components/common/DarkLayout';
import logo from '@assets/logos/logo.webp';
import { cn } from '@libs/cn';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar7,
} from '@pages/landing-page/utils/getIdolAvatar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'motion/react';

// 배경 아이돌 동그라미 요소 관련 상수
const IDOL_CIRCLES = [
  {
    img: avatar7,
    size: 'md',
    className: 'z-10 col-start-2 col-end-4 row-start-2 row-end-5',
  },
  {
    img: avatar1,
    size: 'lg',
    className: 'z-10 col-start-2 col-end-5 row-start-4 row-end-6',
  },
  {
    img: avatar2,
    size: 'lg',
    className: 'z-10 col-start-5 col-end-6 row-start-2 row-end-3',
  },
  {
    img: avatar3,
    size: 'md',
    className: 'z-10 col-start-6 col-end-9 row-start-2 row-end-5 mb-50',
  },
  {
    img: avatar5,
    size: 'lg',
    className: 'z-10 col-start-8 col-end-10 row-start-2 row-end-6',
  },
  {
    img: avatar4,
    size: 'lg',
    className: 'z-10 col-start-7 col-end-9 row-start-5 row-end-6',
  },
];

// 배경 장식용 동그라미 요소 관련 상수
const PINK_CIRCLES = [
  { size: 'sm', className: 'z-0 col-start-1 col-end-3 row-start-4' },
  { size: 'lg', className: 'z-0 col-start-7 col-end-10 row-start-2 row-end-4' },
  { size: 'md', className: 'z-0 col-start-3 col-end-5 row-start-2' },
  { size: 'sm', className: 'z-0 col-start-9 row-start-4 row-end-6' },
];

// 히어로 메인 섹션
const HeroSection = () => {
  const [isMoved, setIsMoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMoved(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={cn(SNAP_ITEM, 'relative w-full bg-black')}>
      <div className='relative grid min-h-screen w-full max-w-[160rem] grid-cols-10 grid-rows-6 place-items-center gap-8 px-4 py-20 md:min-h-[100rem] md:gap-12 md:px-0 md:py-0'>
        <DarkLayout />
        <CircleRender circles={IDOL_CIRCLES} isMoved={isMoved} />
        <CircleRender circles={PINK_CIRCLES} isMoved={isMoved} />
        <HeroHeader />
        <TeamInfo />
      </div>
    </section>
  );
};

// Circle 렌더링 컴포넌트
const CircleRender = ({ circles, isMoved }) =>
  circles.map((circle, index) => {
    // 50~100 사이의 랜덤 stiffness 값 생성
    const randomStiffness = Math.floor(Math.random() * 30) + 40;

    return (
      <motion.div
        layout
        key={`circle-${index}`}
        className={
          isMoved
            ? circle.className
            : 'col-start-5 col-end-7 row-start-3 row-end-5'
        }
        transition={{
          type: 'spring',
          stiffness: randomStiffness,
          damping: 15,
        }}
      >
        <Circle img={circle.img} size={circle.size} />
      </motion.div>
    );
  });

// 히어로 헤더 섹션
const HeroHeader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
    className='z-20 col-span-full row-span-full'
  >
    <div className='flex flex-col items-center gap-6 px-4 md:gap-12 md:px-12'>
      <img src={logo} alt='로고' className='w-full' />
      <h1 className='title-text text-center font-semibold text-white'>
        <span className='block md:hidden'>
          나를 설레게 했던 순간
          <br />
          이제는 내가 보답할 때
        </span>
        <span className='hidden md:inline'>
          나를 설레게 했던 순간, 이제는 내가 보답할 때
        </span>
      </h1>
      <Link to='/main'>
        <Button>시작하기</Button>
      </Link>
    </div>
  </motion.div>
);

// 팀 정보 섹션
const TeamInfo = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay: 1 }}
    className='z-20 col-span-full row-start-6 px-4 text-lg text-white md:px-0 md:text-2xl'
  >
    <p className='text-center'>
      Codeit Sprint Frontend Engineering Bootcamp 15
    </p>
    <p className='text-center'>Part 2 · Team 2 · Light-Up</p>
    <p className='text-center'>Jiwoo · Eunbin · Hyeran · Jaehyun · Yongmin</p>
  </motion.div>
);

export default HeroSection;
