import MonthlyChartHeader from '../components/MonthlyChartHeader';
import MonthlyChartTabs from '../components/MonthlyChartTabs';

const MonthlyChartSection = ({ open }) => {
  return (
    <>
      <MonthlyChartHeader open={open} />
      <MonthlyChartTabs />
    </>
  );
};

export default MonthlyChartSection;
