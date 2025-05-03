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
import { useState, useMemo, useEffect } from 'react';
import { motion } from 'motion/react';

// 서클 데이터 정의
const CIRCLES_DATA = {
  // 아이돌 동그라미 요소
  idol: [
    {
      id: 'idol-1',
      img: avatar7,
      size: 'md',
      className: 'z-10 col-start-2 col-end-4 row-start-2 row-end-5',
    },
    {
      id: 'idol-2',
      img: avatar1,
      size: 'lg',
      className: 'z-10 col-start-2 col-end-5 row-start-4 row-end-6',
    },
    {
      id: 'idol-3',
      img: avatar2,
      size: 'lg',
      className: 'z-10 col-start-5 col-end-6 row-start-2 row-end-3',
    },
    {
      id: 'idol-4',
      img: avatar3,
      size: 'md',
      className: 'z-10 col-start-6 col-end-9 row-start-2 row-end-5 mb-50',
    },
    {
      id: 'idol-5',
      img: avatar5,
      size: 'lg',
      className: 'z-10 col-start-8 col-end-10 row-start-2 row-end-6',
    },
    {
      id: 'idol-6',
      img: avatar4,
      size: 'lg',
      className: 'z-0 col-start-7 col-end-9 row-start-5 row-end-6',
    },
  ],
  // 배경 장식용 핑크 동그라미 요소
  pink: [
    {
      id: 'pink-1',
      size: 'sm',
      className: 'z-0 col-start-1 col-end-3 row-start-4',
    },
    {
      id: 'pink-2',
      size: 'lg',
      className: 'z-0 col-start-7 col-end-10 row-start-2 row-end-4',
    },
    {
      id: 'pink-3',
      size: 'md',
      className: 'z-0 col-start-3 col-end-5 row-start-2',
    },
    {
      id: 'pink-4',
      size: 'sm',
      className: 'z-0 col-start-9 row-start-4 row-end-6',
    },
  ],
};

// 고정된 중앙 위치 클래스
const CENTER_POSITION_CLASS = 'col-start-5 col-end-7 row-start-3 row-end-5';

// 애니메이션 상수
const ANIMATION_CONFIG = {
  circles: {
    type: 'spring',
    damping: 15,
    delay: 1,
  },
  header: {
    duration: 2,
    delay: 2,
  },
  team: {
    duration: 2,
    delay: 3,
  },
};

// Circle 렌더링 컴포넌트
const CircleRender = ({ circles, isMoved }) => {
  // 각 원에 대해 다른 stiffness 값을 생성하여 애니메이션에 변화를 줌
  const randomStiffness = useMemo(
    () => circles.map(() => Math.floor(Math.random() * 20) + 30),
    [circles],
  );

  // 애니메이션 중에는 z-index를 낮춰서 중앙 원이 위에 보이도록 함
  return circles.map((circle, index) => (
    <motion.div
      layout
      key={circle.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={isMoved ? circle.className : `${CENTER_POSITION_CLASS} z-0`}
      transition={{
        ...ANIMATION_CONFIG.circles,
        stiffness: randomStiffness[index],
      }}
    >
      <Circle img={circle.img} size={circle.size} />
    </motion.div>
  ));
};

// 히어로 헤더 섹션
const HeroHeader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={ANIMATION_CONFIG.header}
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
      <Button aria-label='시작하기'>시작하기</Button>
    </div>
  </motion.div>
);

// 팀 정보 섹션
const TeamInfo = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={ANIMATION_CONFIG.team}
    className='z-20 col-span-full row-start-6 px-4 text-lg text-white/60 md:px-0 md:text-2xl'
  >
    <p className='text-center'>
      Codeit Sprint Frontend Engineering Bootcamp 15
    </p>
    <p className='text-center'>
      Part 2 · Team 2 · Light-Up / Jiwoo · Eunbin · Hyeran · Jaehyun · Yongmin
    </p>
  </motion.div>
);

// 히어로 메인 섹션
const HeroSection = () => {
  const [isMoved, setIsMoved] = useState(false);

  // 컴포넌트 마운트 후 다음 애니메이션 프레임에서 원들을 이동시킴
  useEffect(() => {
    // 안전하게 requestAnimationFrame 처리
    let frameId = null;

    const animateCircles = () => {
      setIsMoved(true);
    };

    frameId = requestAnimationFrame(animateCircles);

    // 클린업 함수에서 요청된 애니메이션 프레임 취소
    return () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section className={cn(SNAP_ITEM, 'relative w-full bg-black')}>
      <div className='relative grid min-h-screen w-full max-w-[160rem] grid-cols-10 grid-rows-6 place-items-center gap-8 px-4 py-20 md:min-h-[100rem] md:gap-12 md:px-0 md:py-0'>
        <DarkLayout />

        {/* 중앙 원들 렌더링 */}
        <CircleRender circles={CIRCLES_DATA.idol} isMoved={isMoved} />
        <CircleRender circles={CIRCLES_DATA.pink} isMoved={isMoved} />
        <HeroHeader />
        <TeamInfo />
      </div>
    </section>
  );
};

export default HeroSection;
