import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import { cn } from '@libs/cn';
import handphoneMobile from '@assets/elements/elem_handphone_mobile.webp';
import handphoneTablet from '@assets/elements/elem_handphone_tablet.webp';
import { motion } from 'motion/react';

const VerticalDonationSection = () => {
  return (
    <div className={cn(SNAP_ITEM, 'from-brand-1 to-brand-2 bg-gradient-to-br')}>
      {/*후원 설명 섹션 */}
      <div className='relative flex h-full min-h-[80rem] w-full flex-col items-center justify-center px-20 py-40 text-white'>
        <div className='flex h-full flex-col items-center gap-8'>
          <h1 className='text-center text-6xl font-semibold md:text-8xl'>
            클릭으로
            <br />
            가까워지는
          </h1>
          <div className='h-full w-[1rem] rounded-full bg-white/30 md:w-[2rem]'>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: '90%' }}
              transition={{ type: 'spring', damping: 50, stiffness: 60 }}
              className='h-7/8 w-[1rem] rounded-full bg-white/70 md:w-[2rem]'
            />
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
              className='hidden translate-y-30 scale-130 md:block'
              alt='태블릿 핸드폰 이미지'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalDonationSection;
