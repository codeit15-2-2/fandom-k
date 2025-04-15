import { instance } from '@apis/instance';
import { ENDPOINTS } from '@constants/endpoints';
import { handleApiCall, createQueryParams } from '@utils/apiUtils';

/**
 * 후원을 생성합니다.
 * @param {string} teamName - 팀 이름
 * @param {Object} donationData - 후원 생성 정보
 * @returns {Promise<Object>} - 생성된 후원 정보
 */
const postDonation = async (teamName, donationData) => {
  return handleApiCall(
    () => instance.post(ENDPOINTS.DONATIONS(teamName), donationData),
    'postDonation',
  );
};

/**
 * 후원 목록을 가져옵니다.
 * @param {string} teamName - 팀 이름
 * @param {Object} [options] - 쿼리 파라미터
 * @returns {Promise<Object>} - 후원 목록
 */
const getDonations = async (teamName, options = {}) => {
  const { cursor, pageSize = 10, priorityIdolIds } = options;
  const params = createQueryParams({ cursor, pageSize, priorityIdolIds });

  return handleApiCall(
    () => instance.get(ENDPOINTS.DONATIONS(teamName), { params }),
    'getDonations',
  );
};

/**
 * 후원 정보를 업데이트합니다.
 * @param {string} teamName - 팀 이름
 * @param {number} donationId - 후원 ID
 * @param {Object} updateData - 업데이트할 후원 정보
 * @returns {Promise<Object>} - 업데이트된 후원 정보
 */
const putDonation = async (teamName, donationId, updateData) => {
  return handleApiCall(
    () => instance.put(ENDPOINTS.DONATION_ID(teamName, donationId), updateData),
    'putDonation',
  );
};

/**
 * 후원을 삭제합니다.
 * @param {string} teamName - 팀 이름
 * @param {number} donationId - 후원 ID
 * @returns {Promise<Object>} - 삭제 응답 정보
 */
const deleteDonation = async (teamName, donationId) => {
  return handleApiCall(
    () => instance.delete(ENDPOINTS.DONATION_ID(teamName, donationId)),
    'deleteDonation',
  );
};

/**
 * 후원에 금액을 기여합니다.
 * @param {string} teamName - 팀 이름
 * @param {number} donationId - 후원 ID
 * @param {number} amount - 기여할 금액
 * @returns {Promise<Object>} - 기여 결과
 */
const contributeDonation = async (teamName, donationId, amount) => {
  return handleApiCall(
    () =>
      instance.put(ENDPOINTS.DONATION_ID_CONTRIBUTE(teamName, donationId), {
        amount,
      }),
    'contributeDonation',
  );
};

export {
  postDonation,
  getDonations,
  putDonation,
  deleteDonation,
  contributeDonation,
};
