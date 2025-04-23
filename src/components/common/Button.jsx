import React from 'react';
import { cn } from '@/utils/cn';
import {
  SIZE_STYLES,
  COLOR_STYLES,
  DISABLED_STYLE,
} from '@constants/buttonConstants';
import Spinner from '@assets/icons/icon_spinner';
/**
 * Button 컴포넌트
 *
 * 
 * @param {React.ReactNode} icon - 버튼에 포함될 아이콘
 * @param {'xl' | 'l' | 'm' | 's' | 'xs'} [size='xl'] - 버튼의 크기
 * @param {'gray' | 'pink'} [color='pink'] - 버튼 색상
 * @param {() => void} onClick - 버튼 클릭 시 실행할 함수
 * @param {string} [className=''] - 추가적인 스타일
 * @param {boolean} [border=false] - 버튼에 border를 부여할지(border를 주고싶으면 props를 넘길때 border라고만 적기)
 * @param {boolean} [disabled=false] - 버튼 비활성화 여부(props를 줄때 disabled라고만 적기)
 * @param {boolean} [rounded=false] - 버튼이 둥근형태일지 여부(props를 줄때 rounded라고만 적기)
 * @param {string} [btnType='button'] - 버튼의 type 속성 default는 'button'
 * @param {boolean} [isLoading=false] - 로딩 상태 여부. true일 경우 버튼 텍스트 대신 로딩 아이콘 표시(isLoading같은 state를 넘겨주면됩니다)
 *
 * @returns {JSX.Element} <Button/>컴포넌트
 * 
 * 
 * @example
 *    <Button color='pink' size='m' className='hover:bg-black  isLoading={isLoading} border rounded '>
        하이
      </Button>


       
      
 */
const Button = ({
  children,
  size = 'xl',
  color = 'pink',
  onClick = () => {
    console.log('TestClick');
  },
  border = false,
  disabled = false,
  rounded = false,
  btnType = 'button',
  isLoading = false,
  className = '',
  ...props
}) => {
  const buttonClassNames = cn(
    'flex items-center justify-center transition-all font-bold sub-content-text',
    SIZE_STYLES[size],
    disabled ? DISABLED_STYLE : COLOR_STYLES[color],
    rounded ? 'rounded-full' : 'rounded-sm',
    border && 'border',
    isLoading && 'cursor-not-allowed pointer-events-none',
    className,
  );

  return (
    <button
      type={btnType}
      onClick={onClick}
      className={buttonClassNames}
      disabled={disabled}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
