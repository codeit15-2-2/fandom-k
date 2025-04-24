import { getDonate } from '@apis/donateApi';
import { useEffect, useState } from 'react';
import DonateCarousel from './sections/DonateCarousel';
import { IdolDate } from '@mocks/Idoldata';

// const data = IdolDate();

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
    </div>
  );
}
