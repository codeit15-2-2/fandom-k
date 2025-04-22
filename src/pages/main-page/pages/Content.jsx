import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getCharts } from '@apis/chartsApi';
import IdolListTabContent from '../components/Idol-list-tab-content';
import IdolList from '@components/vote/IdolList';

export default function Content() {
  const [chartDataList, setChartDataList] = useState([]);
  const location = useLocation();
  const gender = location.pathname.includes('female') ? 'female' : 'male';

  useEffect(() => {
    const fetchIdolData = async () => {
      const res = await getCharts({ gender });
      setChartDataList(res.idols);
    };

    fetchIdolData();
  }, [gender]);

  return (
    <>
      {/*props로 아이돌 데이터와 IdolList 컴포넌트를 넘겨 주어야 합니다. */}
      <IdolListTabContent idolData={chartDataList} IdolList={IdolList} />
    </>
  );
}
