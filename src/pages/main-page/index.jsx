import { getDonate } from '@apis/donateApi';
import { useEffect, useState } from 'react';
import DonateCarousel from './sections/DonateCarousel';
import MyCredit from './components/MyCredit';
import useModal from '@hooks/useModal';
import CreditModal from './components/CreditModal';

export default function MainPage() {
  const [idolData, setIdolData] = useState();

  useEffect(() => {
    const fetchDonateData = async () => {
      const result = await getDonate();
      setIdolData(result.list);
    };

    fetchDonateData();
  }, []);


  const creditModal = useModal();

  return (
    <div className='flex h-screen w-screen flex-col items-center'>
      <MyCredit open={creditModal.open} />
      <DonateCarousel idolData={idolData} />
      <CreditModal creditModal={creditModal}></CreditModal>
    </div>
  )
}
