import { SNAP_CONTAINER } from '@pages/landing-page/constants/layouts';
import ChartSection from '@pages/landing-page/sections/ChartSection';
import CreditSection from '@pages/landing-page/sections/CreditSection';
import DonationSection from '@pages/landing-page/sections/DonationSection';
import FundingSection from '@pages/landing-page/sections/FundingSection';
import HeroSection from '@pages/landing-page/sections/HeroSection';

const LandingPage = () => {
  return (
    <div className={SNAP_CONTAINER}>
      <HeroSection />
      <FundingSection />
      <ChartSection />
      <DonationSection />
      <CreditSection />
    </div>
  );
};

export default LandingPage;
