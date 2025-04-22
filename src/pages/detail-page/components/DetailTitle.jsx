import { cn } from '@/utils/cn';

const DETAIL_TITLE_WIDTH_STYLES = {
  s: 'items-start w-full text-start pb-4 border-b-1 border-[rgba(255,255,255,0.3)]',
  l: 'items-end w-[60rem] text-end',
};

const DETAIL_TITLE_SIZE_STYLES = {
  s: 'text-5xl',
  l: 'text-7xl',
};

/**
 * 후원 제목 컴포넌트 (세부)
 * @component
 * @param {string} props.title - 후원 제목
 * @param {string} props.name - 아이돌 그룹명 + 이름
 * @param {string} props.location - 후원 장소
 * @param {'s' | 'l'} [props.size='l'] - 후원 제목 크기 (default size: 'l')
 *
 * @example
 * 's' 사이즈는 w-full로 되어있고, 'l' 사이즈는 w-[60rem]으로 고정되어 있습니다.
 *
 * <DetailTitle
 *   name='에스파 카리나'
 *   title='1주년 기념 팝업 카페'
 *   location='홍대 AK 플라자'
 *   size='s'
 * />
 */

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
