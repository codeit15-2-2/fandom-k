import { cn } from '@libs/cn';
import Button from '@pages/landing-page/components/common/Button';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import loopVideo from '@assets/loop.mp4';

const CreditSection = () => {
  return (
    <section className={cn(SNAP_ITEM, 'relative overflow-hidden bg-black')}>
      {/* Background Video */}
      <video
        className='absolute inset-0 z-0 h-[100%] object-contain'
        loop
        autoPlay
        muted
      >
        <source src={loopVideo} />
      </video>

      {/* Title */}
      <div className='z-10 flex h-[30vh] items-center justify-center text-[15rem] font-semibold text-white'>
        <h1>FANDOM-K</h1>
      </div>

      {/* CTA Content */}
      <div className='z-10 flex flex-col items-center justify-center gap-12 text-6xl text-white'>
        <p>당신의 사랑을 FANDOM-K가 함께합니다</p>
        <Button>크레딧 받고 시작하기</Button>
      </div>
    </section>
  );
};

export default CreditSection;
