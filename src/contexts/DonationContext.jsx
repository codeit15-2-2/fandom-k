import { useContext, createContext, useState, useEffect } from 'react';

const STORAGE_KEY_DONATION = 'donationData';

const DonationContext = createContext({
  donationData: null,
  setDonationData: () => {}, // 후원 정보 1개만 관리
  isLoading: true,
});

const DonationProvider = ({ children }) => {
  const [donationData, setDonationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 처음 렌더링할 때 localStorage에서 불러옴
  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY_DONATION);
    if (storedData) {
      setDonationData(JSON.parse(storedData));
    }
    setIsLoading(false);
  }, []);

  // donationData가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    if (donationData !== null) {
      try {
        localStorage.setItem(
          STORAGE_KEY_DONATION,
          JSON.stringify(donationData),
        );
      } catch (error) {
        console.error('donationData를 저장하는데 오류가 발생했습니다.', error);
      }
    }
  }, [donationData]);

  return (
    <DonationContext.Provider
      value={{ donationData, setDonationData, isLoading }}
    >
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
