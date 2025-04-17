import Hero from '@pages/landing-page/sections/Hero';
import Present from '@pages/landing-page/sections/Present';

export default function LandingPage() {
  return (
    <div className='relative h-screen w-screen'>
      {/* 스크롤 콘텐츠 영역 */}
      <div className='h-screen w-screen snap-y snap-mandatory overflow-y-scroll'>
        <Hero />
        <Present />
        <Hero />
        <Hero />
      </div>

      {/* 전체 페이지 비네팅 오버레이 */}
      <div className='pointer-events-none absolute inset-0 z-50 bg-radial from-transparent from-80% to-black/70' />
    </div>
  );
}
