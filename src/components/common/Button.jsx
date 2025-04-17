import React from 'react';
import { cn } from '@/utils/cn';
import {
  SIZE_STYLES,
  COLOR_STYLES,
  DISABLED_STYLE,
} from '@constants/buttonConstants';
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
 * @param {string} [btnType='button'] - 버튼의 type 속성 default는 'button' 
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
        btnType='submit'
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

  onClick = () => {
    console.log('TestClick');
  }, //onclick함수

  className = '', //추가 className(스타일)

  border = false, //border여부

  disabled = false, //버튼 비활성 여부

  rounded = false, // 라운드 여부

  btnType = 'button', //submit,button등 type여부
}) => {
  //디폴트클래스네임 + size + disabled true시 스타일 + rounded true시 스타일 + border true시 스타일+ 추가 클래스네임 prop

  const buttonClassNames = cn(
    'flex items-center justify-center transition-all font-bold', //디폴트 클래스네임
    SIZE_STYLES[size],
    disabled ? DISABLED_STYLE : COLOR_STYLES[color],
    rounded ? 'rounded-full' : 'rounded-sm',
    border && 'border',
    className,
  );

  return (
    <button
      type={btnType}
      onClick={onClick}
      className={buttonClassNames}
      disabled={disabled}
    >
      {icon && (
        <span className='mr-2 flex items-center justify-center object-contain'>
          {icon}
        </span>
      )}
      {btnText}
    </button>
  );
};

export default Button;
