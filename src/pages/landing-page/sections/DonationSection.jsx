import { cn } from '@libs/cn';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import phone from '@pages/landing-page/assets/elements/phone.png';

const DonationSection = () => {
  return (
    <div
      className={cn(
        `${SNAP_ITEM} relative mx-auto flex w-[1200px] flex-row p-20`,
      )}
    >
      <div className='relative flex w-full items-center justify-center'>
        <img
          src={phone}
          className='absolute right-120 z-10 w-[37.5rem]'
          alt='휴대폰 이미지'
        />

        <div className='flex w-full items-center justify-between text-9xl font-semibold text-white'>
          <p className='text-left'>
            클릭으로
            <br />
            가까워지는
          </p>
          <div className='mx-12 h-3 flex-grow rounded-full bg-white opacity-30' />
          <p className='text-right'>
            최애와
            <br />나
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
