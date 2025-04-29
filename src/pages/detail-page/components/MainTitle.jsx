import { useEffect, useRef, useState, memo } from 'react';
import { cn } from '@/utils/cn';

const MAIN_TITLE_SIZE_STYLES = {
  s: 'text-[5vw]',
  m: 'text-4xl',
  l: 'text-5xl',
};

const MAIN_NAME_SIZE_STYLES = {
  s: 'text-[20vw]',
  m: 'text-[10rem]',
  l: 'text-[15rem]',
};

/**
 * 후원 제목 컴포넌트 (메인)
 * @component
 * @param {string} props.title - 후원 제목
 * @param {string} props.name - 아이돌 영문 이름
 * @param {'s' | 'm' | 'l'} [props.size='s'] - 후원 제목 사이즈 (default size: 's')
 *
 * @example
 * <MainTitle title='1주년 기념 팝업 카페' name='KARINA' size='s' />
 */

const MainTitle = ({ title, name, size = 's' }) => {
  const nameClassNames = cn(
    'font-extralight break-words',
    MAIN_NAME_SIZE_STYLES[size],
  );

  return (
    <div className='w-full text-white'>
      <p className={MAIN_TITLE_SIZE_STYLES[size]}>{title}</p>
      <div className='w-full leading-none'>
        <p className={nameClassNames}>{name}</p>
      </div>
    </div>
  );
};

export default memo(MainTitle, (prev, next) => {
  if (prev.title !== next.title) return false;
  if (prev.name !== next.name) return false;
  if (prev.size !== next.size) return false;
  return true;
});
