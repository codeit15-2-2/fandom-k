import Modal from '@components/common/Modal';
import CreditForm from '@components/credit-form/CreditForm';

const CreditModal = ({ creditModal, credit, handleChargeCredit }) => {
  const handleChargeAndClose = (amount) => {
    handleChargeCredit(amount); // 크레딧 충전
    creditModal.close(); // 모달 닫기
  };
  return (
    <Modal
      isOpen={creditModal.isOpen}
      onClose={creditModal.close}
      title='크레딧 충전하기'
    >
      <CreditForm credit={credit} onClick={handleChargeAndClose} />
    </Modal>
  );
};

export default CreditModal;
