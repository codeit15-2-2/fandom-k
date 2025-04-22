import { getIdols } from '@apis/idolsApi';
import IdolCardList from '@components/card/IdolCard';
import CardImg from '@components/common/CardImg';
import Carousel from '@components/common/Carousel';

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
  {
    id: 17,
    name: '지연',
    img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ7VhtX7lpCH-hf4qOD-SZm3h1Oa2PiPkxzupBr4CtJZwNnB3jgSn2tPg5vZkwSJv46TloTo9nEUqatww8',
  },
  {
    id: 18,
    name: '철수',
    img: 'https://i.namu.wiki/i/rhZBEv_dOLNzEfepOM5dYZwZ98KOl-SoLNzIQGAXZepDEZiMhQNSbenYlSpiNbFDJvwsj72voNl-qNMakdbv2w.gif',
  },
  {
    id: 19,
    name: '철수3',
    img: 'https://i.namu.wiki/i/pKp6bM6ovVkqzTlwj5lkWjCfyLCITAU3bP5chwJc7TcsgEh9dJxNGbAUfnTTlFsjAzmIG586bMk56Oa5OgHEZw.webp',
  },
  {
    id: 20,
    name: '철수4',
    img: 'https://img.etnews.com/news/article/2024/05/08/news-p.v1.20240508.d7c0641298c54fa8ab27e31c565f0e2f_Z1.jpg',
  },
  {
    id: 21,
    name: '철수5',
    img: 'https://img.sportsworldi.com/content/image/2024/09/05/20240905504396.jpg',
  },
  {
    id: 22,
    name: '철수6',
    img: 'https://newneek.co/_next/image?url=https%3A%2F%2Fd2phebdq64jyfk.cloudfront.net%2Fmedia%2Farticle%2F24320d29846c4d4fb08a705c260da7b6.jpg&w=1920&q=75',
  },
  {
    id: 23,
    name: '철수7',
    img: 'https://img.khan.co.kr/news/2024/03/06/news-p.v1.20240306.36d040a925cd45deb5d87d7f2a0771fb_P1.jpg',
  },
  {
    id: 24,
    name: '철수8',
    img: 'https://img.allurekorea.com/allure/2022/04/style_62629af216591-927x1200.jpg',
  },
  {
    id: 25,
    name: '철수9',
    img: 'https://img.sportsworldi.com/content/image/2024/04/09/20240409508298.jpg',
  },
  {
    id: 26,
    name: '철수10',
    img: 'https://i.namu.wiki/i/VY9D_G7-yU9OyMOM_gzZMpKGkwZOBmJ1E5j43Dr-7DKk5OAJ1l_vX9M8pZkctaQVmSU78hFhv7wH12zMS7KZSA.webp',
  },
  {
    id: 27,
    name: '철수11',
    img: 'https://cf.asiaartistawards.com/news/21/2024/10/2024102318243824933_1.jpg',
  },
  {
    id: 28,
    name: '철수12',
    img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ7VhtX7lpCH-hf4qOD-SZm3h1Oa2PiPkxzupBr4CtJZwNnB3jgSn2tPg5vZkwSJv46TloTo9nEUqatww8',
  },
  {
    id: 29,
    name: '철수13',
    img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ7VhtX7lpCH-hf4qOD-SZm3h1Oa2PiPkxzupBr4CtJZwNnB3jgSn2tPg5vZkwSJv46TloTo9nEUqatww8',
  },
  {
    id: 30,
    name: '철수14',
    img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ7VhtX7lpCH-hf4qOD-SZm3h1Oa2PiPkxzupBr4CtJZwNnB3jgSn2tPg5vZkwSJv46TloTo9nEUqatww8',
  },
  {
    id: 31,
    name: '철수15',
    img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ7VhtX7lpCH-hf4qOD-SZm3h1Oa2PiPkxzupBr4CtJZwNnB3jgSn2tPg5vZkwSJv46TloTo9nEUqatww8',
  },
  {
    id: 32,
    name: '철수16',
    img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ7VhtX7lpCH-hf4qOD-SZm3h1Oa2PiPkxzupBr4CtJZwNnB3jgSn2tPg5vZkwSJv46TloTo9nEUqatww8',
  },
];

const getIdol = await getIdols();
console.log('dddd', getIdol.list);

export default function MainPage() {
  return (
    <div>
      Main
      {
        <Carousel
          data={getIdol.list}
          RenderComponent={IdolCardList}
          buttonProps={{ btnText: '후원하기' }}
        />
      }
      {/* <IdolCardList
        id={data[0].id}
        src={data[0].img}
        location='지구 어딘가'
        title='여신 카리나'
        daysLeft=''
        credit=''
      ></IdolCardList> */}
    </div>
  );
}
