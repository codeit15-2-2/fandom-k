import { Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import useDeviceSize from '@hooks/useDeviceSize';
import donationDetailData from '@/mocks/donationDetailData.json';
import { useDonation } from '@contexts/DonationContext';

const BackgroundIdolImage = lazy(
  () => import('@pages/detail-page/components/BackgroundIdolImage'),
);
const PCMainSection = lazy(
  () => import('@pages/detail-page/sections/pc/MainSection'),
);
const TabletMainSection = lazy(
  () => import('@pages/detail-page/sections/tablet/MainSection'),
);
const MobileMainSection = lazy(
  () => import('@pages/detail-page/sections/mobile/MainSection'),
);

const validatePath = (donationData) => {
  const lastSegment = location.pathname.split('/').filter(Boolean).at(-1);
  return donationData.id === Number(lastSegment);
};

const createDetailData = (donationData) => {
  if (!donationData) return null;

  // 후원 상세 본문 데이터(JSON)과 매칭
  const matchingDetail = donationDetailData.find(
    (detail) => detail.idolId === donationData.idol.id,
  );

  // 후원이 가능한 상태인지 확인
  const isDonationOpen =
    donationData.status && new Date(donationData.deadline) > new Date();

  return {
    ...(donationData || {}),
    ...(matchingDetail || {}),
    isDonationOpen,
  };
};

export default function DetailPage() {
  const { isDesktop, isTablet, isMobile } = useDeviceSize();
  const { donationData, isLoading } = useDonation();

  // context data는 원래 복원 전과 복원 후로 무조건 null이 한 번 출력되고, 그 다음에 데이터가 채워져서 정상 작동한다. => 데이터 null 방지용으로 isLoading 추가
  if (isLoading) {
    return <div className='text-white'>Loading...</div>;
  }

  // 유효한 url인지 검증
  const isValidPath = validatePath(donationData);
  if (!isValidPath) {
    return <Navigate to='/error/404' />;
  }

  const detailData = createDetailData(donationData);

  // 적응형 디자인
  if (isDesktop) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BackgroundIdolImage imgSrc={detailData.idol.profilePicture} />
        <PCMainSection {...detailData} />
      </Suspense>
    );
  }

  if (isTablet) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BackgroundIdolImage imgSrc={detailData.idol.profilePicture} />
        <TabletMainSection {...detailData} />
      </Suspense>
    );
  }

  if (isMobile) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <MobileMainSection {...detailData} />
      </Suspense>
    );
  }

  return <p className='text-white'>지원되지 않는 디바이스 환경입니다.</p>;
}
