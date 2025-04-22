import { cn } from '@libs/cn';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';

const DonationSection = () => {
  return (
    <div
      className={cn(
        SNAP_ITEM,
        'from-brand-1/90 to-brand-2/90 relative bg-gradient-to-br',
      )}
    >
      <div className={'mx-auto w-[1200px]'}>
        <div className='relative flex w-full items-center'>
          {/* <img
            src={phone}
            className='absolute right-120 z-10 w-[37.5rem]'
            alt='휴대폰 이미지'
          /> */}
          <div className='flex w-full items-center justify-between text-9xl font-semibold text-white'>
            <p className='text-left'>
              클릭으로
              <br />
              가까워지는
            </p>
            <div className='mx-12 h-3 flex-1 rounded-full bg-white opacity-30' />
            <p className='text-left'>
              최애와
              <br />나
            </p>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 h-1/3 w-full bg-gradient-to-b from-transparent to-black' />
    </div>
  );
};

export default DonationSection;
