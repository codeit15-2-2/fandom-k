import { useState } from 'react';
import { cn } from '@utils/cn';
import { InputValidate } from '@utils/InputValidate';
import CreditIcon from '@assets/icons/creditIcon';

/**
 * @component Input
 * @description 크레딧 입력을 위한 사용자 인터페이스 컴포넌트. 사용자는 직접 입력하거나 +버튼, 전액 버튼 등을 통해 값을 입력할 수 있고, 유효성 검사 후 버튼 클릭 시 입력값을 상위 컴포넌트에 전달합니다.
 *
 * @param {number} credit 사용자의 현재 보유 크레딧
 * @param {Function} [onClick] 클릭 시 input 값을 콜백으로 전달하는 함수
 * @param {boolean} isDonate 후원모드여부 -> 후원모드일시 전액버튼 활성화 && 버튼텍스트 '후원하기'로 변경
 *
 * @returns {JSX.Element}
 */

const Input = ({
  credit,
  onClick = () => {
    console.log({ credit });
  },
  isDonate,
}) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState({ isValid: true, message: '' }); // 크레딧입력관련 에러처리만 존재하는데, 이를 처리하기위해서는 내부에 존재하는게 더욱 복잡도 해소가 될것같음

  //input값 변경메소드
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    const { isValid, message } = InputValidate(Number(value), credit, isDonate);
    setError({ isValid, message });
  };

  // + 100, 500 ,1000버튼에 들어갈 메소드
  const handleAddAmount = (inputValue) => {
    const currentInputValue = Number(input) || 0;
    const nextInputValue = currentInputValue + inputValue;
    setInput(String(nextInputValue));

    const { isValid, message } = InputValidate(
      nextInputValue,
      credit,
      isDonate,
    );
    setError({ isValid, message });
  };

  //전액버튼에 추가될 메소드
  const handleAddAll = () => {
    setInput(String(credit));

    const { isValid, message } = InputValidate(credit, credit, isDonate);
    setError({ isValid, message });
  };

  //Props로 넘어올 OnClick함수에 input값을 넘겨주는 메소드
  const handleButtonClick = () => {
    if (!error.isValid) return;

    if (onClick) {
      onClick(Number(input)); //props로 넘어온 함수에 콜백으로 input값을 전달
      setInput('');
      setError({ isValid: true, message: '' });
    }
  };

  return (
    <div className={cn('w-full max-w-[429px] text-left text-white')}>
      <div className='sub-content-text'>내 크레딧 : {credit}</div>

      <div className='relative flex flex-col'>
        <div className='relative mt-2.5'>
          <input
            type='text'
            value={input}
            onChange={handleInputChange}
            placeholder='크레딧 입력'
            className={cn(
              'sub-title-text bg-navy w-full rounded-xl border-2 px-4 py-4 pr-12 transition-all',
              !error.isValid
                ? 'border-red-500 focus:outline-0'
                : 'border-white',
            )}
          />
          <CreditIcon className='absolute top-1/2 right-8 h-10 w-10 -translate-y-1/2 object-contain' />
        </div>
        {!error.isValid && (
          <span className='content-text mt-2.5 text-red-500'>
            {error.message}
          </span>
        )}

        <div className='mt-8 mb-7.5 flex gap-3'>
          {[100, 500, 1000].map((inputValue) => (
            <button
              onClick={() => handleAddAmount(inputValue)}
              key={inputValue}
              className='content-text bg-navy cursor-pointer rounded-md px-[15px] py-[9px] text-xl font-bold text-white hover:opacity-50'
            >
              + {inputValue.toLocaleString()}
            </button>
          ))}
          {isDonate && (
            <button
              onClick={handleAddAll}
              className='content-text bg-navy cursor-pointer rounded-md px-[15px] py-[9px] font-bold text-white hover:opacity-50'
            >
              전액
            </button>
          )}
        </div>

        <button
          onClick={handleButtonClick}
          disabled={!error.isValid || input === ''} // 검증실패나 인풋창이 비어져있는경우 버튼 공통컴포넌트를 통해 버튼 비활성화
          className={'bg-gradient-brand cursor-pointer px-4 py-4 text-2xl'}
        >
          버튼컴포넌트 들어갈곳
        </button>
      </div>
    </div>
  );
};

export default Input;
