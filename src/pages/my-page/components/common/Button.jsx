import Button from '@components/common/Button';

//하단에 fixed를 통해 고정될 버튼 컴포넌트

const FixedButton = ({ size, onClick, isLoading, selectedIds }) => {
  return (
    <div className='fixed bottom-[0rem] left-1/2 mt-10 flex -translate-x-1/2 flex-col items-center justify-center'>
      <Button
        size='xl'
        color='pink'
        rounded
        onClick={onClick}
        disabled={selectedIds?.length == 0}
        isLoading={isLoading}
      >
        추가하기
      </Button>
      {/* 버튼 밑에요소 가리기 */}
      <div className='h-[1rem] w-screen bg-black'></div>
    </div>
  );
};
export default FixedButton;
