import Button from '@components/common/Button';
import IconChart from '@assets/icons/icon_chart';

const MonthlyChartHeader = () => {
  return (
    <div className='mt-4 mb-8 flex items-baseline justify-between md:max-w-5/8'>
      <h1 className='title-text text-white'>이달의 차트</h1>
      <Button
        className='mt-20 mb-4' //추가 클래스네임
        color='pink'
        size='xs'
        btnType='button'
        onClick={() => {
          console.log('모달');
        }}
      >
        <IconChart />
        <span className='ml-1'>차트 투표하기</span>
      </Button>
    </div>
  );
};

export default MonthlyChartHeader;
