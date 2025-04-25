import { instance } from '@apis/instance';

/**
 * 차트 정보 타입 정의
 * @typedef {Object} Chart
 * @property {number} id 아이돌 고유 ID
 * @property {string} name 이름
 * @property {'male'|'female'} gender 성별
 * @property {string} group 소속 그룹
 * @property {string} profilePicture 프로필 이미지 URL
 * @property {number} rank 차트 내에서의 순위
 * @property {number} teamId 소속 팀 ID
 * @property {number} totalVotes 누적 투표 수
 */

/**
 * 이달의 차트 목록 응답 타입 정의
 * @typedef {Object} GetChartListResponse
 * @property {Chart[]} list 차트 배열
 * @property {number|null} nextCursor 다음 페이지 커서 (없을 경우 null)
 */

/**
 * 이달의 차트 목룍을 불러옵니다.
 * @param {object} [params] 요청 쿼리 파라미터
 * @param {'male'|'female'} params.gender - 성별 필터링 (필수)
 * @param {number} [params.cursor=0] - 페이지네이션을 위한 커서 (기본값: 0)
 * @param {number} [params.pageSize=10] - 요청할 아이템 수 (기본값: 10)
 * @returns {Promise<GetChartListResponse>} - 차트 목록과 다음 커서 반환
 */

const getCharts = async ({ gender, cursor = 0, pageSize = 10 } = {}) => {
  try {
    const { data } = await instance.get(`/charts/${gender}`, {
      params: { gender, cursor, pageSize },
    });

    return data;
  } catch (error) {
    throw new Error(`차트 정보 불러오기 실패: ${error.message}`);
  }
};

export { getCharts };
