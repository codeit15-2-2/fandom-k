import Button from '@pages/landing-page-2/components/Button';
import FundingCard from '@pages/landing-page/components/FundingCard';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import { idolsList } from '@pages/landing-page/mocks/idolsList';
import pinkArrow from '@pages/landing-page/assets/pink-arrow.png';

const FundingSection = () => {
  const randomIdols = [...idolsList]
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  const cardStyles = [
    { rotate: '-rotate-15', translate: 'translate-y-20' },
    { rotate: 'rotate-10', translate: '' },
    { rotate: '-rotate-20', translate: '-translate-y-20' },
    { rotate: 'rotate-5', translate: '-translate-y-20' },
    { rotate: 'rotate-20', translate: 'translate-y-20' },
    { rotate: 'rotate-10', translate: 'translate-y-15' },
  ];

  return (
    <div className={`${SNAP_ITEM}`}>
      <div className='relative flex h-full w-full flex-col items-center justify-between bg-white p-24'>
        <div className='flex-1'>
          <h1 className='text-stroke-black text-white-black mt-40 text-[20rem] font-extrabold tracking-tight text-white'>
            FUNDING
          </h1>
        </div>
        <div className='absolute top-1/3 left-1/2 z-10 flex -translate-x-1/2 items-start justify-center'>
          {randomIdols.map((idol, index) => (
            <FundingCard
              key={idol.name}
              image={idol.image}
              title={idol.title}
              location={idol.location}
              rotate={cardStyles[index].rotate}
              translate={cardStyles[index].translate}
            />
          ))}
        </div>
        <div className='relative flex flex-1 flex-col items-center justify-center gap-12 text-5xl font-semibold'>
          <p className='text-center'>
            진행중인 아티스트들의 <br />
            다양한 조공을 구경해보세요
          </p>

          <div className='relative flex items-center justify-center'>
            <Button>구경하러 가기</Button>
            <img src={pinkArrow} className='absolute top-30' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingSection;
