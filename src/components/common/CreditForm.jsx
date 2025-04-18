import { useCreditForm } from '@hooks/useCreditForm';
import Input from './Input';
import Controller from './Controller';
import CreditIcon from '@assets/icons/creditIcon';

const CreditForm = ({ isDonate = false, onSubmit }) => {
  const {
    credit,
    setCredit,
    input,
    error,
    errMsg,
    handleInputChange,
    handleAddAmount,
    handleAddAll,
    reset,
  } = useCreditForm(1000, isDonate);

  const handleClick = () => {
    if (error || input === '') return;

    const inputValue = Number(input);
    onSubmit?.(inputValue);
    if (!isDonate) {
      setCredit((prev) => prev + inputValue);
    } else {
      setCredit((prev) => prev - inputValue);
    }
    reset();
  };

  return (
    <div className='w-full max-w-[429px] text-left text-white'>
      <p className='sub-content-text'>내 크레딧: {credit.toLocaleString()}</p>
      <Input
        value={input}
        placeholder='크레딧 입력'
        onChange={handleInputChange}
        isError={error}
        errMsg={errMsg}
        icon={
          <CreditIcon className='absolute top-1/2 right-8 h-10 w-10 -translate-y-1/2 object-contain' />
        }
      />
      <Controller
        onAdd={handleAddAmount}
        onAddAll={handleAddAll}
        isDonate={isDonate}
      />
      <button
        onClick={handleClick}
        disabled={error || input === ''}
        className='bg-gradient-brand cursor-pointer px-4 py-4'
      >
        {isDonate ? '후원하기' : '충전하기'}
      </button>
    </div>
  );
};

export default CreditForm;
