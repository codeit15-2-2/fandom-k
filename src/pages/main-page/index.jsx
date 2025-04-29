import { getDonate } from '@apis/donateApi';
import { useEffect, useState } from 'react';
import { ChartProvider } from '@contexts/ChartContext';
import DonateCarousel from './sections/DonateCarousel';
import MyCredit from './components/MyCredit';
import useModal from '@hooks/useModal';
import CreditModal from './components/CreditModal';
import MonthlyChartSection from './sections/MonthlyChartSection';
import VoteModal from './components/VoteModal';
import useCredit from '@hooks/useCredit';

export default function MainPage() {
  const [idolData, setIdolData] = useState();
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가
  const { credit, handleChargeCredit } = useCredit();

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

  useEffect(() => {
    fetchDonateData();
  }, []);

  const creditModal = useModal();
  const voteModal = useModal();

  return (
    <div className='mx-auto flex min-h-screen w-screen max-w-[120rem] flex-col justify-between px-20'>
      <div>
        <DonateCarousel
          idolData={idolData}
          isLoading={isLoading}
          fetchDonateData={fetchDonateData}
        />
        <ChartProvider>
          <MonthlyChartSection open={voteModal.open} />
          <VoteModal voteModal={voteModal}></VoteModal>
        </ChartProvider>
      </div>
      <CreditModal
        creditModal={creditModal}
        credit={credit}
        handleChargeCredit={handleChargeCredit}
      ></CreditModal>
    </div>
  );
}
