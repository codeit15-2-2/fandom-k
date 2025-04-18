import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import CreditForm from '@components/common/CreditForm';
import Input from '@components/common/Input';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className='relative h-800 w-[800px] items-center justify-center bg-black'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      <CreditForm />

      <Input />
    </div>
  );
}
