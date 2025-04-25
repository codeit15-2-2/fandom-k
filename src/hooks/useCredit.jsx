import { useState, useEffect } from 'react';

const CREDIT_KEY = 'credit';

const useCredit = () => {
  const [credit, setCredit] = useState(200000);


  useEffect(() => {
    const storedCredit = localStorage.getItem(CREDIT_KEY);
    if (storedCredit !== null) {
      setCredit(Number(storedCredit)); //가져올땐 Number로 치환해서 가져옴
    }
  }, []);

  //credit state가 변경될때마다 localStorage에도 적용
  useEffect(() => {
    localStorage.setItem(CREDIT_KEY, String(credit)); //LocalStorage에는 문자열만 저장가능해서 String형태로 저장
  }, [credit]);

  //충전
  const handleChargeCredit = (amount) => {
    setCredit((prev) => prev + amount);
  };

  //후원
  const handleDonateCredit = (amount) => {
    setCredit((prev) => prev - amount);
  };

  return {
    credit,
    handleChargeCredit,
    handleDonateCredit,
  };
};

export default useCredit;
