import { useContext, createContext, useState, useEffect } from 'react';

const STORAGE_KEY_DONATION = 'donationData';

const DonationContext = createContext({
  donationData: null,
  setDonationData: () => {}, // 후원 정보 1개만 관리
});

const DonationProvider = ({ children }) => {
  const [donationData, setDonationData] = useState(null);

  // 처음 렌더링할 때 localStorage에서 불러옴
  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY_DONATION);
    if (storedData) {
      setDonationData(JSON.parse(storedData));
    }
  }, []);

  // donationData가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    if (donationData !== null) {
      localStorage.setItem(STORAGE_KEY_DONATION, JSON.stringify(donationData));
    }
  }, [donationData]);

  return (
    <DonationContext.Provider value={{ donationData, setDonationData }}>
      {children}
    </DonationContext.Provider>
  );
};

export default DonationProvider;

/**
 * @returns { donationData, setDonationData }
 * @example const { donationData, setDonationData } = useDonation();
 */
export const useDonation = () => useContext(DonationContext);
