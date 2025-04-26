import Button from '@components/common/Button';
import useWindowSize from '@hooks/useWindowSize';

const FixedButton = ({ onClick, isLoading, selectedIdols }) => {
  const width = useWindowSize();

  const buttonSize =
    width < 1024
      ? 'h-[42px] w-[295px]  py-[9px]'
      : 'h-[43px] w-[477px]  py-[9px]';

  return (
    <div className='fixed bottom-0 z-990 flex h-[10rem] w-screen items-center justify-center bg-black'>
      <Button
        size='xl'
        color='pink'
        rounded
        onClick={onClick}
        disabled={selectedIdols.length === 0}
        isLoading={isLoading}
        className={buttonSize}
      >
        추가하기
      </Button>
    </div>
  );
};
export default FixedButton;
