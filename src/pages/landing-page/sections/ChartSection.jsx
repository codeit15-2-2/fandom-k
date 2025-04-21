import WristBand from '@pages/landing-page/components/chart/WristBand';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import { idolsList } from '@pages/landing-page/mocks/idolsList';
import spark from '@pages/landing-page/assets/doodles/yellow-spark.png';
import { cn } from '@libs/cn';

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

const getRandomIdols = (count = 7) => {
  return [...idolsList].sort(() => Math.random() - 0.5).slice(0, count);
};

const ChartSection = () => {
  const randomIdolList = getRandomIdols();
  const wristBandData = randomIdolList
    .slice(0, WRISTBAND_STYLES.length)
    .map((idol, index) => ({
      ...WRISTBAND_STYLES[index],
      idol,
      ranking: `0${index + 1}`,
    }));

  return (
    <div className={cn(SNAP_ITEM, 'bg-black p-24')}>
      {/* 타이틀 헤더 */}
      <div className='relative flex justify-center'>
        <h1 className='text-stroke-white text-[20rem] font-extrabold tracking-tight'>
          CHART
        </h1>
        <img
          src={spark}
          alt='스파크 이미지'
          className='absolute inset-0 w-40'
        />
      </div>

      {/* 손목띠 차트 콘텐츠 */}
      <div className='-mt-40 flex flex-col gap-4'>
        {wristBandData.map(
          ({ idol, color, rotate, zIndex, translate, ranking }, index) => (
            <WristBand
              key={idol.id || `band-${index}`}
              color={color}
              idol={idol}
              ranking={ranking}
              rotate={rotate}
              zIndex={zIndex}
              translates={translate}
            />
          ),
        )}
      </div>

      {/* 설명란 + 버튼 */}
      <div className='flex flex-3 items-center'>
        <p className='text-4xl text-white'>해보세요 해보세요</p>
      </div>
    </div>
  );
};

export default ChartSection;
