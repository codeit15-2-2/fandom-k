import { getDonate } from '@apis/donateApi';
import { useEffect, useState } from 'react';
import DonateCarousel from './sections/DonateCarousel';
import MyCredit from './components/MyCredit';

export default function MainPage() {
  const [idolData, setIdolData] = useState();

  useEffect(() => {
    const fetchDonateData = async () => {
      const result = await getDonate();
      setIdolData(result.list);
    };

    fetchDonateData();
  }, []);
  return (
    <div className='flex h-screen w-screen flex-col items-center'>
      <MyCredit />
      <DonateCarousel idolData={idolData} />
    </div>
  );
}
