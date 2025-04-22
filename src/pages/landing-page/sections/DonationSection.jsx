import { cn } from '@libs/cn';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import handphone from '@assets/elements/elem_handphone.png';

const DonationSection = () => {
  return (
    <section
      className={cn(
        SNAP_ITEM,
        'from-brand-1/90 to-brand-2/90 relative bg-gradient-to-br',
      )}
    >
      <div className='relative mx-auto flex h-full w-[1400px] flex-col'>
        {/* 제목 컨테이너 */}
        <header className='flex flex-1 items-center justify-center'>
          <h1 className='text-center text-[15rem]/50 font-extrabold tracking-tight text-white'>
            EASY
            <br />
            DONATION
          </h1>
        </header>

        {/* 콘텐츠 컨테이너 */}
        <div className='flex w-full flex-1 items-start justify-between text-8xl font-semibold text-white'>
          <p className='text-left leading-tight'>
            클릭으로
            <br />
            가까워지는
          </p>
          <div className='mx-12 h-3 flex-1 rounded-full bg-white opacity-30' />
          <p className='text-left leading-tight'>
            최애와
            <br />나
          </p>
          <img
            src={handphone}
            className='absolute bottom-0 left-1/3 -translate-x-1/3'
          />
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
