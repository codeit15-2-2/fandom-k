import useModal from '@hooks/useModal';
import MyCredit from './components/MyCredit';
import Modal from '@components/common/Modal';

export default function MainPage() {
  const creditModal = useModal();
  const chartModal = useModal();

  return (
    <>
      <div>
        Main
        <MyCredit credit='0' onClick={creditModal.open} />
        <button className='text-white' onClick={chartModal.open}>
          차트열기
        </button>
      </div>
      <Modal
        isOpen={chartModal.isOpen}
        onClose={chartModal.close}
        title='아이돌 차트'
      ></Modal>
      <Modal
        isOpen={creditModal.isOpen}
        onClose={creditModal.close}
        title='크레딧 충전하기'
      ></Modal>
    </>
  );
}
