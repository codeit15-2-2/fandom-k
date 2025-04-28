import DonationInfo from '@pages/detail-page/components/DonationInfo';
import MainTitle from '@pages/detail-page/components/MainTitle';
import Button from '@components/common/Button';
import useModal from '@hooks/useModal';
import DonateModal from '@pages/detail-page/components/DonateModal';
import DetailContent from '@pages/detail-page/components/DetailContent';
import DetailTitle from '@pages/detail-page/components/DetailTitle';

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
        <div
          className='h-[calc(100vh-45rem)] w-screen bg-cover bg-center'
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url('${idol.profilePicture}')`,
          }}
        ></div>
        <div className='absolute bottom-0 h-full'>
          <div className='inset-0 z-10 w-screen h-full bg-gradient-to-b from-transparent via-black/40 to-black'></div>
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
      <section className='relative flex justify-center w-screen pt-10 h-fit snap-start'>
        <div className='mt-10 mb-20 w-[90vw]'>
          <DetailTitle
            name={`${idol.group} ${idol.name}`}
            title={title}
            location={subtitle}
            size='s'
          />

          <DetailContent contents={contents} />
        </div>
      </section>

      {/* 후원 버튼 */}
      <div className='fixed bottom-0 z-30 flex h-[13rem] w-screen items-end justify-center bg-gradient-to-b from-transparent via-black/80 to-black pb-6'>
        <div className='w-[90vw]'>
          {isDonationOpen ? (
            <Button
              color='pink'
              size='full'
              className='rounded hover:bg-black'
              onClick={open}
            >
              후원하기
            </Button>
          ) : (
            <Button
              color='gray'
              size='full'
              className='rounded hover:bg-black'
              disabled
            >
              모집 종료
            </Button>
          )}

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
        </div>
      </div>
    </div>
  );
};

export default MainSection;
