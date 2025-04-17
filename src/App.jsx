import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import Button from '@components/common/Button';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <button onClick={handleLoad}>눌러</button>
      <Button btnText='후원하기' isLoading={isLoading} />
    </div>
  );
}
