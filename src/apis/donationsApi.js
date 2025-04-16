import { instance } from '@apis/instance';
import { ENDPOINTS } from '@constants/endpoints';
import { handleApiCall, createQueryParams } from '@utils/apiUtils';

/**
 * 차트를 조회합니다.
 * @param {string} teamName - 팀 이름
 * @param {string} gender - 성별 (male | female)
 * @param {Object} [options] - 쿼리 파라미터
 * @param {number} [options.cursor] - 커서
 * @param {number} [options.pageSize=10] - 페이지 크기
 * @param {string} [contentType='JSON'] - 'JSON' 또는 'FORM' 타입으로 요청을 보낼 수 있음
 * @returns {Promise<Object>} - 차트 데이터
 */
const getCharts = async (
  teamName,
  gender,
  options = {},
  contentType = 'JSON',
) => {
  const { cursor, pageSize = 10 } = options;
  const params = createQueryParams({ cursor, pageSize });

  return handleApiCall(
    () =>
      instance.get(ENDPOINTS.CHARTS(teamName, gender), {
        params,
      }),
    'getCharts',
    contentType,
  );
};

export { getCharts };
