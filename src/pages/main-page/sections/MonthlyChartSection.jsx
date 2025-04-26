import MonthlyChartHeader from '../components/MonthlyChartHeader';
import MonthlyChartTabs from '../components/MonthlyChartTabs';

const MonthlyChartSection = () => {
  return (
    <div className='flex w-full max-w-[120rem] flex-col'>
      <MonthlyChartHeader />
      <MonthlyChartTabs />
    </div>
  );
};

export default MonthlyChartSection;
