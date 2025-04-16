import { instance } from '@apis/instance';
import { ENDPOINTS } from '@constants/endpoints';
import { handleApiCall } from '@utils/apiUtils';

/**
 * 아이돌 투표를 생성합니다.
 * @param {string} teamName - 팀 이름 (URL path parameter)
 * @param {number} idolId - 투표할 아이돌 ID (body parameter)
 * @returns {Promise<Object>} - 생성된 투표의 응답 데이터
 */
const postVote = async (teamName, idolId) => {
  return handleApiCall(
    () => instance.post(ENDPOINTS.VOTES(teamName), { idolId }),
    'postVote',
  );
};

export { postVote };
