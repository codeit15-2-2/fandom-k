import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import Input from '@components/common/Input';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className='h-800 w-full items-center justify-center bg-black'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      <div className='absolute inset-0 flex items-center justify-center'>
        <Input isErr={true} ErrMsg='에러임' />
      </div>
    </div>
  );
}
