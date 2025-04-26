import DonationInfo from '@pages/detail-page/components/DonationInfo';
import MainTitle from '@pages/detail-page/components/MainTitle';
import Button from '@components/common/Button';
import useModal from '@hooks/useModal';
import DonateModal from '@pages/detail-page/components/DonateModal';

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
  isDonationOpen,
}) => {
  const { isOpen: isModalOpen, open, close } = useModal();

  return (
    <div className='flex h-screen w-screen flex-col items-center bg-black'>
      <div className='relative h-[calc(100vh_-_50rem)]'>
        <div
          className='h-[calc(100vh_-_50rem)] w-screen bg-cover bg-center'
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url('${idol.profilePicture}')`,
          }}
        ></div>
        <div className='absolute bottom-0 h-full'>
          <div className='inset-0 z-10 h-full w-screen bg-gradient-to-b from-transparent via-black/40 to-black'></div>
        </div>
        <div className='absolute bottom-0 left-[5vw]'>
          <MainTitle title={title} name={englishName} size='s' />
        </div>
      </div>

      <div className='flex h-full w-[90vw] flex-col gap-10 py-[3rem]'>
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
      </div>

      <div className='fixed bottom-0 z-50 flex h-[8rem] w-screen items-center justify-center bg-black backdrop-blur'>
        <div className='w-[90vw]'>
          <Button
            color='pink'
            size='full'
            className='rounded hover:bg-black'
            onClick={open}
          >
            후원하기
          </Button>

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
