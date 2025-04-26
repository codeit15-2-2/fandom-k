import { getDonate } from '@apis/donateApi';
import { useEffect, useState } from 'react';
import DonateCarousel from './sections/DonateCarousel';
import MyCredit from './components/MyCredit';
import useModal from '@hooks/useModal';
import CreditModal from './components/CreditModal';
import useCredit from '@hooks/useCredit';

export default function MainPage() {
  const [idolData, setIdolData] = useState();
  const { credit, handleChargeCredit } = useCredit();

  useEffect(() => {
    const fetchDonateData = async () => {
      const result = await getDonate();
      setIdolData(result.list);
    };

    fetchDonateData();
  }, []);

  const creditModal = useModal();

  return (
    <div className='mx-auto flex h-screen w-screen max-w-[120rem] flex-col items-center p-20'>
      <MyCredit open={creditModal.open} credit={credit} />
      <DonateCarousel idolData={idolData} />
      <CreditModal
        creditModal={creditModal}
        credit={credit}
        handleChargeCredit={handleChargeCredit}
      ></CreditModal>
    </div>
  );
}
