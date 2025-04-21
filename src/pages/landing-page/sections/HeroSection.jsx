import { cn } from '@libs/cn';
import { ArrowCircleRight } from '@pages/landing-page/components/icons/ArrowCircleright';
import { SNAP_ITEM } from '@pages/landing-page/constants/layouts';

const HeroSection = () => {
  return (
    <div className={cn(`${SNAP_ITEM} gap-12 bg-black`)}>
      <h1 className='text-9xl text-white'>
        You moved me — <br />
        Now I move for you
      </h1>
      <ArrowCircleRight />
    </div>
  );
};

export default HeroSection;
