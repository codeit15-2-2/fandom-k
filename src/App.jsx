import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import { Outlet, useOutletContext } from 'react-router-dom';

export default function App() {
  useOutletContext()
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}