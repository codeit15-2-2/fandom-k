import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import DetailPage from '@pages/detail-page';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header />

      <DetailPage />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
