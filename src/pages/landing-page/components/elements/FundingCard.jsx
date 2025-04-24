import { cn } from '@libs/cn';

const FundingCard = ({ image, title, location, rotate, translate }) => {
  return (
    <div
      className={cn(
        'flex h-110 w-70 flex-col overflow-hidden rounded-3xl text-white drop-shadow-2xl/30 md:h-150 md:w-100',
        rotate,
        translate,
      )}
    >
      <div className='h-4/5 overflow-hidden rounded-t-3xl'>
        <img
          src={image}
          alt='펀딩카드 연예인 이미지'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='from-brand-1 to-brand-2 flex h-1/5 flex-col rounded-b-3xl bg-gradient-to-r p-4'>
        <div className='flex justify-between'>
          <p className='text-lg font-semibold md:text-xl'>{location}</p>
          <p className='text-lg font-semibold text-white md:text-xl'>D-5</p>
        </div>
        <h1 className='text-xl leading-snug font-bold md:text-2xl'>{title}</h1>
      </div>
    </div>
  );
};

export default FundingCard;
