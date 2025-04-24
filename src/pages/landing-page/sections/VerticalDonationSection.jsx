import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import { cn } from '@libs/cn';
import handphoneMobile from '@assets/elements/elem_handphone_mobile.png';
import handphoneTablet from '@assets/elements/elem_handphone_tablet.png';
import heart from '@assets/icons/icon_heart.svg';

const VerticalDonationSection = () => {
  return (
    <div className={cn(SNAP_ITEM, 'bg-gradient-brand-2')}>
      {/*후원 설명 섹션 */}
      <div className='relative flex h-full min-h-[80rem] w-full flex-col items-center justify-center p-40 text-white'>
        <div className='flex h-full flex-col items-center gap-8'>
          <h1 className='text-center text-6xl font-semibold md:text-8xl'>
            클릭으로
            <br />
            가까워지는
          </h1>
          <div className='relative z-0 h-full w-[1rem] rounded-full bg-white/30 md:w-[2rem]'>
            <div className='absolute z-10 h-5/6 w-[1rem] rounded-full bg-white/70 md:w-[2rem]' />
          </div>
          <h1 className='text-center text-6xl font-semibold md:text-8xl'>
            최애와
            <br />나
          </h1>
        </div>
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
          <div className='translate-y-20'>
            <img
              src={handphoneMobile}
              className='block md:hidden'
              alt='모바일 핸드폰 이미지'
            />
            <img
              src={handphoneTablet}
              className='hidden md:block'
              alt='태블릿 핸드폰 이미지'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalDonationSection;
