import Button from '@components/common/Button';
import useDeviceSize from '@hooks/useDeviceSize';

//하단 sticky 버튼

const FixedButton = ({ onClick, isLoading, selectedIdols }) => {
  const { isDesktop } = useDeviceSize();
  const buttonSize = isDesktop
    ? 'h-[43px] w-[477px]  py-[9px]'
    : 'h-[42px] w-[295px]  py-[9px]';

  return (
    <div className='sticky bottom-0 z-990 flex h-[15rem] w-full items-center justify-center bg-gradient-to-b from-transparent to-black'>
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
