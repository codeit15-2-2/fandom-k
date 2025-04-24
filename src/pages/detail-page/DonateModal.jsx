import Modal from '@components/common/Modal';

import IdolCardList from '@components/card/IdolCard';
import CreditForm from '@components/credit-form/CreditForm';

//상세페이지에서 useModal hook을 통해 호출

//useModal hook을 사용하여 isOpen,closeModal을 불러온뒤

//후원하기 버튼이 눌리면 setIsOpen(true)와 아이돌카드에 대한 데이터와 api요청을 위한 후원ID값을 <DonateModal>에 props로전송

{
  /* <DonateModal
isOpen={isOpen}
close={closeModal}
donateId={123} //후원api를 위한 후원id
cardItem={{ //카드 요소 데이터
  id: 3,
  title: '르세라핌 하이하이',
  location: '강남역 광고',
}}

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
