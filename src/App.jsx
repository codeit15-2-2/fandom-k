import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import Input from '@components/common/Input';
import { Outlet } from 'react-router-dom';

export default function App() {
  const handleTestClick = (inputValue) => {
    console.log(inputValue);
  };
  return (
    <div className='h-800 w-[295px] items-center justify-center bg-black'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      <Input
        isErr={true}
        ErrMsg='에러임'
        credit={500000}
        isDonate
        onClick={handleTestClick}
      />
    </div>
  );
}
