import { useState } from 'react';
import { validateInput } from '@utils/validateInput';

/**
 *
 * @hook useCreditForm
 * @description 크레딧 Input 관련 로직을 관리하는 커스텀 훅
 *
 * @param {number} credit 사용자의 현재 보유 크레딧
 * @param {boolean} isDonate CreditForm에서 내려받은 isDonate Boolean값 (validateValue 검증용)
 *
 * @returns {{
 *   input: string;
 *   error: boolean;
 *   setError: (val: boolean) => void;
 *   errMsg: string;
 *   setErrMsg: (msg: string) => void;
 *   handleInputChange: (inputValue: string) => void;
 *   handleAddAmount: (amount: number) => void;
 *   handleAddAll: () => void;
 *   handleReset: () => void;
 * }}
 */

export const useCreditForm = (credit, isDonate = false) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  //validateInput을 통해 검증을 돌리고 error,errMsg state에 결과값 할당
  const validateValue = (inputValue) => {
    const { isError, errMsg } = validateInput(
      Number(inputValue),
      credit,
      isDonate,
    );
    setError(isError);
    setErrMsg(errMsg);
  };

  //input값 onchange메소드
  const handleInputChange = (inputValue) => {
    const filteredText = inputValue.replace(/[^0-9]/g, ''); //숫자만 남기기위한 정규식
    setInput(filteredText);
    validateValue(filteredText);
  };

  //+100 +500 +100 버튼에 들어가는 메소드
  const handleAddAmount = (inputValue) => {
    const nextInputValue = (Number(input) || 0) + inputValue;
    setInput(String(nextInputValue));
    validateValue(nextInputValue);
  };

  //전액 버튼에 들어가는 메소드
  const handleAddAll = () => {
    setInput(String(credit));
    validateValue(credit);
  };

  //input창/error/errMsg 초기화
  const handleReset = () => {
    setInput('');
    setError(false);
    setErrMsg('');
  };

  return {
    input,
    error,
    setError,
    errMsg,
    setErrMsg,
    handleInputChange,
    handleAddAmount,
    handleAddAll,
    handleReset,
  };
};
