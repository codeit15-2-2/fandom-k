import { useState } from 'react';
import { validateInput } from '@utils/validateInput';

export const useCreditForm = (initialCredit = 0, isDonate = false) => {
  const [credit, setCredit] = useState(initialCredit);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const validate = (value) => {
    const { isError, errMsg } = validateInput(Number(value), credit, isDonate);
    setError(isError);
    setErrMsg(errMsg);
  };

  const handleInputChange = (value) => {
    setInput(value);
    validate(value);
  };

  const handleAddAmount = (amount) => {
    const nextValue = (Number(input) || 0) + amount;
    setInput(String(nextValue));
    validate(nextValue);
  };

  const handleAddAll = () => {
    setInput(String(credit));
    validate(credit);
  };

  const reset = () => {
    setInput('');
    setError(false);
    setErrMsg('');
  };

  return {
    credit,
    setCredit,
    input,
    error,
    errMsg,
    handleInputChange,
    handleAddAmount,
    handleAddAll,
    reset,
  };
};
