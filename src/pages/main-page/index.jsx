
import { getDonate } from '@apis/donateApi';
import { useEffect, useState } from 'react';
import DonateCarousel from './sections/DonateCarousel';
import IdolListTab from './components/Idol-list-tab';


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
    <div>
      Main
      <DonateCarousel idolData={idolData} />
      <IdolListTab />
    </div>
  );
}
