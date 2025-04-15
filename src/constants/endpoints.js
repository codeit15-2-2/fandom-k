const BASE_PATHS = {
  IDOLS: '/idols',
  VOTES: '/votes',
  DONATIONS: '/donations',
  CHARTS: '/charts',
  IMAGE: '/images/upload',
  // 필요한 경로 추가
};

const createEndpoint = (teamName, path = '') => `/${teamName}${path}`;

const ENDPOINTS = {
  IDOLS: (teamName) => createEndpoint(teamName, BASE_PATHS.IDOLS),

  IDOLS_ID: (teamName, idolId) =>
    createEndpoint(teamName, `${BASE_PATHS.IDOLS}/${idolId}`),

  VOTES: (teamName) => createEndpoint(teamName, BASE_PATHS.VOTES),

  DONATIONS: (teamName) => createEndpoint(teamName, BASE_PATHS.DONATIONS),

  DONATION_ID: (teamName, donationId) =>
    createEndpoint(teamName, `${BASE_PATHS.DONATIONS}/${donationId}`),

  DONATION_ID_CONTRIBUTE: (teamName, donationId) =>
    createEndpoint(
      teamName,
      `${BASE_PATHS.DONATIONS}/${donationId}/contribute`,
    ),

  CHARTS: (teamName, gender) =>
    createEndpoint(teamName, `${BASE_PATHS.CHARTS}/${gender}`),

  IMAGE: BASE_PATHS.IMAGE,

  // 필요 엔드포인트 추가
};

export { ENDPOINTS };
