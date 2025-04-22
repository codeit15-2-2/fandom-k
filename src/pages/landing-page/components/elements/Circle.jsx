import { cn } from '@libs/cn';

const CIRCLE_SIZE = {
  lg: 'w-100 h-100',
  md: 'w-70 h-70',
  sm: 'w-50 h-50',
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
