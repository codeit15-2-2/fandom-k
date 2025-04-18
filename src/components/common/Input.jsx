import { cn } from '@utils/cn';

const Input = ({ value, onChange, errMsg, isError, placeholder, icon }) => {
  return (
    <div className='relative flex flex-col'>
      <div className='relative mt-2.5'>
        <input
          type='text'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            'sub-title-text bg-navy w-full rounded-xl border-2 px-4 py-4 pr-12 text-white transition-all',
            isError ? 'border-red-500 focus:outline-0' : 'border-white',
          )}
        />
        {icon && icon}
      </div>
      {isError && <p className='content-text mt-2.5 text-red-500'>{errMsg}</p>}
    </div>
  );
};

export default Input;
