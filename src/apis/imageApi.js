import { instance } from '@apis/instance';
import { ENDPOINTS } from '@constants/endpoints';
import { handleApiCall } from '@utils/apiUtils';
import { HEADERS } from '@configs/apiConfig';

/**
 * 이미지 업로드
 * @param {File} imageFile - 업로드할 이미지 파일 (최대 5MB)
 * @returns {Promise<string>} - 업로드된 이미지의 URL
 */
const postImage = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  const response = await handleApiCall(
    () =>
      instance.post(ENDPOINTS.IMAGE, formData, {
        headers: HEADERS.FORM,
      }),
    'postImage',
    'FORM',
  );

  return response.url;
};

export { postImage };
