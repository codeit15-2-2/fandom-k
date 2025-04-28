import { useObserver } from '@pages/landing-page/hooks/useObserver';
import WristBand from '@pages/landing-page/components/elements/wrist-band/WristBand';
import logo from '@assets/logos/logo.webp';
import { cn } from '@libs/cn';
import { getRandomIdols } from '@pages/landing-page/utils/getRandomIdols';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import { motion } from 'motion/react';
import { useMemo } from 'react';

// 손목띠 스타일 상수
const WRISTBAND_STYLES = [
  {
    color: 'orange-600',
    rotate: '-rotate-7',
    translate: 'translate-x-2',
    zIndex: 'z-0',
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
    zIndex: 'z-0',
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
    translate: '-translate-x-10',
    zIndex: 'z-20',
  },
  {
    color: 'brand-1',
    rotate: '-rotate-5',
    translate: 'translate-x-10',
    zIndex: 'z-30',
  },
  {
    color: 'sky-400',
    rotate: 'rotate-2',
    translate: '-translate-x-2',
    zIndex: 'z-40',
  },
];

// 메인 차트 섹션
const ChartSection = () => {
  // useObserver 훅 사용하여 스크롤 애니메이션 제어
  const [sectionRef, isVisible] = useObserver({
    threshold: 0.2, // 섹션이 20% 이상 보이면 감지
    delay: 300, // 300ms 지연 후 애니메이션 시작
    rootMargin: '0px', // 기본값 사용
  });

  // 손목띠 데이터는 컴포넌트가 마운트될 때 한 번만 생성되도록 함
  const wristBandData = useMemo(() => {
    const idols = getRandomIdols();
    return idols.slice(0, WRISTBAND_STYLES.length).map((idol, index) => ({
      ...WRISTBAND_STYLES[index],
      idol,
      ranking: `0${index + 1}`,
    }));
  }, []);

  return (
    <div
      ref={sectionRef}
      className={cn(SNAP_ITEM, 'relative gap-4 overflow-hidden bg-black')}
    >
      <ChartHeader isVisible={isVisible} />
      <ChartWristBandList bands={wristBandData} isVisible={isVisible} />
      <ChartDescription isVisible={isVisible} />
    </div>
  );
};

// 헤더 섹션
const ChartHeader = ({ isVisible }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ type: 'spring', stiffness: 80, damping: 30 }}
    className='flex flex-1 flex-col items-center justify-center'
  >
    <motion.img src={logo} alt='로고 이미지' className='w-[18rem]' />
    <motion.h1 className='relative text-8xl font-extrabold tracking-tight text-white md:text-[14rem]'>
      CHART
    </motion.h1>
  </motion.div>
);

// 손목띠 섹션 - 가장 마지막에 등장하도록 딜레이 조정
const ChartWristBandList = ({ bands, isVisible }) => (
  <div className='-mt-20 flex flex-1 flex-col items-center justify-center gap-4'>
    {bands.map(({ idol, color, rotate, zIndex, translate, ranking }, index) => (
      <motion.div
        key={`band-${index * Math.random()}`}
        initial={{ y: -1000 }}
        animate={isVisible ? { y: 0 } : { y: -1000 }}
        transition={{
          type: 'spring',
          stiffness: 30,
          damping: 10,
          // 기본 딜레이 1.8초 후 각 손목띠마다 0.5초씩 추가 딜레이
          delay: isVisible ? 0.5 + index * 0.3 : 0,
        }}
      >
        <WristBand
          color={color}
          idol={idol}
          ranking={ranking}
          rotate={rotate}
          zIndex={zIndex}
          translates={translate}
        />
      </motion.div>
    ))}
  </div>
);

// 설명 섹션 - 헤더 다음에 등장하도록 딜레이 조정
const ChartDescription = ({ isVisible }) => (
  <motion.div
    className='flex flex-1 flex-col items-center justify-center'
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ type: 'spring', stiffness: 80, damping: 30 }}
  >
    <p className='text-center text-4xl font-semibold text-white md:text-6xl'>
      내가 사랑하는 아티스트를
      <br />내 손으로 직접 1위로 만들어보세요
    </p>
  </motion.div>
);

export default ChartSection;
