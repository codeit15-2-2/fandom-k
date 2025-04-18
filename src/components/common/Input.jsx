import { cn } from '@utils/cn';
/**
 * 
 *
 * @component
 * 
 * @param {string} value - input창 value값
 * @param {(value: string) => void} onChange - 입력 값이 변경될 때 호출될 함수
 * @param {string} [errMsg] - 에러 상태일시 메세지
 * @param {boolean} [isError=false] - 에러 상태인지 여부
 * @param {string} [placeholder] - placeholder설정
 * @param {React.ReactNode} [icon] - input창 안에 표시할 아이콘
 *
 * @returns {JSX.Element} 
 *
 * @example
 * <Input
 *   value={id}
 *   onChange={(e) => setUsername(e.target.value)}
 *   placeholder="id입력"
 *   isError={error}
 *   errMsg="id입력안함"
 *   icon={<AvatarIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" />}
 * />
 */


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
