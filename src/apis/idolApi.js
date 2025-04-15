import { instance } from '@apis/instance';
import { ENDPOINTS } from '@constants/endpoints';
import { handleApiCall, createQueryParams } from '@utils/apiUtils';

/**
 * 아이돌 목록을 가져옵니다.
 * @param {string} teamName - 팀 이름 (URL path parameter)
 * @param {Object} [options] - 쿼리 파라미터 (cursor, pageSize, keyword)
 * @param {number} [options.cursor] - 커서 (옵션)
 * @param {number} [options.pageSize=10] - 페이지 사이즈 (기본값: 10)
 * @param {string} [options.keyword] - 검색 키워드 (옵션)
 * @returns {Promise<Object>} - 아이돌 목록과 nextCursor 정보
 */
const getIdols = async (teamName, options = {}) => {
  const { cursor, pageSize = 10, keyword } = options;
  const params = createQueryParams({ cursor, pageSize, keyword });

  return handleApiCall(
    () => instance.get(ENDPOINTS.IDOLS(teamName), { params }),
    'getIdols',
  );
};

/**
 * 새로운 아이돌을 생성합니다.
 * @param {string} teamName - 팀 이름 (URL path parameter)
 * @param {Object} idolData - 아이돌 생성 정보
 * @param {string} idolData.profilePicture - 프로필 이미지 URL
 * @param {string} idolData.group - 그룹 이름
 * @param {string} idolData.gender - 성별 (예: 'female' 또는 'male')
 * @param {string} idolData.name - 아이돌 이름
 * @returns {Promise<Object>} - 생성된 아이돌 정보
 */
const postIdol = async (teamName, idolData) => {
  return handleApiCall(
    () => instance.post(ENDPOINTS.IDOLS(teamName), idolData),
    'postIdol',
  );
};

/**
 * 아이돌 정보를 업데이트합니다.
 * @param {string} teamName - 팀 이름 (URL path parameter)
 * @param {number} idolId - 아이돌 ID (URL path parameter)
 * @param {Object} idolData - 아이돌 정보
 * @param {string} idolData.profilePicture - 프로필 이미지 URL
 * @param {string} idolData.group - 그룹 이름
 * @param {string} idolData.gender - 성별
 * @param {string} idolData.name - 이름
 * @returns {Promise<Object>} - 업데이트된 아이돌 정보
 */
const putIdol = async (teamName, idolId, idolData) => {
  return handleApiCall(
    () => instance.put(ENDPOINTS.IDOLS_ID(teamName, idolId), idolData),
    'putIdol',
  );
};

/**
 * 아이돌을 삭제합니다.
 * @param {string} teamName - 팀 이름 (URL path parameter)
 * @param {number} idolId - 삭제할 아이돌 ID (URL path parameter)
 * @returns {Promise<void>} - 성공 시 아무것도 반환하지 않음
 */
const deleteIdol = async (teamName, idolId) => {
  return handleApiCall(
    () => instance.delete(ENDPOINTS.IDOLS_ID(teamName, idolId)),
    'deleteIdol',
  );
};

export { getIdols, postIdol, putIdol, deleteIdol };
