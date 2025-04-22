import WristBand from '@pages/landing-page/components/wrist-band/WristBand';
import yellowSpark from '@assets/doodles/spark-yellow.png';

import { cn } from '@libs/cn';
import { getRandomIdols } from '@pages/landing-page/utils/getRandomIdols';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';

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
      <div className='relative p-24'>
        <h1 className='text-[20rem] font-extrabold tracking-tight text-white'>
          CHART
        </h1>
        <img
          src={yellowSpark}
          alt='스파크 이미지'
          className='absolute inset-0 top-24 w-40'
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
      <div className='flex flex-3 flex-col items-center justify-center gap-8'>
        <p className='text-7xl font-semibold text-white'>
          내가 사랑하는 아티스트
          <br />내 손으로 1위 만듭니다
        </p>
      </div>
    </div>
  );
};

export default ChartSection;
