import Modal from '@components/common/Modal';

export default function LandingPage() {
  const { isOpen, open, close } = useModal();
  return (
    <div>
      Landing
      <button>모달 오픈</button>
      <Modal isOpen={true}>모달</Modal>
    </div>
  );
}
