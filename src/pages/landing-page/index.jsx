import Modal from '@components/common/Modal';
import useModal from '@hooks/useModal';

export default function LandingPage() {
  const { isOpen, open, close } = useModal();
  return (
    <div>
      Landing
      <button onClick={open}>모달 오픈</button>
      <Modal isOpen={isOpen} onClose={close}>
        모달은 그러하다. 재미있고 재미있지 않고 아무렇지도 않기도 하고 크기에
        따라 달라진다면 과연 크기는 얼마나가 되어야할까
      </Modal>
    </div>
  );
}
