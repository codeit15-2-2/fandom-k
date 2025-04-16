// apis/voteApi.js
import { instance } from '@apis/instance';

/**
 * 특정 아이돌에게 투표합니다.
 *
 * --------------------------------------
 * @param {number} idolId 투표할 아이돌 ID
 * @returns {Promise<Object>} 투표 생성 응답 (voteId와 idol 정보 포함)
 *
 * --------------------------------------
 * @typedef {Object} Idol
 * @property {number} id 아이돌 ID
 * @property {string} name 아이돌 이름
 * @property {string} gender 성별
 * @property {string} group 그룹명
 * @property {string} profilePicture 프로필 이미지 URL
 * @property {number} totalVotes 총 투표 수
 * @property {number} teamId 팀 ID
 *
 * --------------------------------------
 * @typedef {Object} VoteResponse
 * @property {number} voteId 생성된 투표 ID
 * @property {Idol} idol 아이돌 정보
 * --------------------------------------
 */

const createVote = async (idolId) => {
  try {
    const { data } = await instance.post('/votes', { idolId });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { createVote };
