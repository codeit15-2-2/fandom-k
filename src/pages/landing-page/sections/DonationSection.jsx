import { cn } from '@libs/cn';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import handphone from '@assets/elements/elem_handphone.png';
import heart from '@assets/icons/icon_heart.svg';

// 헬퍼 컴포넌트
const HeartIcon = () => (
  <img src={heart} className='absolute bottom-1/4 w-[10%]' />
);
const HandphoneImage = () => (
  <div className='absolute bottom-0 left-1/3 flex -translate-x-1/3 flex-col items-center gap-4'>
    <img src={handphone} alt='핸드폰 이미지' />
  </div>
);

// 메인 후원 섹션
const DonationSection = () => {
  return (
    <section
      className={cn(
        SNAP_ITEM,
        'from-brand-1/90 to-brand-2/90 relative bg-gradient-to-br',
      )}
    >
      <div className='relative mx-auto flex h-full w-[1400px] flex-col'>
        <DonationHeader />
        <DonationContent />
      </div>
    </section>
  );
};

// 헤더 섹션 + 하트 아이콘
const DonationHeader = () => (
  <header className='relative flex flex-1 items-center justify-center'>
    <h1 className='text-center text-[15rem]/50 font-extrabold tracking-tight text-white'>
      EASY
      <br />
      DONATION
    </h1>
    <HeartIcon />
  </header>
);

// 설명 섹션 + 휴대폰 이미지
const DonationContent = () => (
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

    <HandphoneImage />
  </div>
);

export default DonationSection;
