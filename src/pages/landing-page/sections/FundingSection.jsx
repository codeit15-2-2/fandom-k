import FundingCard from '@pages/landing-page/components/elements/FundingCard';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import { cn } from '@libs/cn';
import { getRandomIdols } from '@pages/landing-page/utils/getRandomIdols';
import pinkArrow from '@assets/doodles/arrow-pink.webp';
import { motion } from 'motion/react';
import { useObserver } from '@pages/landing-page/hooks/useObserver';
import logo from '@assets/logos/logo-stroked.webp';
import { useState, useEffect, useMemo } from 'react';

// 카드 스타일 설정
const FUNDING_CARD_STYLES = [
  { rotate: '-rotate-15', translate: 'translate-y-20' },
  { rotate: 'rotate-10', translate: '' },
  { rotate: '-rotate-20', translate: '-translate-y-20' },
  { rotate: 'rotate-5', translate: '-translate-y-20' },
  { rotate: 'rotate-20', translate: 'translate-y-20' },
  { rotate: 'rotate-10', translate: 'translate-y-15' },
];

// 애니메이션 설정
const ANIMATION_CONFIG = {
  header: {
    type: 'spring',
    stiffness: 80,
    damping: 30,
  },
  cards: {
    type: 'spring',
    stiffness: 80,
    damping: 30,
  },
};

// 메인 펀딩 섹션
const FundingSection = () => {
  // 랜덤 아이돌 목록을 한 번만 생성하도록 useMemo 사용
  const randomIdols = useMemo(() => getRandomIdols(), []);
  const [setRef, isVisible] = useObserver();
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    let timer = null;

    if (isVisible) {
      timer = setTimeout(() => setIsCardVisible(true), 1000);
    } else {
      setIsCardVisible(false);
    }

    // 타이머 정리를 위한 클린업 함수
    return () => {
      if (timer !== null) {
        clearTimeout(timer);
      }
    };
  }, [isVisible]);

  return (
    <motion.section ref={setRef} className={cn(SNAP_ITEM, 'relative bg-white')}>
      <FundingHeader isVisible={isVisible} />
      <FundingCardList idols={randomIdols} isVisible={isCardVisible} />
      <FundingDescription isVisible={isVisible} />
    </motion.section>
  );
};

// 헤더 섹션
const FundingHeader = ({ isVisible }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={ANIMATION_CONFIG.header}
    className='mt-60 flex flex-1 flex-col items-center justify-end gap-4'
  >
    <img src={logo} alt='펜덤 케이 로고' className='w-[18rem]' />
    <h1 className='text-8xl font-extrabold tracking-tight text-black md:text-[14rem]'>
      FUNDING
    </h1>
  </motion.div>
);

// 카드 리스트 섹션
const FundingCardList = ({ idols, isVisible }) => {
  // 스타일 적용 유틸 함수
  const getFundingCardStyle = (index) =>
    FUNDING_CARD_STYLES[index % FUNDING_CARD_STYLES.length];

  return (
    <div className='flex items-center justify-center'>
      {idols.map((idol, index) => {
        const style = getFundingCardStyle(index);
        return (
          <motion.div
            key={idol.id || `funding-card-${index}`}
            initial={{ x: 400, y: 50, rotate: 15, opacity: 0 }}
            animate={
              isVisible
                ? { x: 0, y: 0, rotate: 0, opacity: 1 }
                : { x: 400, y: 50, rotate: 30, opacity: 0 }
            }
            transition={ANIMATION_CONFIG.cards}
          >
            <FundingCard
              image={idol.image}
              title={idol.title}
              location={idol.location}
              rotate={style.rotate}
              translate={style.translate}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

// 설명 섹션
const FundingDescription = ({ isVisible }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={ANIMATION_CONFIG.header}
    className='mb-40 flex flex-1 flex-col items-center justify-center gap-8'
  >
    <img
      src={pinkArrow}
      alt='아래를 가리키는 핑크색 화살표'
      className='h-24 w-24 rotate-5 md:h-48 md:w-60'
    />
    <p className='text-center text-4xl font-semibold md:text-6xl'>
      진행중인 아티스트들의 <br />
      다양한 조공을 구경해보세요
    </p>
  </motion.div>
);

export default FundingSection;
