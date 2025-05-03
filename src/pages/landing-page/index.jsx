import { useEffect, useState } from 'react';
import { SNAP_CONTAINER } from '@pages/landing-page/constants/layouts';
import ChartSection from '@pages/landing-page/sections/ChartSection';
import CreditSection from '@pages/landing-page/sections/CreditSection';
import FundingSection from '@pages/landing-page/sections/FundingSection';
import HeroSection from '@pages/landing-page/sections/HeroSection';
import HorizontalDonationSection from '@pages/landing-page/sections/HorizontalDonationSection';
import VerticalDonationSection from '@pages/landing-page/sections/VerticalDonationSection';

const LandingPage = () => {
  const [isPC, setIsPC] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleChange = (e) => setIsPC(e.matches);
    handleChange(mediaQuery); // initial check

    // addEventListener 대신 최신 API 사용
    mediaQuery.onchange = handleChange;

    return () => {
      mediaQuery.onchange = null;
    };
  }, []);

  return (
    <div className={SNAP_CONTAINER}>
      <HeroSection />
      <FundingSection />
      <ChartSection />
      {isPC ? <HorizontalDonationSection /> : <VerticalDonationSection />}
      <CreditSection />
    </div>
  );
};

export default LandingPage;
