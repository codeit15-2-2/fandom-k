import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import MyPage from '@pages/my-page';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <MyPage />
    </>
  );
}
