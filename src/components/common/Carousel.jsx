import { motion } from 'motion/react';
import ChevronRight from '@assets/icons/icon_chevron-right';
import ChevronLeft from '@assets/icons/icon_chevron-left';
import { useCarousel } from '@hooks/useCarousel';

const data = [
  {
    id: 1,
    name: '지연',
    img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ7VhtX7lpCH-hf4qOD-SZm3h1Oa2PiPkxzupBr4CtJZwNnB3jgSn2tPg5vZkwSJv46TloTo9nEUqatww8',
  },
  {
    id: 2,
    name: '철수',
    img: 'https://i.namu.wiki/i/rhZBEv_dOLNzEfepOM5dYZwZ98KOl-SoLNzIQGAXZepDEZiMhQNSbenYlSpiNbFDJvwsj72voNl-qNMakdbv2w.gif',
  },
  {
    id: 3,
    name: '철수3',
    img: 'https://i.namu.wiki/i/pKp6bM6ovVkqzTlwj5lkWjCfyLCITAU3bP5chwJc7TcsgEh9dJxNGbAUfnTTlFsjAzmIG586bMk56Oa5OgHEZw.webp',
  },
  {
    id: 4,
    name: '철수4',
    img: 'https://img.etnews.com/news/article/2024/05/08/news-p.v1.20240508.d7c0641298c54fa8ab27e31c565f0e2f_Z1.jpg',
  },
  {
    id: 5,
    name: '철수5',
    img: 'https://img.sportsworldi.com/content/image/2024/09/05/20240905504396.jpg',
  },
  {
    id: 6,
    name: '철수6',
    img: 'https://newneek.co/_next/image?url=https%3A%2F%2Fd2phebdq64jyfk.cloudfront.net%2Fmedia%2Farticle%2F24320d29846c4d4fb08a705c260da7b6.jpg&w=1920&q=75',
  },
  {
    id: 7,
    name: '철수7',
    img: 'https://img.khan.co.kr/news/2024/03/06/news-p.v1.20240306.36d040a925cd45deb5d87d7f2a0771fb_P1.jpg',
  },
  {
    id: 8,
    name: '철수8',
    img: 'https://img.allurekorea.com/allure/2022/04/style_62629af216591-927x1200.jpg',
  },
  {
    id: 9,
    name: '철수9',
    img: 'https://img.sportsworldi.com/content/image/2024/04/09/20240409508298.jpg',
  },
  {
    id: 10,
    name: '철수10',
    img: 'https://i.namu.wiki/i/VY9D_G7-yU9OyMOM_gzZMpKGkwZOBmJ1E5j43Dr-7DKk5OAJ1l_vX9M8pZkctaQVmSU78hFhv7wH12zMS7KZSA.webp',
  },
  {
    id: 11,
    name: '철수11',
    img: 'https://cf.asiaartistawards.com/news/21/2024/10/2024102318243824933_1.jpg',
  },
  {
    id: 12,
    name: '철수12',
    img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ7VhtX7lpCH-hf4qOD-SZm3h1Oa2PiPkxzupBr4CtJZwNnB3jgSn2tPg5vZkwSJv46TloTo9nEUqatww8',
  },
  {
    id: 13,
    name: '철수13',
    img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ7VhtX7lpCH-hf4qOD-SZm3h1Oa2PiPkxzupBr4CtJZwNnB3jgSn2tPg5vZkwSJv46TloTo9nEUqatww8',
  },
  {
    id: 14,
    name: '철수14',
    img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ7VhtX7lpCH-hf4qOD-SZm3h1Oa2PiPkxzupBr4CtJZwNnB3jgSn2tPg5vZkwSJv46TloTo9nEUqatww8',
  },
  {
    id: 15,
    name: '철수15',
    img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ7VhtX7lpCH-hf4qOD-SZm3h1Oa2PiPkxzupBr4CtJZwNnB3jgSn2tPg5vZkwSJv46TloTo9nEUqatww8',
  },
  {
    id: 16,
    name: '철수16',
    img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ7VhtX7lpCH-hf4qOD-SZm3h1Oa2PiPkxzupBr4CtJZwNnB3jgSn2tPg5vZkwSJv46TloTo9nEUqatww8',
  },
];
const Carousel = ({ /*data*/ renderComponent }) => {
  // 화면에 보여질 카드 개수 (직접 설정)
  const offset = 4;

  // 실제 보여줄 데이터 (원본 + 앞뒤 복제본)
  const extendedData = [...data];
  const {
    currentIndex,
    width,
    carouselRef,
    isTransitioning,
    nextSlide,
    prevSlide,
  } = useCarousel({ totalDataLength: data.length, offset });

  return (
    <div className='relative overflow-hidden p-10'>
      <motion.div
        ref={carouselRef}
        className='flex gap-4'
        animate={{
          x: currentIndex * -width,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          duration: 0.5,
        }}
      >
        {extendedData.map((item, index) => (
          <motion.div
            key={`${item.id}-${index}`}
            className='min-w-[calc(25%-12px)]'
            initial={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className='relative overflow-hidden rounded-lg'>
              <img
                src={item.img}
                alt={item.name}
                className='h-[300px] w-full object-cover'
              />
              <div className='absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-4'>
                <h3 className='text-lg font-bold text-white'>{item.name}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <button
        className='absolute top-1/2 left-2 z-10 -translate-y-1/2 transform rounded-full bg-gray-800/60 p-2 text-white'
        onClick={prevSlide}
        disabled={isTransitioning}
      >
        <ChevronLeft />
      </button>
      <button
        className='absolute top-1/2 right-2 z-10 -translate-y-1/2 transform rounded-full bg-gray-800/60 p-2 text-white'
        onClick={nextSlide}
        disabled={isTransitioning}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
