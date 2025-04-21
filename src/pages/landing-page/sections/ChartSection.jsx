import WristBand from '@pages/landing-page/components/chart/WristBand';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import { idolsList } from '@pages/landing-page/mocks/idolsList';
import spark from '@pages/landing-page/assets/doodles/yellow-spark.png';
import { cn } from '@libs/cn';

// 손목띠 스타일 설정을 객체로 구조화
const WRISTBAND_STYLES = [
  {
    color: 'orange-600',
    rotate: '-rotate-7',
    translate: 'translate-x-2',
    zIndex: '',
  },
  {
    color: 'teal-600',
    rotate: '-rotate-2',
    translate: '-translate-x-10',
    zIndex: 'z-10',
  },
  {
    color: 'brand-2',
    rotate: 'rotate-2',
    translate: 'translate-x-4',
    zIndex: '',
  },
  {
    color: 'blue-400',
    rotate: '-rotate-2',
    translate: '-translate-x-2',
    zIndex: 'z-10',
  },
  {
    color: 'teal-500',
    rotate: 'rotate-5',
    translate: '-translate-x-30',
    zIndex: 'z-20',
  },
  {
    color: 'brand-1',
    rotate: '-rotate-5',
    translate: 'translate-x-2',
    zIndex: 'z-30',
  },
  {
    color: 'sky-400',
    rotate: 'rotate-2',
    translate: '-translate-x-2',
    zIndex: 'z-40',
  },
];

// 표시할 아이돌 수
const DISPLAY_COUNT = 7;

const ChartSection = () => {
  // 표시할 아이돌 목록 (상위 7명)
  const displayIdols = idolsList.slice(0, DISPLAY_COUNT);

  return (
    <div className={cn(SNAP_ITEM, 'relative bg-black p-24')}>
      {/* 타이틀 헤더 */}
      <div className='absolute top-24 left-0 flex w-full justify-center'>
        <h1 className='text-stroke-white relative text-[20rem] font-extrabold tracking-tight'>
          CHART
          <img src={spark} alt='스파크 이미지' className='absolute w-40' />
        </h1>
      </div>

      {/* 손목띠 차트 콘텐츠 - z-index를 높게 설정하여 텍스트 위에 표시 */}
      <div className='relative z-20 -mt-12 flex flex-col gap-4'>
        {displayIdols.map((idol, index) => {
          const style = WRISTBAND_STYLES[index];
          return (
            <WristBand
              key={idol.id || `band-${index}`}
              color={style.color}
              idol={idol}
              ranking={`0${index + 1}`}
              rotate={style.rotate}
              zIndex={style.zIndex}
              translates={style.translate}
            />
          );
        })}
      </div>

      {/* 설명란 + 버튼 */}
      <div className='relative z-30 mt-8'>
        <p className='text-4xl text-white'>해보세요 해보세요</p>
      </div>
    </div>
  );
};

export default ChartSection;
