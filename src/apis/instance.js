import axios from 'axios';
import { API_BASE_URL } from '@configs/apiConfig';
import { API_TIMEOUT, HEADERS } from '@constants/apiConstants';
import { ERROR_MESSAGES } from '@constants/errorMessages';

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: HEADERS.JSON, // 기본 요청은 JSON
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      console.error(ERROR_MESSAGES.TIMEOUT);
    } else if (!error.response) {
      console.error(ERROR_MESSAGES.NETWORK_ERROR);
    } else {
      console.error(ERROR_MESSAGES.UNKNOWN, error);
    }
    return Promise.reject(error);
  },
);

export { instance };
