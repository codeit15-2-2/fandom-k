//InputValue 검증로직
export const InputValidate = (inputValue, credit, isDonate) => {
  if (isNaN(inputValue)) {
    return { isValid: false, message: '숫자만 입력해주세요.' };
  }

  if (inputValue <= 0) {
    return { isValid: false, message: '1 이상 입력해주세요.' };
  }

  if (isDonate && inputValue > credit) {
    return {
      isValid: false,
      message: '갖고있는 크레딧보다 더 많이 후원할 수 없어요',
    };
  }

  return { isValid: true };
};
