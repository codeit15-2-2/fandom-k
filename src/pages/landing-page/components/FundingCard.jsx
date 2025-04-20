import { cn } from '@libs/cn';

const FundingCard = ({ image, title, location, rotate, translate }) => {
  return (
    <div
      className={cn(
        'z-10 flex h-150 w-[25rem] flex-col overflow-hidden rounded-3xl text-white drop-shadow-2xl/30',
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
          <p className='text-xl font-semibold'>{location}</p>
          <p className='text-xl font-semibold text-white'>D-5</p>
        </div>
        <h1 className='text-2xl leading-snug font-bold'>{title}</h1>
      </div>
    </div>
  );
};

export default FundingCard;
