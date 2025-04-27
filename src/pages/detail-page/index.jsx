import { Navigate, useLocation } from 'react-router-dom';
import useDeviceSize from '@hooks/useDeviceSize';
import BackgroundIdolImage from '@pages/detail-page/components/BackgroundIdolImage';
import PCMainSection from './sections/pc/MainSection';
import TabletMainSection from './sections/tablet/MainSection';
import MobileMainSection from './sections/mobile/MainSection';
import MobileDetailSection from './sections/mobile/DetailSection';
import donationDetailData from '@/mocks/donationDetailData.json';

export default function DetailPage() {
  const { isDesktop, isTablet, isMobile } = useDeviceSize();
  const location = useLocation();
  const serverData = location.state?.item;

  if (!serverData) {
    return <Navigate to='/error/404' />;
  }

  const matchingDetail = donationDetailData.find(
    (detail) => detail.idolId === serverData.idol.id,
  );
  const isDonationOpen =
    serverData.status && new Date(serverData.deadline) > new Date();

  const detailData = {
    ...serverData,
    ...(matchingDetail || {}),
    isDonationOpen,
  };

  // 데이터를 관리할 일이 생기면 useState로 관리
  // const [detailData, setDetailData] = useState(initialDetailData);

  console.log('아이돌 id', serverData.idol.id);

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
