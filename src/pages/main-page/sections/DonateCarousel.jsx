import IdolCardList from '@components/card/IdolCard';
import Button from '@components/common/Button';
import Carousel from '@components/common/Carousel';

const DonateCarousel = ({ idolData }) => {
  return (
    <div className='p-20'>
      <h1 className='title-text text-white'>후원을 기다리는 조공</h1>
      <Carousel
        data={idolData}
        RenderComponent={IdolCardList}
        button={<Button color='pink'>후원하기</Button>}
      />
    </div>
  );
};

export default DonateCarousel;
