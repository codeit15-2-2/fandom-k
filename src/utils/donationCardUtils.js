/**
* 목표 금액 대비 현재 금액의 도네이션 진행률을 퍼센트(%)로 계산합니다.
* 초과해도 최대 100%로 제한합니다.
*/
export const getDonationProgress = (receivedDonations, targetDonation) => {
  const validReceived = Math.max(receivedDonations, 0); // 음수면 0으로 처리
  const progress = (validReceived / targetDonation) * 100;

  return Math.min(progress, 100);
};

/**
* 마감일 기준으로 현재 날짜에서의 D-Day 텍스트를 반환합니다.
* 예: '3일 남음' / 'D-Day' / '모집 마감'
*/
export const getDDayText = (deadline) => {
  const now = new Date();
  const dDay = new Date(deadline);
  const diffTime = dDay.getTime() - now.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0) return `${diffDays}일 남음`;
  if (diffDays === 0) return 'D-Day';
  return '모집 마감';
};
