const ERROR_MESSAGES = {
  NETWORK_ERROR: {
    code: 0,
    message: '서버에 연결할 수 없습니다. 인터넷 상태를 확인해주세요.',
  },
  TIMEOUT: {
    code: 408,
    message: '요청 시간이 초과되었습니다. 서버가 응답하지 않습니다.',
  },
  NOT_FOUND: {
    code: 404,
    message: '요청한 데이터를 찾을 수 없습니다.',
  },
  SERVER_ERROR: {
    code: 500,
    message: '서버에서 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
  },
  BAD_REQUEST: {
    code: 400,
    message: '요청 형식이 올바르지 않습니다. 다시 확인해주세요.',
  },
  FORBIDDEN: {
    code: 403,
    message: '해당 요청에 대한 권한이 없습니다.',
  },
  METHOD_NOT_ALLOWED: {
    code: 405,
    message: '지원하지 않는 요청 방식입니다.',
  },
  PAYLOAD_TOO_LARGE: {
    code: 413,
    message: '요청 용량이 너무 큽니다. 파일 크기를 확인해주세요.',
  },
  UNSUPPORTED_MEDIA_TYPE: {
    code: 415,
    message: '지원하지 않는 파일 형식입니다.',
  },
  CONFLICT: {
    code: 409,
    message: '이미 존재하거나 충돌되는 데이터가 있습니다.',
  },
  UNKNOWN: {
    code: -1,
    message: '알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  },
};

export { ERROR_MESSAGES };
