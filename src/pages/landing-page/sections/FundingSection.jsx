import Button from '@pages/landing-page/components/Button';
import FundingCard from '@pages/landing-page/components/FundingCard';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import { idolsList } from '@pages/landing-page/mocks/idolsList';
import pinkArrow from '@pages/landing-page/assets/doodles/pink-arrow.png';
import { cn } from '@libs/cn';

// 카드 스타일 설정을 컴포넌트 외부로 분리
const CARD_STYLES = [
  { rotate: '-rotate-15', translate: 'translate-y-20' },
  { rotate: 'rotate-10', translate: '' },
  { rotate: '-rotate-20', translate: '-translate-y-20' },
  { rotate: 'rotate-5', translate: '-translate-y-20' },
  { rotate: 'rotate-20', translate: 'translate-y-20' },
  { rotate: 'rotate-10', translate: 'translate-y-15' },
];

// 랜덤 아이돌 선택 함수 분리
const getRandomIdols = (count = 6) => {
  return [...idolsList].sort(() => Math.random() - 0.5).slice(0, count);
};

const FundingSection = () => {
  // 컴포넌트 마운트 시 한 번만 선택되도록 함수 호출
  const randomIdols = getRandomIdols();

  return (
    <div
      className={cn(
        SNAP_ITEM,
        'relative flex h-full w-full flex-col items-center justify-between bg-white p-24',
      )}
    >
      {/* 타이틀 헤더 */}
      <div className='flex-1'>
        <h1 className='text-stroke-black mt-40 text-[20rem] font-extrabold tracking-tight text-white'>
          FUNDING
        </h1>
      </div>

      {/* 카드 콘텐츠 */}
      <div className='absolute top-1/3 left-1/2 z-10 flex -translate-x-1/2 items-start justify-center'>
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
      <div className='relative flex flex-1 flex-col items-center justify-center gap-12 text-5xl font-semibold'>
        <p className='text-center'>
          진행중인 아티스트들의 <br />
          다양한 조공을 구경해보세요
        </p>

        <div className='relative flex items-center justify-center'>
          <Button>구경하러 가기</Button>
          <img src={pinkArrow} alt='화살표' className='absolute top-30' />
        </div>
      </div>
    </div>
  );
};

export default FundingSection;
