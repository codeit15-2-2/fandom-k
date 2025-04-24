import { instance } from './instance';

export const getDonate = async ({
  cursor = 0,
  pageSize = 16,
  keyword = '',
} = {}) => {
  try {
    const { data } = await instance.get(`/donations`, {
      params: { cursor, pageSize, keyword },
    });
    return data;
  } catch (error) {
    throw new Error(`도네이션 목록 불러오기 실패: ${error.message}`);
  }
};
