import Button from '@pages/landing-page/components/common/Button';
import Circle from '@pages/landing-page/components/elements/Circle';
import logo from '@assets/logos/logo.png';
import { cn } from '@libs/cn';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import DarkLayout from '@pages/landing-page/components/common/DarkLayout';
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar7,
} from '@pages/landing-page/utils/getIdolAvatar';

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
const HeroSection = () => (
  <section className={cn(SNAP_ITEM, 'relative w-full bg-black')}>
    <div className='relative grid min-h-screen w-full max-w-[160rem] grid-cols-10 grid-rows-6 place-items-center gap-8 px-4 py-20 md:min-h-[100rem] md:gap-12 md:px-0 md:py-0'>
      <DarkLayout />
      <CircleRender circles={IDOL_CIRCLES} />
      <CircleRender circles={PINK_CIRCLES} />
      <HeroHeader />
      <TeamInfo />
    </div>
  </section>
);

// Circle 렌더링 컴포넌트
const CircleRender = ({ circles }) =>
  circles.map((circle, index) => (
    <div key={`circle-${index}`} className={circle.className}>
      <Circle img={circle.img} size={circle.size} />
    </div>
  ));

// 히어로 헤더 섹션
const HeroHeader = () => (
  <div className='z-20 col-span-full row-span-full'>
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
      <Button>시작하기</Button>
    </div>
  </div>
);

// 팀 정보 섹션
const TeamInfo = () => (
  <div className='z-20 col-span-full row-start-6 px-4 text-lg text-white md:px-0 md:text-2xl'>
    <p className='text-center'>
      Codeit Sprint Frontend Engineering Bootcamp 15
    </p>
    <p className='text-center'>Part 2 · Team 2 · Light-Up</p>
    <p className='text-center'>Jiwoo · Eunbin · Hyeran · Jaehyun · Yongmin</p>
  </div>
);

export default HeroSection;
