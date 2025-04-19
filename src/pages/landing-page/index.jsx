import HeroSection from '@pages/landing-page/sections/HeroSection';
import FundingSection from '@pages/landing-page/sections/FundingSection';
import VoteSection from '@pages/landing-page/sections/VoteSection';
import DonationSection from '@pages/landing-page/sections/DonationSection';
import CreditSection from '@pages/landing-page/sections/CreditSection';

export default function LandingPage() {
  return (
    <div className='h-screen w-full snap-y snap-mandatory overflow-x-hidden overflow-y-scroll'>
      <HeroSection />
      <FundingSection />
      <VoteSection />
      <DonationSection />
      <CreditSection />
    </div>
  );
}
