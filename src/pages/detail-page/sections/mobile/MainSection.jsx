import DonationInfo from '@pages/detail-page/components/DonationInfo';
import MainTitle from '@pages/detail-page/components/MainTitle';
import Button from '@components/common/Button';

const MainSection = () => {
  return (
    <div className='flex h-screen w-screen flex-col items-center bg-black'>
      <div className='relative h-[calc(100vh_-_50rem)]'>
        <div className="h-[calc(100vh_-_50rem)] w-screen bg-[linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%),url('https://img.news-wa.com/img/upload/2025/02/09/NWC_20250209182654.png.webp')] bg-cover bg-center"></div>
        <div className='absolute bottom-0 h-full'>
          <div className='inset-0 z-10 h-full w-screen bg-gradient-to-b from-transparent via-black/40 to-black'></div>
        </div>
        <div className='absolute bottom-0 left-[5vw]'>
          <MainTitle title='1주년 기념 팝업 카페' name='KARINA' size='s' />
        </div>
      </div>

      <div className='flex h-full w-[90vw] flex-col gap-10 py-[3rem]'>
        <DonationInfo
          title='모인 금액'
          subTitle='크레딧'
          credit={200000}
          targetAmount={300000}
          size='s'
          isOpen={true}
        >
          <DonationInfo.InfoCredit />
          <DonationInfo.InfoTargetAmount />
        </DonationInfo>

        <DonationInfo
          title='모집 기간'
          subTitle='남은 시간'
          createdAt={'2025-03-19T00:00:00.891Z'}
          deadline={'2025-05-22T23:59:59.000Z'}
          size='s'
          isOpen={true}
        >
          <DonationInfo.InfoTimer />
          <DonationInfo.InfoDeadline />
        </DonationInfo>
      </div>

      <div className='fixed bottom-0 z-50 flex h-[8rem] w-screen items-center justify-center bg-black backdrop-blur'>
        <div className='w-[90vw]'>
          <Button color='pink' size='full' className='rounded hover:bg-black'>
            후원하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
