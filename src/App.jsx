import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
