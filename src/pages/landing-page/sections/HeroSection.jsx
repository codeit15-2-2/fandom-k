import Button from '@pages/landing-page/components/common/Button';
import Circle from '@pages/landing-page/components/elements/Circle';
import logo from '@assets/logos/logo.png';
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

// 연예인 원 배치 설정
const CELEBRITY_CIRCLES = [
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

// 분홍 원 배치 설정
const PINK_CIRCLES = [
  { size: 'sm', className: 'z-0 col-start-1 col-end-3 row-start-4' },
  { size: 'lg', className: 'z-0 col-start-7 col-end-10 row-start-2 row-end-4' },
  { size: 'md', className: 'z-0 col-start-3 col-end-5 row-start-2' },
  { size: 'sm', className: 'z-0 col-start-9 row-start-4 row-end-6' },
];

const HeroSection = () => {
  return (
    <section className={cn(SNAP_ITEM, 'relative w-full bg-black')}>
      {/* 중앙 콘텐츠 영역 */}
      <div
        className={cn(
          'relative grid h-[100rem] w-[160rem] grid-cols-10 grid-rows-6 place-items-center gap-12',
        )}
      >
        {/* 어두운 배경 레이어 */}
        <div className='absolute inset-0 z-20 bg-gradient-to-b from-black/20 to-black/75' />

        {/* 연예인 원 요소들  */}
        {CELEBRITY_CIRCLES.map((circle, index) => (
          <div key={`celebrity-${index}`} className={circle.className}>
            <Circle img={circle.img} size={circle.size} />
          </div>
        ))}

        {/* 분홍 원 요소들  */}
        {PINK_CIRCLES.map((circle, index) => (
          <div key={`pink-${index}`} className={circle.className}>
            <Circle size={circle.size} />
          </div>
        ))}

        {/* 메인 콘텐츠 - 그리드 전체 영역 사용 */}
        <div className='z-20 col-span-full row-span-full'>
          <div className='flex flex-col items-center gap-12'>
            <img src={logo} alt='로고' className='w-full' />
            <h1 className='text-center text-6xl font-semibold text-white'>
              나를 설레게 했던 순간, 이제는 내가 보답할 때
            </h1>
            <Button>시작하기</Button>
          </div>
        </div>
      </div>
      <div className='z-20 text-2xl text-white'>
        <p className='text-center'>
          Codeit Sprint Frontend Engineering Bootcamp 15기
        </p>
        <p className='text-center'>Part 2 · Team 2 · Light-Up</p>
        <p className='text-center'>
          Jiwoo · Eunbin · Hyeran · Jaehyun · Yongmin
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
