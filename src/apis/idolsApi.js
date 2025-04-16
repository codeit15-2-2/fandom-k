import { instance } from '@apis/instance';

/**
 * 아이돌 정보 타입 정의
 * @typedef {Object} Idol
 * @property {number} id 아이돌 고유 ID
 * @property {string} name 이름
 * @property {string} gender 성별
 * @property {string} group 소속 그룹
 * @property {string} profilePicture 프로필 이미지 URL
 * @property {number} totalVotes 누적 투표 수
 * @property {number} teamId 소속 팀 ID
 */

/**
 * 아이돌 목록 응답 타입 정의
 * @typedef {Object} GetIdolListResponse
 * @property {Idol[]} list 아이돌 배열
 * @property {number|null} nextCursor 다음 페이지 커서 (없을 경우 null)
 */

/**
 * 아이돌 생성 요청 데이터 타입 정의
 * @typedef {Object} CreateIdolPayload
 * @property {string} name 아이돌 이름
 * @property {string} gender 성별
 * @property {string} group 소속 그룹
 * @property {string} profilePicture 프로필 이미지 URL
 */

/**
 * 아이돌 업데이트 요청 데이터 타입 정의
 * @typedef {Object} UpdateIdolPayload
 * @property {string} name 아이돌 이름
 * @property {string} gender 성별
 * @property {string} group 소속 그룹
 * @property {string} profilePicture 프로필 이미지 URL
 */

/**
 * 아이돌 목록을 불러옵니다.
 *
 * @param {Object} [params] 요청 쿼리 파라미터
 * @param {number} [params.cursor=0] 페이지네이션을 위한 커서
 * @param {number} [params.pageSize=10] 한 페이지당 불러올 아이돌 수
 * @param {string} [params.keyword] 아이돌 이름 또는 그룹 검색 키워드
 * @returns {Promise<GetIdolListResponse>} 아이돌 목록과 다음 커서 반환
 */
const getIdols = async ({ cursor = 0, pageSize = 16, keyword = '' } = {}) => {
  try {
    const { data } = await instance.get(`/idols`, {
      params: { cursor, pageSize, keyword },
    });
    return data;
  } catch (error) {
    throw new Error(`아이돌 목록 불러오기 실패: ${error.message}`);
  }
};

/**
 * 새로운 아이돌을 생성합니다.
 *
 * @param {CreateIdolPayload} idol 생성할 아이돌 정보
 * @returns {Promise<Idol>} 생성된 아이돌 데이터 반환
 */
const createIdol = async (idol) => {
  try {
    const { data } = await instance.post('/idols', idol);
    return data;
  } catch (error) {
    throw new Error(`아이돌 생성 실패: ${error.message}`);
  }
};

/**
 * 아이돌 정보를 업데이트합니다.
 *
 * @param {number} idolId 업데이트할 아이돌 ID
 * @param {UpdateIdolPayload} idol 업데이트할 아이돌 정보
 * @returns {Promise<Idol>} 업데이트된 아이돌 데이터 반환
 */
const updateIdol = async (idolId, idol) => {
  try {
    const { data } = await instance.put(`/idols/${idolId}`, idol);
    return data;
  } catch (error) {
    throw new Error(`아이돌 업데이트 실패: ${error.message}`);
  }
};

/**
 * 아이돌을 삭제합니다.
 *
 * @param {number} idolId 삭제할 아이돌 ID
 * @returns {Promise<void>} 삭제 성공시 빈 응답
 */
const deleteIdol = async (idolId) => {
  try {
    await instance.delete(`/idols/${idolId}`);
  } catch (error) {
    throw new Error(`아이돌 삭제 실패: ${error.message}`);
  }
};

export { getIdols, createIdol, updateIdol, deleteIdol };
