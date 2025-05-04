import { cn } from '@libs/cn';

const FundingCard = ({ image, title, location, rotate, translate }) => {
  return (
    <div
      className={cn(
        'flex h-80 w-[35.555rem] flex-col overflow-hidden text-white drop-shadow-2xl/30 md:h-150 md:w-100',
        rotate,
        translate,
      )}
    >
      <div className='overflow-hidden h-4/5 rounded-t-xl'>
        <img
          src={image}
          alt='펀딩카드 연예인 이미지'
          className='object-cover w-full h-full'
        />
      </div>
      <div className='flex flex-col p-4 h-1/5 bg-gradient-to-r rounded-b-xl from-brand-1 to-brand-2'>
        <div className='flex justify-between'>
          <p className='text-lg font-semibold md:text-xl'>{location}</p>
          <p className='text-lg font-semibold text-white md:text-xl'>D-5</p>
        </div>
        <h1 className='text-xl font-bold leading-snug md:text-2xl'>{title}</h1>
      </div>
    </div>
  );
};

export default FundingCard;
