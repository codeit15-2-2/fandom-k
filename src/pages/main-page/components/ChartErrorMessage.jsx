import Button from '@components/common/Button';

const ErrorMessage = ({ onRetry }) => {
  return (
    <div className='flex min-h-[50rem] w-full flex-col items-center justify-center py-10'>
      <div className='mb-4 text-xl font-bold text-red-500'>
        데이터를 불러오는데 실패했습니다
      </div>
      <p className='mb-6 text-gray-600'>
        잠시 후 다시 시도하거나 아래 버튼을 클릭해주세요.
      </p>
      <Button color='pink' size='m' btnType='button' onClick={onRetry}>
        다시 시도하기
      </Button>
    </div>
  );
};
export default ErrorMessage;
