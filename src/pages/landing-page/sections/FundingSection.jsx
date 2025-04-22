import FundingCard from '@pages/landing-page/components/card/FundingCard';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import pinkArrow from '@assets/doodles/arrow-pink.png';
import { cn } from '@libs/cn';
import { getRandomIdols } from '@pages/landing-page/utils/getRandomIdols';

// 카드 스타일 설정을 컴포넌트 외부로 분리
const CARD_STYLES = [
  { rotate: '-rotate-15', translate: 'translate-y-20' },
  { rotate: 'rotate-10', translate: '' },
  { rotate: '-rotate-20', translate: '-translate-y-20' },
  { rotate: 'rotate-5', translate: '-translate-y-20' },
  { rotate: 'rotate-20', translate: 'translate-y-20' },
  { rotate: 'rotate-10', translate: 'translate-y-15' },
];

const FundingSection = () => {
  // 컴포넌트 마운트 시 한 번만 선택되도록 함수 호출
  const randomIdols = getRandomIdols();

  return (
    <div className={cn(SNAP_ITEM, 'bg-white')}>
      {/* 타이틀 헤더 */}
      <div className='flex-1'>
        <h1 className='text-stroke-black mt-40 text-[20rem] font-extrabold tracking-tight text-white'>
          FUNDING
        </h1>
      </div>

      {/* 카드 콘텐츠 */}
      <div className='z-10 flex items-start justify-center'>
        {randomIdols.map((idol, index) => (
          <FundingCard
            key={idol.id || idol.name} // id가 있으면 id를 키로 사용
            image={idol.image}
            title={idol.title}
            location={idol.location}
            rotate={CARD_STYLES[index % CARD_STYLES.length].rotate} // 배열 범위를 벗어나지 않도록 모듈로 연산
            translate={CARD_STYLES[index % CARD_STYLES.length].translate}
          />
        ))}
      </div>

      {/* 설명란 + 버튼 */}
      <div className='flex flex-1 flex-col items-center justify-center'>
        <p className='text-center text-7xl font-semibold'>
          진행중인 아티스트들의 <br />
          다양한 조공을 구경해보세요
        </p>
        <img src={pinkArrow} alt='화살표' />
      </div>
    </div>
  );
};

export default FundingSection;
