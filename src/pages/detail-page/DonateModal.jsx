import Modal from '@components/common/Modal';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import IdolCardList from '@components/card/IdolCard';
import { useCreditForm } from '@hooks/useCreditForm';

const DonateModal = ({
  isOpen,
  close,
  donateId,
  cardItem,
  credit,
  isDonate,
}) => {
  const { input, error, errMsg, handleInputChange, handleReset } =
    useCreditForm(credit, isDonate);

  const handleDonate = () => {
    console.log('후원:', donateId);
    handleReset();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      title='후원하기'
      button={
        <Button
          btnText='후원하기'
          color='pink'
          onClick={handleDonate}
          disabled={input.trim() === ''}
        />
      }
    >
      <div className='flex flex-col'>
        <IdolCardList
          id={cardItem.id}
          src={cardItem.img}
          location={cardItem.location}
          title={cardItem.title}
          size='s'
        ></IdolCardList>
        <span className='content-text'>내 크레딧:{credit}</span>
        <Input
          value={input}
          placeholder='크레딧 입력'
          onChange={handleInputChange}
          isError={error}
          errMsg={errMsg}
        />
      </div>

      {/* <CreditForm isDonate onClick={handleDonate} credit={credit} /> */}
    </Modal>
  );
};

export default DonateModal;
