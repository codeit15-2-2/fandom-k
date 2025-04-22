import { cn } from '@/utils/cn';

const DETAIL_TITLE_WIDTH_STYLES = {
  s: 'items-start w-full text-start pb-4 border-b-1 border-[rgba(255,255,255,0.3)]',
  l: 'items-end w-[60rem] text-end',
};

const DETAIL_TITLE_SIZE_STYLES = {
  s: 'text-5xl',
  l: 'text-7xl',
};

const DetailTitle = ({ name, title, location, size = 'l' }) => {
  const DetailTitleWidthClassNames = cn(
    'flex flex-col gap-4 text-white',
    DETAIL_TITLE_WIDTH_STYLES[size],
  );

  const DetailTitleClassNames = cn('text-bold', DETAIL_TITLE_SIZE_STYLES[size]);

  return (
    <div className={DetailTitleWidthClassNames}>
      <p className='text-3xl opacity-60'>{name}</p>
      <p className={DetailTitleClassNames}>{title}</p>
      <p className='text-4xl opacity-60'>{location}</p>
    </div>
  );
};

export default DetailTitle;
