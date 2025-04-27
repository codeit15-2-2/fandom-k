import { useContext, createContext, useState } from 'react';

const DonationContext = createContext({
  donationData: null,
  setDonationData: () => {}, // 후원 정보 1개만 관리
});

const DonationProvider = ({ children }) => {
  const [donationData, setDonationData] = useState(null);

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
