import Background from '@pages/landing-page/components/Background';
import Button from '@pages/landing-page/components/Button';
import SlideCard from '@pages/landing-page/components/SlideCard';

const FundingSection = () => {
  return (
    <div className='relative flex h-screen w-full snap-start snap-always flex-col items-center justify-center gap-20 overflow-hidden bg-black'>
      <div className='from-brand-1 via-brand-2 absolute z-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br to-purple-600 opacity-50 blur-3xl' />
      <div className='relative z-10'>
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
          <Button>구경하러 가기</Button>
        </div>
      </div>
    </div>
  );
};

export default FundingSection;
