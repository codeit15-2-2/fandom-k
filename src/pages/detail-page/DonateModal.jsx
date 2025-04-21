import Modal from '@components/common/Modal';
import CardImg from '@components/common/CardImg';
import Button from '@components/common/Button';
import CreditForm from '@components/credit-form/CreditForm';

const DonateModal = ({ isOpen, close, donateId, cardItem }) => {
  const handleDonate = () => {
    console.log('후원:', donateId);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      title='후원하기'
      button={<Button btnText='후원하기' color='pink' onClick={handleDonate} />}
    >
      <CardImg src={cardItem.img} title={cardItem.title}>
        <div className='absolute bottom-[1rem] left-1/2 z-10 -translate-x-1/2'></div>
      </CardImg>

      <CreditForm isDonate onClick={handleDonate} credit={10000} />
    </Modal>
  );
};

export default DonateModal;
