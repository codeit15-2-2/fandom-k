import { lazy, Suspense } from 'react';
import DonationInfo from '@pages/detail-page/components/DonationInfo';
import MainTitle from '@pages/detail-page/components/MainTitle';
import useModal from '@hooks/useModal';
const DonateModal = lazy(
  () => import('@pages/detail-page/components/DonateModal'),
);
const Button = lazy(() => import('@components/common/Button'));
const DetailTitle = lazy(
  () => import('@pages/detail-page/components/DetailTitle'),
);
const DetailContent = lazy(
  () => import('@pages/detail-page/components/DetailContent'),
);

const MainSection = ({
  id,
  title,
  subtitle,
  targetDonation,
  createdAt,
  deadline,
  receivedDonations,
  englishName,
  idol,
  contents,
  isDonationOpen,
}) => {
  const { isOpen: isModalOpen, open, close } = useModal();

  return (
    <div className='flex h-[calc(100vh-8rem)] w-screen snap-y snap-mandatory flex-col items-center overflow-y-scroll bg-black'>
      {/* 아이돌 사진 배경 */}
      <section className='relative h-[calc(100vh-45rem)] w-full snap-start'>
        <div className='relative h-[calc(100vh-45rem)] w-screen overflow-hidden'>
          <img
            src={idol.profilePicture}
            alt={`${idol.name} 배경 이미지`}
            className='absolute inset-0 h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-transparent to-black/80' />
        </div>
        <div className='absolute bottom-0 h-full'>
          <div className='inset-0 z-10 h-full w-screen bg-gradient-to-b from-transparent via-black/40 to-black'></div>
        </div>
        <div className='absolute bottom-0 left-[5vw]'>
          <MainTitle title={title} name={englishName} size='s' />
        </div>
      </section>

      {/* 후원 정보 컴포넌트 */}
      <section className='flex h-full w-[90vw] flex-col gap-10 py-[3rem]'>
        <DonationInfo
          title='모인 금액'
          subTitle='크레딧'
          credit={receivedDonations}
          targetAmount={targetDonation}
          size='s'
          isDonationOpen={isDonationOpen}
        >
          <DonationInfo.InfoCredit />
          <DonationInfo.InfoTargetAmount />
        </DonationInfo>

        <DonationInfo
          title='모집 기간'
          subTitle='남은 시간'
          createdAt={createdAt}
          deadline={deadline}
          size='s'
          isDonationOpen={isDonationOpen}
        >
          <DonationInfo.InfoTimer />
          <DonationInfo.InfoDeadline />
        </DonationInfo>
      </section>

      {/* 후원 상세 정보 */}
      <section className='relative flex h-fit w-screen snap-start justify-center pt-10'>
        <div className='mt-10 mb-20 w-[90vw]'>
          <Suspense fallback={null}>
            <DetailTitle
              name={`${idol.group} ${idol.name}`}
              title={title}
              location={subtitle}
              size='s'
            />
          </Suspense>

          <Suspense fallback={null}>
            <DetailContent contents={contents} />
          </Suspense>
        </div>
      </section>

      {/* 후원 버튼 */}
      <div className='fixed bottom-0 z-30 flex h-[13rem] w-screen items-end justify-center bg-gradient-to-b from-transparent via-black/80 to-black pb-6'>
        <div className='w-[90vw]'>
          {isDonationOpen ? (
            <Suspense fallback={null}>
              <Button
                color='pink'
                size='full'
                className='rounded hover:bg-black'
                onClick={open}
              >
                후원하기
              </Button>
            </Suspense>
          ) : (
            <Suspense fallback={null}>
              <Button
                color='gray'
                size='full'
                className='rounded hover:bg-black'
                disabled
              >
                모집 종료
              </Button>
            </Suspense>
          )}

          <Suspense fallback={null}>
            <DonateModal
              isOpen={isModalOpen}
              close={close}
              donateId={id}
              cardItem={{
                id: idol.id,
                title: title,
                subtitle: subtitle,
                profilePicture: idol.profilePicture,
              }}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
