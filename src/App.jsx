import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import Toast from '@components/common/Toast';
import { Outlet } from 'react-router-dom';
import { CreditProvider } from '@contexts/CreditContext';
import { ToastProvider } from '@contexts/ToastContext';

export default function App() {
  return (
    <CreditProvider>
      <ToastProvider>
        <Header />
        <main>
          <Outlet />
        </main>

        <Toast />
      </ToastProvider>
    </CreditProvider>
  );
}
