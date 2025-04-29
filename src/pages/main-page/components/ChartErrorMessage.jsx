import Button from '@components/common/Button';

const ErrorMessage = ({ onRetry }) => {
  return (
    <div className='flex min-h-[50rem] w-full flex-col items-center justify-center gap-5 py-10'>
      <div className='text-brand-2 mb-4 text-3xl font-bold'>
        데이터를 불러오는데 실패했습니다
      </div>
      <p className='mb-6 text-2xl text-gray-50'>
        잠시 후 다시 시도하거나 아래 버튼을 클릭해주세요.
      </p>
      <Button color='gray' size='s' btnType='button' onClick={onRetry}>
        다시 시도하기
      </Button>
    </div>
  );
};
export default ErrorMessage;
