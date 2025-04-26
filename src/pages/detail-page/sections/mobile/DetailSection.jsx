import DetailContent from '@pages/detail-page/components/DetailContent';
import DetailTitle from '@pages/detail-page/components/DetailTitle';

const DetailSection = () => {
  return (
    <div className='relative flex h-fit w-screen justify-center bg-black'>
      <div className='mt-10 mb-40 w-[90vw]'>
        <DetailTitle
          name='에스파 카리나'
          title='1주년 기념 팝업 카페'
          location='홍대 AK 플라자'
          size='s'
        />

        <DetailContent />
      </div>
    </div>
  );
};

export default DetailSection;
