import { getDonate } from '@apis/donateApi';
import { useEffect, useState } from 'react';

export default function MainPage() {
  const [idolData, setIdolData] = useState();

  useEffect(() => {
    const fetchDonateData = async () => {
      const result = await getDonate();
      setIdolData(result.list);
    };

    fetchDonateData();
  }, []);
  return <div>main</div>;
}
