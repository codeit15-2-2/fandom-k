import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import { Outlet } from 'react-router-dom';

const GlobalLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default GlobalLayout;
