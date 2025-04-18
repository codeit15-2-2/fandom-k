import HeroSection from '@pages/landing-page/sections/HeroSection';
import FundingSection from '@pages/landing-page/sections/FundingSection';
import VoteSection from '@pages/landing-page/sections/VoteSection';
import DonationSection from '@pages/landing-page/sections/DonationSection';
import CreditSection from '@pages/landing-page/sections/CreditSection';

export default function LandingPage() {
  return (
    <div className='relative h-screen w-screen bg-black'>
      <div className='h-screen w-screen snap-y snap-mandatory overflow-y-scroll'>
        <HeroSection />
        <FundingSection />
        <VoteSection />
        <DonationSection />
        <CreditSection />
      </div>

      {/* 전체 페이지 비네팅 오버레이 */}
      <div className='pointer-events-none absolute inset-0 z-50 bg-radial from-transparent from-80% to-black/70' />
    </div>
  );
}
