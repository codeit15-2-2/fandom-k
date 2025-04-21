import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import { useState } from 'react';
import FavoriteList from './components/FavoriteList';
import AddFavorite from './components/AddFavorite';

export default function MyPage() {
  const [myFavorites, setMyFavorites] = useState([]);
  const [allIdols, setAllIdols] = useState([
    { id: 1, name: '리사', group: '블랙핑크' },
    { id: 2, name: '로제', group: '블랙핑크' },
    { id: 3, name: '예지', group: '있지' },
    { id: 4, name: '리아', group: '있지' },
    { id: 5, name: '윈터', group: '에스파' },
    { id: 6, name: '은석', group: '라이즈' },
    { id: 7, name: '성찬', group: '라이즈' },
    { id: 8, name: '앤톤', group: '라이즈' },
    { id: 9, name: '쇼타로', group: '라이즈' },
  ]);
  return (
    <div className='h-screen w-full bg-black'>
      <Header />
      <FavoriteList
        favorite={myFavorites}
        setIdol={setAllIdols}
        setFavorite={setMyFavorites}
      />
      <AddFavorite
        idol={allIdols}
        setIdol={setAllIdols}
        setFavorite={setMyFavorites}
      />
      <Footer />
    </div>
  );
}
