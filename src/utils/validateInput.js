//InputValue 검증로직

const MAX_CREDIT_VALUE = 1000000;

export const validateInput = (inputValue, credit, isDonate) => {
  if (isNaN(inputValue)) {
    return { isError: true, errMsg: '숫자만 입력해주세요.' };
  }

  if (inputValue <= 0) {
    return { isError: true, errMsg: '1 이상 입력해주세요.' };
  }

  if (isDonate && inputValue > credit) {
    return {
      isError: true,
      errMsg: '갖고있는 크레딧보다 더 많이 후원할 수 없어요',
    };
  }

  if (!isDonate && inputValue + credit > 1000000) {
    return {
      isError: true,
      errMsg: `최대로 보유가능한 크레딧은 ${MAX_CREDIT_VALUE.toLocaleString()} 크레딧입니다.`,
    };
  }

  return { isError: false };
};
