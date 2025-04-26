import { getDonate } from '@apis/donateApi';
import { useEffect, useState } from 'react';
import DonateCarousel from './sections/DonateCarousel';
import MyCredit from './components/MyCredit';
import useModal from '@hooks/useModal';
import CreditModal from './components/CreditModal';
import useCredit from '@hooks/useCredit';
import MonthlyChartSection from './sections/MonthlyChartSection';

export default function MainPage() {
  const [idolData, setIdolData] = useState();
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가
  const { credit, handleChargeCredit } = useCredit();

  useEffect(() => {
    const fetchDonateData = async () => {
      setIsLoading(true); // 데이터 로딩 시작
      try {
        const result = await getDonate();
        setIdolData(result.list);
      } catch (error) {
        console.error('Failed to fetch donate data:', error);
      } finally {
        setIsLoading(false); // 데이터 로딩 완료 (성공 또는 실패 모두)
      }
    };

    fetchDonateData();
  }, []);

  const creditModal = useModal();

  return (
    <div className='mx-auto flex h-screen w-screen max-w-[120rem] flex-col items-center px-20'>
      <MyCredit open={creditModal.open} credit={credit} />
      <DonateCarousel idolData={idolData} isLoading={isLoading} />
      <CreditModal
        creditModal={creditModal}
        credit={credit}
        handleChargeCredit={handleChargeCredit}
      ></CreditModal>
      <MonthlyChartSection />
    </div>
  );
}
