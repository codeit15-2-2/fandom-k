import { cn } from '@libs/cn';

const CIRCLE_SIZE = {
  lg: 'w-60 h-60 md:w-100 md:h-100',
  md: 'w-40 h-40 md:w-80 md:h-80',
  sm: 'w-30 h-30 md:w-60 md:h-60',
};

const Circle = ({ img, size }) => {
  const circleSize = CIRCLE_SIZE[size];

  return (
    <div
      className={cn(
        circleSize,
        'from-brand-1 to-brand-2 rounded-full bg-gradient-to-br',
      )}
    >
      {img && (
        <img
          src={img}
          alt='연예인 사진'
          className='h-full w-full rounded-full object-cover'
        />
      )}
    </div>
  );
};

export default Circle;
