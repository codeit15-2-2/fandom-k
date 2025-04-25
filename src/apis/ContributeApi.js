import { instance } from '@apis/instance';

const ContributeDonation = async (donationId, amount) => {
    try {
      const { data } = await instance.put(
        `/donations/${donationId}/contribute`,
        amount,
      );
      return data;
    } catch (error) {
      throw new Error(`후원 실패: ${error.message}`);
    }
  };



  export {ContributeDonation};
  