import { useState } from 'react';
import { validateInput } from '@utils/validateInput';

/**
 *
 * @hook useCreditForm
 * @description 크레딧Input관련 로직을 관리하는 커스텀훅
 *
 * @param {number} credit 사용자의 현재보유크레딧
 * @param {boolean} isDonate CreditForm에서 내려받은 isDonate Boolean값(validate검증용)
 *
 * @returns
 */

export const useCreditForm = (credit, isDonate = false) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  //validateInput을 통해 검증을 돌리고 error,errMsg state에 결과값 할당
  const validate = (inputValue) => {
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
    setInput(inputValue);
    validate(inputValue);
  };

  //+100 +500 +100 버튼에 들어가는 메소드
  const handleAddAmount = (inputValue) => {
    const nextInputValue = (Number(input) || 0) + inputValue;
    setInput(String(nextInputValue));
    validate(nextInputValue);
  };

  //전액 버튼에 들어가는 메소드
  const handleAddAll = () => {
    setInput(String(credit));
    validate(credit);
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
