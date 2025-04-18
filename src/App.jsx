import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import CreditForm from '@components/common/CreditForm';
import Input from '@components/common/Input';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

export default function App() {

  //ChargeCreditMordal컴포넌트라고 가정
  const [credit, setCredit] = useState(10000); //로컬스토리지에서 꺼내왔다 가정


  //예시 충전 메소드
  const handleCharge = (inputValue) => {
    console.log(inputValue);
    setCredit(credit + inputValue);//로컬스토리지에 적용했다고 가정
  };

  return (
    <div className='relative h-800 w-[800px] items-center justify-center bg-black'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      <CreditForm onSubmit={handleCharge} credit={credit} />

      <Input />
    </div>
  );
}
