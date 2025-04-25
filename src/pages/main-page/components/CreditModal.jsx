import Modal from '@components/common/Modal';
import CreditForm from '@components/credit-form/CreditForm';

const CreditModal = ({ creditModal }) => {
  return (
    <>
      <Modal
        isOpen={creditModal.isOpen}
        onClose={creditModal.close}
        title='크레딧 충전하기'
      >
        <CreditForm isDonate credit='0' />
      </Modal>
    </>
  );
};

export default CreditModal;
