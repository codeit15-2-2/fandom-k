import React from 'react';
import { cn } from '@/utils/cn';
/**
 * Button 컴포넌트
 *
 * @param {string} btnText - 버튼에 표시할 텍스트
 * @param {React.ReactNode} icon - 버튼에 포함될 아이콘
 * @param {'xl' | 'l' | 'm' | 's' | 'xs'} [size='xl'] - 버튼의 크기
 * @param {'gray' | 'pink'} [color='pink'] - 버튼 색상
 * @param {() => void} onClick - 버튼 클릭 시 실행할 함수
 * @param {string} [className=''] - 추가적인 스타일
 * @param {boolean} [border=false] - 버튼에 border를 부여할지(border를 주고싶으면 props를 넘길때 border라고만 적기)
 * @param {boolean} [disabled=false] - 버튼 비활성화 여부(props를 줄때 disabled라고만 적기)
 * @param {boolean} [rounded=false] - 버튼이 둥근형태일지 여부(props를 줄때 rounded라고만 적기)
 *
 * @returns {JSX.Element} <Button/>컴포넌트
 * 
 * 
 * 예시
 *   <Button
        className='mt-4 mb-4 ml-4' //추가 클래스네임
        btnText='확인'
        color='pink'
        size='xs'
        disabled
        rounded
        onClick={handleTest}
      />


        <Button
        className='mt-4 mb-4 ml-4'
        btnText='확인'
        color='gray'
        size='xs'
        rounded
      />
 */
const Button = ({
  btnText, //버튼 텍스트
  icon, //아이콘 유무
  size = 'xl', //버튼 사이즈
  color = 'pink', //색상
  onClick, //onclick함수
  className = '', //추가 className(스타일)
  border = false, //border여부
  disabled = false, //버튼 비활성 여부
  rounded = false, // 라운드 여부
}) => {
  //사이즈
  const sizeStyles = {
    xl: 'h-[43px] w-[477px] sub-content-text text-bold py-[9px]',
    l: 'h-[42px] w-[327px] sub-content-text text-bold py-[9px]',
    m: 'h-[42px] w-[295px] sub-content-text text-bold py-[9px]',
    s: 'h-[40px] w-[234px] sub-content-text text-bold py-[8px]',
    xs: 'h-[31px] w-[142px] sub-content-text text-bold py-[6px]',
  };

  //컬러
  const colorStyles = {
    gray: 'bg-gray-200 text-white cursor-pointer opacity-80',
    pink: 'bg-gradient-brand text-white cursor-pointer',
  };

  //disabled가 props로 넘어올시 적용할 스타일
  const disabledStyles =
    'bg-gray-300 text-white cursor-not-allowed pointer-events-none';

  const InitailClassName = cn(
    'flex items-center justify-center transition-all font-bold',
    sizeStyles[size],
    disabled ? disabledStyles : colorStyles[color],
    rounded ? 'rounded-full' : 'rounded-sm',
    border && 'border-1 border-white',
    className,
  );

  return (
    <button onClick={onClick} className={InitailClassName} disabled={disabled}>
      {icon && (
        <span className='flex items-center justify-center object-contain'>
          {icon}
        </span>
      )}
      {btnText}
    </button>
  );
};

export default Button;
