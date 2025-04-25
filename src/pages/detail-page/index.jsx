import useDeviceSize from '@hooks/useDeviceSize';
import BackgroundIdolImage from '@pages/detail-page/components/BackgroundIdolImage';
import PCMainSection from './sections/pc/MainSection';
import TabletMainSection from './sections/tablet/MainSection';
import MobileMainSection from './sections/mobile/MainSection';
import MobileDetailSection from './sections/mobile/DetailSection';

export default function DetailPage() {
  const { isDesktop, isTablet, isMobile } = useDeviceSize();

  if (isDesktop) {
    return (
      <div>
        <BackgroundIdolImage
          imgSrc={
            'https://img.news-wa.com/img/upload/2025/02/09/NWC_20250209182654.png.webp'
          }
        />
        <PCMainSection />
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className='bg-black'>
        <BackgroundIdolImage
          imgSrc={
            'https://img.news-wa.com/img/upload/2025/02/09/NWC_20250209182654.png.webp'
          }
        />
        <TabletMainSection />
      </div>
    );
  }

  if (isMobile) {
    return (
      <div>
        <MobileMainSection />
        <MobileDetailSection />
      </div>
    );
  }

  return <p className='text-white'>지원되지 않는 디바이스 환경입니다.</p>;
}

/* 받아올 데이터
- 아이돌 사진
- 아이돌 영문 이름
- 후원 제목
- 목표 크레딧
- 현재 모인 크레딧
- 후원 모집 시작 (createdAt)
- 모집 종료 (deadline)
- 후원 상세 내용
- 아이돌 그룹명
- 아이돌 이름
- 후원 장소
- 후원 Id (donateId)
*/
