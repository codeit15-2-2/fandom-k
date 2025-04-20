import WristBand from '@pages/landing-page/components/chart/WristBand';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';
import { idolsList } from '@pages/landing-page/mocks/idolsList';
import spark from '@pages/landing-page/assets/yellow-spark.png';

const colors = [
  'orange-600',
  'teal-600',
  'brand-2',
  'blue-400',
  'teal-500',
  'brand-1',
  'sky-400',
];

const rotates = [
  '-rotate-7',
  '-rotate-2',
  'rotate-2',
  '-rotate-2',
  'rotate-5',
  '-rotate-5',
  'rotate-2',
];

const translates = [
  'translate-x-2',
  '-translate-x-10',
  'translate-x-4',
  '-translate-x-2',
  '-translate-x-30',
  'translate-x-2',
  '-translate-x-2',
];

const zIndex = ['', 'z-10', '', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50'];

const ChartSection = () => {
  return (
    <div className={`${SNAP_ITEM} relative bg-black`}>
      <h1 className='text-stroke-white relative text-8xl text-[20rem] font-extrabold'>
        CHART
      </h1>
      <img src={spark} className='absolute top-50 left-90 w-40' />
      <div className='flex flex-col gap-4'>
        {idolsList.slice(0, 7).map((idol, index) => (
          <WristBand
            key={`band-${index}`}
            color={colors[index]}
            idol={idol}
            rotate={rotates[index]}
            zIndex={zIndex[index]}
            translates={translates[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default ChartSection;
