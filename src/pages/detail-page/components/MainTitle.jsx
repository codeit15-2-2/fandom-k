import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';

const MAIN_TITLE_SIZE_STYLES = {
  s: 'text-3xl',
  m: 'text-4xl',
  l: 'text-5xl',
};

/**
 * 후원 제목 컴포넌트 (메인)
 * @component
 * @param {string} props.title - 후원 제목
 * @param {string} props.name - 아이돌 그룹명 + 이름
 * @param {'s' | 'm' | 'l'} [props.size='s'] - 후원 제목 사이즈 (default size: 's')
 *
 * @example
 * <MainTitle title='1주년 기념 팝업 카페' name='KARINA' size='s' />
 */

const MainTitle = ({ title, name, size = 's' }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [fontSize, setFontSize] = useState(100);

  // 이름이 부모 컨테이너의 width에 꽉 차도록 폰트 사이즈 수정하기 (반응형 단위를 사용할 경우 텍스트가 넘칠 수 있다.)
  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const textWidth = textRef.current.scrollWidth;

    const ratio = containerWidth / textWidth;
    const newFontSize = Math.floor(100 * Math.min(ratio, 1.7)); // 최대 크기 지정

    setFontSize(newFontSize);
  }, [name]);

  const titleClassNames = cn('mb-2', MAIN_TITLE_SIZE_STYLES[size]);

  return (
    <div className='w-[60vw] text-white'>
      <p className={titleClassNames}>{title}</p>
      <div
        ref={containerRef}
        className='h-fit w-full font-thin tracking-tighter'
      >
        <p
          ref={textRef}
          style={{
            fontSize: `${fontSize}px`,
            whiteSpace: 'nowrap',
            display: 'inline-block',
            lineHeight: '0.75',
          }}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default MainTitle;
