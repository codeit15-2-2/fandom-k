import Modal from '@components/common/Modal';

import IdolCardList from '@components/card/IdolCard';
import CreditForm from '@components/credit-form/CreditForm';

//상세페이지에서 useModal hook을 통해 호출

{
  /* <DonateModal
isOpen={isOpen}
close={closeModal}
donateId={123}
cardItem={{
  id: 3,
  title: '르세라핌 하이하이',
  location: '강남역 광고',
}}
credit={10000}
isDonate
/> */
}

const DonateModal = ({ isOpen, close, donateId, cardItem }) => {
  //크레딧 꺼내오는 로직 추가하기

  const handleDonate = () => {
    console.log('후원:', donateId);
  };

  return (
    <Modal isOpen={isOpen} onClose={close} title='후원하기'>
      <div className='flex flex-col'>
        <IdolCardList
          id={cardItem.id}
          src={cardItem.img}
          location={cardItem.location}
          title={cardItem.title}
          size='s'
        ></IdolCardList>

        <CreditForm isDonate onClick={handleDonate} credit={10000} />
      </div>
    </Modal>
  );
};

export default DonateModal;
