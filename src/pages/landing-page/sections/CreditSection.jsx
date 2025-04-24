import { cn } from '@libs/cn';
import Button from '@pages/landing-page/components/common/Button';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import loopVideo from '@assets/loop.mp4';
import DarkLayout from '@pages/landing-page/components/common/DarkLayout';

// 비디오 및 텍스트 공통 스타일 상수
const HEADER_CLASS =
  'z-20 flex h-[30vh] items-center justify-center text-[15rem] font-semibold text-white';
const DESCRIPTION_CLASS =
  'z-20 flex flex-col items-center justify-center gap-12 text-6xl text-white';

// 메인 크레딧 섹션
const CreditSection = () => (
  <section className={cn(SNAP_ITEM, 'relative overflow-hidden bg-black')}>
    <DarkLayout />
    <CreditBackgroundVideo />
    <CreditHeader />
    <CreditDescription />
  </section>
);

// 배경 비디오 컴포넌트
const CreditBackgroundVideo = () => (
  <video
    className='absolute inset-0 z-0 h-[100%] object-contain'
    loop
    autoPlay
    muted
  >
    <source src={loopVideo} />
  </video>
);

// 헤더 섹션
const CreditHeader = () => (
  <div className={HEADER_CLASS}>
    <h1>FANDOM-K</h1>
  </div>
);

// 설명 + CTA 섹션
const CreditDescription = () => (
  <div className={DESCRIPTION_CLASS}>
    <p>당신의 사랑을 FANDOM-K가 함께합니다</p>
    <Button>크레딧 받고 시작하기</Button>
  </div>
);

export default CreditSection;
