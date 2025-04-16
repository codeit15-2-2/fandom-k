// API BASE URL
const API_BASE_URL = 'https://fandom-k-api.vercel.app/15-2';

// API 요청 유지 시간: 5초
const API_TIMEOUT = 5000;

// Content Type: application/json, form-data
const API_HEADERS = {
  JSON: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  FORM_DATA: {
    'Content-Type': 'multipart/form-data',
  },
};

export { API_BASE_URL, API_TIMEOUT, API_HEADERS };
