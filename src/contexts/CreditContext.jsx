import { createContext, useState } from 'react';

//전역적으로 Credit state 관리하기위한 Context

const CreditContext = createContext({
  credit: 0,
  setCredit: () => {},
});

export const CreditProvider = ({ children }) => {
  const [credit, setCredit] = useState(localStorage.getItem('credit'));

  return (
    <CreditContext.Provider value={{ credit, setCredit }}>
      {children}
    </CreditContext.Provider>
  );
};

export default CreditContext;
