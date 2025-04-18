//InputValue 검증로직
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

  return { isError: false };
};
