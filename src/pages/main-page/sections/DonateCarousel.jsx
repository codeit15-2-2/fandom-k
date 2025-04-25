import IdolCardList from '@components/card/IdolCard';
import Button from '@components/common/Button';
import Carousel from '@components/common/Carousel';
import { useNavigate } from 'react-router-dom';

const DonateCarousel = ({ idolData }) => {
  const navigate = useNavigate();
  return (
    <div className='w-full p-20'>
      <h1 className='title-text text-white'>후원을 기다리는 조공</h1>
      <Carousel
        data={idolData}
        RenderComponent={(props) => (
          <IdolCardList
            {...props}
            onClick={() =>
              navigate(`/main/${props.id}`, { state: { item: props.data } })
            }
          />
        )}
        button={<Button color='pink'>후원하기</Button>}
      />
    </div>
  );
};

export default DonateCarousel;
