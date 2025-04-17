import Modal from '@components/common/Modal';
import useModal from '@hooks/useModal';

export default function LandingPage() {
  const { isOpen, open, close } = useModal();
  return (
    <div>
      Landing
      <button onClick={open}>모달 오픈</button>
      <Modal isOpen={isOpen} onClose={close}>
        동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세세
        동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세세
        동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세세
        동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세세
        동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세세
      </Modal>
    </div>
  );
}
