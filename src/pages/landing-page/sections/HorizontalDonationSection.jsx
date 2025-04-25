import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import { cn } from '@libs/cn';
import handphone from '@assets/elements/elem_handphone.png';
import heart from '@assets/icons/icon_heart.svg';

const HorizontalDonationSection = () => {
  return (
    <div className={cn(SNAP_ITEM, 'bg-gradient-brand-2')}>
      {/*후원 설명 섹션 */}
      <div className='relative flex h-full min-h-[140rem] w-full max-w-[160rem] flex-col items-center justify-center p-24 text-white'>
        <div className='mb-20 flex h-full w-full items-center justify-center'>
          <h1 className='text-center text-[20rem]/60 font-bold tracking-tighter'>
            EASY
            <br />
            DONATION
          </h1>
          <img
            src={heart}
            alt='하트 아이콘'
            className='absolute z-30 w-[20rem] translate-x-1/9 translate-y-1/2'
          />
        </div>
        <div className='mt-40 flex h-full w-full justify-between gap-14'>
          <h1 className='text-8xl font-semibold'>
            클릭으로
            <br />
            가까워지는
          </h1>
          <div className='mt-20 h-4 w-1/2 flex-1 rounded-full bg-white/30'>
            <div className='h-4 w-5/6 rounded-full bg-white' />
          </div>
          <h1 className='text-8xl font-semibold'>
            최애와
            <br />나
          </h1>
        </div>
        <div className='absolute bottom-0 flex -translate-x-40 items-center justify-center'>
          <img src={handphone} alt='핸드폰 이미지' />
        </div>
      </div>
    </div>
  );
};

export default HorizontalDonationSection;
