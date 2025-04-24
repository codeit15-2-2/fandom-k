import Jewel from '@assets/icons/icon_jewel';
import Modal from '@components/common/Modal';
import useModal from '@hooks/useModal';

const MyCredit = ({ credit }) => {
  const { isOpen, open, close } = useModal();
  return (
    <>
      <div className='flex h-[8.5rem] w-full max-w-5/8 items-center justify-between rounded-xl border border-white bg-black px-10 sm:h-[13rem]'>
        <div className='flex flex-col justify-center'>
          <p className='caption-text text-white/60 sm:text-[1.6rem]'>
            내 크레딧
          </p>
          <p className='flex items-center text-[2rem] font-bold text-white sm:text-[2.4rem]'>
            <Jewel />
            {credit || '0'}
          </p>
        </div>
        <div className='flex items-center'>
          <button
            onClick={open}
            className='caption-text font-bold text-[#F96D69] sm:text-[1.6rem]'
          >
            충전하기
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={close}>
        임시 모달
      </Modal>
    </>
  );
};

export default MyCredit;
