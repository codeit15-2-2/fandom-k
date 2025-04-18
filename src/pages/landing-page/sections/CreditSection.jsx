import { cn } from '@libs/cn';
import { BACKGROUND_STYLES } from '@pages/landing-page/constants/stylesConstant';
import creditBackground from '@pages/landing-page/assets/loop.mp4';
import Button from '@pages/landing-page/components/Button';

const CreditSection = () => {
  return (
    <div className='relative flex h-screen w-screen snap-start snap-always flex-col items-center justify-center gap-12 overflow-hidden text-white'>
      <video
        src={creditBackground}
        autoPlay
        loop
        muted
        playsInline
        className={cn(
          `${BACKGROUND_STYLES.FIXED} h-full w-full mask-y-from-50% mask-y-to-80% object-contain`,
        )}
      />
      <div className='absolute inset-0 bg-black/30' />
      <h1 className='font-bold-sm z-10 text-7xl/20 !text-shadow-lg/30 text-shadow-gray-800'>
        최애에게 반짝이는
        <br />
        기억을 안겨주세요
      </h1>
      <Button>크레딧 받고 시작</Button>
    </div>
  );
};

export default CreditSection;
