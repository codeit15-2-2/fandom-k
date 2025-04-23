import IdolCardList from '@components/card/IdolCard';
import Button from '@components/common/Button';
import Carousel from '@components/common/Carousel';

const DonateCarousel = ({ idolData }) => {
  return (
    <>
      <h1>후원을 기다리는 조공</h1>
      <Carousel
        data={idolData}
        RenderComponent={IdolCardList}
        button={<Button btnText='후원하기' />}
      />
    </>
  );
};

export default DonateCarousel;
