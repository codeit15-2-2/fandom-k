import { useContext, createContext } from 'react';
import { cn } from '@/utils/cn';
import CardImg from '@components/common/CardImg';

const CARD_SIZE_STYLE = {
  s: 'w-[15.8rem]',
  m: 'w-[28rem]',
};

const IdolCardContext = createContext({
  id: null,
  src: '',
  location: '',
  title: '',
  credit: 0,
  daysLeft: 0,
  onClick: () => {},
  isHover: false,
  size: 'm',
});

const IdolCardList = ({
  id,
  src,
  location,
  title,
  credit,
  daysLeft,
  onClick,
  isHover = false,
  size = 'm',
  children,
}) => {
  const contextValue = {
    id,
    src,
    location,
    title,
    credit,
    daysLeft,
    onClick,
    isHover,
    size,
  };

  const IdolCardWrapClassName = cn(
    'w-full max-w-xs overflow-hidden bg-[var(--color-black)] text-[var(--color-white)]',
    CARD_SIZE_STYLE[size],
  );

  return (
    <IdolCardContext.Provider value={contextValue}>
      <div className={IdolCardWrapClassName}>
        <IdolCardImg />
        <IdolCardText />
        {children}
      </div>
    </IdolCardContext.Provider>
  );
};

const IdolCardText = () => {
  const { location, title, size } = useContext(IdolCardContext);

  const locationClassName = cn(
    'mb-2 text-[var(--color-gray-300)]',
    size === 's' ? 'caption-text' : 'content-text',
  );

  const titleClassName = cn(
    size === 's' ? 'sub-content-text' : 'text-[1.8rem]',
  );

  return (
    <div className='pt-2 pb-6'>
      <p className={locationClassName}>{location}</p>
      <p className={titleClassName}>{title}</p>
    </div>
  );
};

const IdolCardImg = () => {
  const { src, title, isHover } = useContext(IdolCardContext);

  return (
    <div className='relative w-full'>
      <CardImg
        className='rounded-2xl object-contain'
        src={src}
        alt={title}
        isHover={isHover}
      />
    </div>
  );
};

const IdolCardFooter = () => {
  const { credit, daysLeft, progress = 15 } = useContext(IdolCardContext);

  return (
    <>
      <div className='caption-text flex items-center justify-between pb-4'>
        <span className='text-[var(--color-brand-1)]'>
          ₩ {credit}
        </span>

        <span className='text-[var(--color-gray-300)]'>{daysLeft}일 남음</span>
      </div>

      <div className='h-1 w-full overflow-hidden bg-[var(--color-white)]'>
        <div
          className='h-full bg-[var(--color-brand-1)]'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </>
  );
};

IdolCardList.IdolCardImg = IdolCardImg;
IdolCardList.IdolCardText = IdolCardText;
IdolCardList.IdolCardFooter = IdolCardFooter;

export default IdolCardList;