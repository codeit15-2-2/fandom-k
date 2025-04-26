import FundingCard from '@pages/landing-page/components/elements/FundingCard';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import { cn } from '@libs/cn';
import { getRandomIdols } from '@pages/landing-page/utils/getRandomIdols';
import pinkArrow from '@assets/doodles/arrow-pink.png';

// 카드 스타일 설정
const FUNDING_CARD_STYLES = [
  { rotate: '-rotate-15', translate: 'translate-y-20' },
  { rotate: 'rotate-10', translate: '' },
  { rotate: '-rotate-20', translate: '-translate-y-20' },
  { rotate: 'rotate-5', translate: '-translate-y-20' },
  { rotate: 'rotate-20', translate: 'translate-y-20' },
  { rotate: 'rotate-10', translate: 'translate-y-15' },
];

// 스타일 계산 유틸
const getFundingCardStyle = (index) =>
  FUNDING_CARD_STYLES[index % FUNDING_CARD_STYLES.length];

// 메인 펀딩 섹션
const FundingSection = () => {
  const randomIdols = getRandomIdols();

  return (
    <div className={cn(SNAP_ITEM, 'bg-white')}>
      <FundingHeader />
      <FundingCardList idols={randomIdols} />
      <FundingDescription />
    </div>
  );
};

// 헤더 섹션
const FundingHeader = () => (
  <div className='flex flex-1 flex-col items-center justify-center'>
    <h1 className='text-8xl font-extrabold tracking-tight text-black md:text-[14rem]'>
      FUNDING
    </h1>
  </div>
);

// 카드 리스트 섹션
const FundingCardList = ({ idols }) => (
  <div className='z-10 flex items-start justify-center'>
    {idols.map((idol, index) => {
      const style = getFundingCardStyle(index);
      return (
        <FundingCard
          key={idol.id || idol.name}
          image={idol.image}
          title={idol.title}
          location={idol.location}
          rotate={style.rotate}
          translate={style.translate}
        />
      );
    })}
  </div>
);

// 설명 섹션
const FundingDescription = () => (
  <div className='mb-20 flex flex-1 flex-col items-center justify-center gap-8'>
    <img src={pinkArrow} className='w-50 rotate-10 md:w-100' />
    <p className='text-center text-4xl font-semibold md:text-6xl'>
      진행중인 아티스트들의 <br />
      다양한 조공을 구경해보세요
    </p>
  </div>
);

export default FundingSection;
