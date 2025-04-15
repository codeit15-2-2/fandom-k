import { ERROR_MESSAGES } from '@constants/errorMessages';

/**
 * API 에러 객체를 분석해 적절한 메시지를 반환하는 함수
 * @param {any} error - Axios 에러 객체
 * @returns {string} - 사용자에게 보여줄 에러 메시지
 */
const parseApiError = (error) => {
  if (error.code === 'ECONNABORTED') {
    return ERROR_MESSAGES.TIMEOUT.message;
  }

  if (!error.response) {
    return ERROR_MESSAGES.NETWORK_ERROR.message;
  }

  const { status } = error.response;

  switch (status) {
    case 400:
      return ERROR_MESSAGES.BAD_REQUEST.message;
    case 403:
      return ERROR_MESSAGES.FORBIDDEN.message;
    case 404:
      return ERROR_MESSAGES.NOT_FOUND.message;
    case 405:
      return ERROR_MESSAGES.METHOD_NOT_ALLOWED.message;
    case 409:
      return ERROR_MESSAGES.CONFLICT.message;
    case 413:
      return ERROR_MESSAGES.PAYLOAD_TOO_LARGE.message;
    case 415:
      return ERROR_MESSAGES.UNSUPPORTED_MEDIA_TYPE.message;
    case 500:
      return ERROR_MESSAGES.SERVER_ERROR.message;
    default:
      return ERROR_MESSAGES.UNKNOWN.message;
  }
};

export { parseApiError };
