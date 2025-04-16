import { HEADERS } from '@constants/apiConstants';
import { parseApiError } from '@utils/parseError';

/**
 * 공통 API 호출 핸들러
 * @param {Function} apiCall - 실제 API 요청 함수 (헤더 인자를 받아야 함)
 * @param {string} errorPrefix - 에러 로그 접두사
 * @param {'JSON' | 'FORM'} [contentType='JSON'] - 요청 타입
 * @returns {Promise<any>} - API 응답 데이터
 */
const handleApiCall = async (apiCall, errorPrefix, contentType = 'JSON') => {
  try {
    // 요청 헤더 설정
    const headers = HEADERS[contentType];

    // 실제 API 요청 실행 (apiCall은 헤더를 인자로 받는 함수)
    const { data } = await apiCall(headers); // 예: apiCall(headers) -> axios 요청

    return data;
  } catch (error) {
    // 에러 메시지 파싱
    const message = parseApiError(error);
    console.error(`${errorPrefix} API Error: ${message}`, error);

    // 에러 객체 던지기 (명확한 메시지 제공)
    throw new Error(`${errorPrefix} API Error: ${message}`);
  }
};

/**
 * 쿼리 파라미터 추출 함수
 * @param {Record<string, any>} params - 원본 파라미터
 * @returns {Record<string, any>} - 유효 값만 필터링된 객체
 */
const createQueryParams = (params) => {
  return Object.fromEntries(
    Object.entries(params).filter(([_, value]) => {
      // 값이 undefined이거나 공백인 경우 제외
      if (value === undefined) return false;
      if (typeof value === 'string') return value.trim() !== '';
      return true;
    }),
  );
};

export { handleApiCall, createQueryParams };
