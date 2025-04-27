import useDeviceSize from '@hooks/useDeviceSize';
import BackgroundIdolImage from '@pages/detail-page/components/BackgroundIdolImage';
import PCMainSection from '@pages/detail-page/sections/pc/MainSection';
import TabletMainSection from '@pages/detail-page/sections/tablet/MainSection';
import MobileMainSection from '@pages/detail-page/sections/mobile/MainSection';
import MobileDetailSection from '@pages/detail-page/sections/mobile/DetailSection';
import donationDetailData from '@/mocks/donationDetailData.json';
import { useDonation } from '@contexts/DonationContext';

export default function DetailPage() {
  const { isDesktop, isTablet, isMobile } = useDeviceSize();
  const { donationData } = useDonation();

  if (!donationData) {
    return <div>해당되는 데이터가 없습니다.</div>;
  }

  // 후원 상세 본문 데이터(JSON)과 매칭
  const matchingDetail = donationDetailData.find(
    (detail) => detail.idolId === donationData.idol.id,
  );
  // 후원이 가능한 상태인지 확인
  const isDonationOpen =
    donationData.status && new Date(donationData.deadline) > new Date();

  const detailData = {
    ...(donationData || {}),
    ...(matchingDetail || {}),
    isDonationOpen,
  };

  if (isDesktop) {
    return (
      <div>
        <BackgroundIdolImage imgSrc={detailData.idol.profilePicture} />
        <PCMainSection {...detailData} />
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className='bg-black'>
        <BackgroundIdolImage imgSrc={detailData.idol.profilePicture} />
        <TabletMainSection {...detailData} />
      </div>
    );
  }

  if (isMobile) {
    return (
      <div>
        <MobileMainSection {...detailData} />
        <MobileDetailSection {...detailData} />
      </div>
    );
  }

  return <p className='text-white'>지원되지 않는 디바이스 환경입니다.</p>;
}
