import Background from '@pages/landing-page/components/Background';
import Button from '@pages/landing-page/components/Button';
import SlideCard from '@pages/landing-page/components/SlideCard';

const FundingSection = () => {
  return (
    <div className='flex h-screen w-screen snap-start snap-always flex-col items-center justify-center gap-20 bg-black'>
      <SlideCard />
      <div className='flex flex-col items-center justify-center'>
        <div className='text-7xl font-bold text-white'>
          내 손으로 직접 고르는 선물
        </div>
        <div className='my-14 text-center text-5xl/15 text-white'>
          진행중인 아티스트의
          <br />
          다양한 조공을 구경해보세요
        </div>
      </div>
    </div>
  );
};

export default FundingSection;
