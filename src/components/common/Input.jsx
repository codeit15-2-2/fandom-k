import { useState } from 'react';
import { cn } from '@utils/cn';

const Input = ({ credit, isErr, ErrMsg, validate, onClick, isDonate }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={cn('w-full max-w-[429px] text-left text-white')}>
      <div className='sub-content-text'>내 크레딧 : {credit} </div>

      <div className='flex flex-col'>
        <input
          type='text'
          value={input}
          onChange={handleInputChange}
          placeholder='크레딧 입력'
          className={cn(
            'sub-title-text bg-navy mt-2.5 rounded-xl border-2 px-4 py-4 transition-all',
            isErr ? 'border-red-500' : 'border-white',
          )}
        />
        {isErr && (
          <span className='content-text mt-2.5 text-red-500'>{ErrMsg}</span>
        )}

        <div className='mb-7.5 flex gap-3'>
          <button>+ 100</button>
          <button>+ 100</button>
          <button>+ 100</button>
          <button>+ 100</button>
        </div>

        <button className='bg-gradient-brand cursor-pointer px-4 py-4 text-2xl'>
          버튼컴포넌트 들어갈곳
        </button>
      </div>
    </div>
  );
};

export default Input;
