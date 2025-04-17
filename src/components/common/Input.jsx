import { useState } from 'react';
import { cn } from '@utils/cn';

const Input = ({ credit, isErr, ErrMsg, validate, onClick }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={cn('w-full max-w-[429px] text-left text-white')}>
      <div>내 크레딧 : dummy </div>

      <div className='flex flex-col'>
        <input
          type='text'
          value={input}
          onChange={handleInputChange}
          placeholder='크레딧 입력'
          className={cn(
            'sub-title-text bg-navy rounded-xl border-2 px-4 py-4 transition-all',
            isErr ? 'border-red-500' : 'border-white',
          )}
        />
        {isErr && <span className='sub-title-text text-red-500'>{ErrMsg}</span>}

        <div className='flex gap-3'>
          <button>+ 100</button>
          <button>+ 100</button>
          <button>+ 100</button>
          <button>+ 100</button>
        </div>

        <button>후원하기</button>
      </div>
    </div>
  );
};

export default Input;
