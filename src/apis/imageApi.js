import { instance } from '@apis/instance';
import { HEADERS } from '@constants/apiConstants';

/**
 * 이미지 파일을 업로드합니다.
 *
 * 아이돌 이미지들은 이 엔드포인트를 통해 업로드한 후 URL을 획득하여 사용합니다.
 *
 * @param {File} image 업로드할 이미지 파일 (최대 5MB)
 * @returns {Promise<UploadImageResponse>} 업로드 성공 시 반환되는 이미지 URL 정보
 *
 * --------------------------------------
 * @typedef {Object} UploadImageResponse
 * @property {string} url 업로드된 이미지의 접근 URL
 * --------------------------------------
 */
const uploadImage = async (image) => {
  // FormData를 사용하여 이미지 파일을 서버에 전송
  const formData = new FormData();
  formData.append('image', image);

  try {
    // 이미지 파일 업로드 요청
    const { data } = await instance.post('/images/upload', formData, {
      headers: HEADERS.FORM_DATA,
    });
    return data; // 업로드된 이미지 URL 반환
  } catch (error) {
    // 에러 처리: 에러 메시지에 업로드 실패 원인 추가
    throw new Error(`이미지 업로드 실패:`, error);
  }
};

export { uploadImage };
