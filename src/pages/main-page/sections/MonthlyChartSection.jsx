import MonthlyChartHeader from '../components/MonthlyChartHeader';
import MonthlyChartTabs from '../components/MonthlyChartTabs';

const MonthlyChartSection = ({ open }) => {
  return (
    <div className='flex w-full max-w-[120rem] flex-col'>
     <MonthlyChartHeader open={open} />
      <MonthlyChartTabs />
    </div>
  );
};

export default MonthlyChartSection;
