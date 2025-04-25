import Modal from '@components/common/Modal';
import { ContributeDonation } from '@apis/ContributeApi';
import IdolCardList from '@components/card/IdolCard';
import CreditForm from '@components/credit-form/CreditForm';
import useCredit from '@hooks/useCredit';

/**
 * DonateModal 컴포넌트
 *
 * @component
 * @example
 * ```
 *
 * 사용예시
 *
 * export default function App() {
 *   const { isOpen, open, close } = useModal();
 *
 *   return (
 *     <div>
 *       <Header />
 *       <main>
 *         <Outlet />
 *       </main>
 *       <Footer />
 *
 *       <Button onClick={open}>후원하기</Button>
 *
 *       <DonateModal
 *         isOpen={isOpen}
 *         close={close}
 *         donateId={123}
 *         cardItem={{
 *           id: 3,
 *           title: '르세라핌 하이하이',
 *           location: '강남역 광고',
 *           img: '~~~~~~~~~',
 *         }}
 *       />
 *     </div>
 *   );
 * }
 * ```
 *
 *
 * ```json
 * {
 *   "id": 759, //후원ID -> 필요
 *   "idolId": 5156, // -> 필요
 *   "title": "윈터 생일 파티", //필요
 *   "subtitle": "동대문 역", //필요
 *   "targetDonation": 1000000,
 *   "receivedDonations": 0,
 *   "createdAt": "2025-04-24T08:55:43.882Z",
 *   "deadline": "2025-06-30T23:59:59.000Z",
 *   "status": true,
 *   "idol": {
 *     "id": 5156,
 *     "name": "윈터",
 *     "gender": "female",
 *     "group": "aespa",
 *     "profilePicture": "https:/inter.jpg", //필요
 *     "totalVotes": 0
 *   }
 * }
 * ```
 *   후원ID , title, subtitle , profilePricture을 cardItem으로 합쳐서 보내줄수있다면 그렇게 보내주시면 됩니다.
 *
 *   그럼 DonateModal컴포넌트에서는
 *
 *  cardItem.donateId
 *  cardItem.title
 *  cardItem.subtitle
 *  cardItem.profilePicture
 *
 * 이렇게 불러올 예정입니다
 *
 *
 *
 *
 *
 *
 */

const DonateModal = ({ isOpen, close, donateId, cardItem }) => {
  const { credit, handleDonateCredit } = useCredit();

  const donateCredit = async (amount) => {
    try {
      await ContributeDonation(donateId, { amount });

      handleDonateCredit(amount);

      close();
    } catch (error) {
      console.error('후원 중 에러발생:', error);
      alert(error.message || '후원실패');
    }
  };

  const handleDonate = (amount) => {
    donateCredit(amount);
  };

  return (
    <Modal isOpen={isOpen} onClose={close} title='후원하기'>
      <div className='flex flex-col gap-4'>
        <IdolCardList
          id={cardItem.id}
          src={cardItem.profilePicture}
          location={cardItem.subtitle}
          title={cardItem.title}
          size='m'
        />

        <CreditForm isDonate onClick={handleDonate} credit={credit} />
      </div>
    </Modal>
  );
};

export default DonateModal;
