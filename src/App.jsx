import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import { Outlet } from 'react-router-dom';
import { CreditProvider } from '@contexts/creditContext';

export default function App() {
  return (
    <CreditProvider>
      <Header />
      <main>
        <Outlet />
      </main>
    </CreditProvider>
  );
}
