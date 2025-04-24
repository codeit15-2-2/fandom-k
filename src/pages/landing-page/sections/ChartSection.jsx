import WristBand from '@pages/landing-page/components/elements/wrist-band/WristBand';
import yellowSpark from '@assets/doodles/spark-yellow.png';

import { cn } from '@libs/cn';
import { getRandomIdols } from '@pages/landing-page/utils/getRandomIdols';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';

// 손목띠 스타일 상수
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

// 스타일 + 아이돌 결합 데이터 생성 함수
const getWristBandData = (idols) =>
  idols.slice(0, WRISTBAND_STYLES.length).map((idol, index) => ({
    ...WRISTBAND_STYLES[index],
    idol,
    ranking: `0${index + 1}`,
  }));

// 메인 차트 섹션
const ChartSection = () => {
  const wristBandData = getWristBandData(getRandomIdols());

  return (
    <div className={cn(SNAP_ITEM, 'bg-black p-24')}>
      <ChartHeader />
      <ChartWristBandList bands={wristBandData} />
      <ChartDescription />
    </div>
  );
};

// 헤더 섹션
const ChartHeader = () => (
  <div className='relative p-24'>
    <h1 className='text-8xl font-extrabold tracking-tight text-white md:text-[20rem]'>
      CHART
    </h1>
    <img
      src={yellowSpark}
      alt='스파크 이미지'
      className='absolute inset-0 top-24 w-40'
    />
  </div>
);

// 손목띠 섹션
const ChartWristBandList = ({ bands }) => (
  <div className='-mt-40 flex flex-col gap-4'>
    {bands.map(({ idol, color, rotate, zIndex, translate, ranking }, index) => (
      <WristBand
        key={idol.id || `band-${index}`}
        color={color}
        idol={idol}
        ranking={ranking}
        rotate={rotate}
        zIndex={zIndex}
        translates={translate}
      />
    ))}
  </div>
);

// 설명 섹션
const ChartDescription = () => (
  <div className='flex flex-3 flex-col items-center justify-center gap-8'>
    <p className='text-center text-7xl font-semibold text-white'>
      내가 사랑하는 아티스트
      <br />내 손으로 1위 만듭니다
    </p>
  </div>
);

export default ChartSection;
