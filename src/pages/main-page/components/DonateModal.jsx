import Modal from '@components/common/Modal';
import Button from '@components/common/Button';

const DonateModal = ({ isOpen, close }) => {
  return (
    <Modal title='후원하기'>
      <Button btnText='후원하기' color='pink' />
    </Modal>
  );
};

export default DonateModal;
