export const getElapsedProgress = (createdAt, deadline, now) => {
  const createdAtTime = new Date(createdAt).getTime();
  const deadlineTime = new Date(deadline).getTime();

  const totalDuration = deadlineTime - createdAtTime;
  const elapsedTime = now - createdAtTime;
  const progress = (elapsedTime / totalDuration) * 100;
  const clampedProgress = Math.max(0, Math.min(progress, 100));

  return clampedProgress;
};

export const formatDate = (deadline) => {
  const dateObj = new Date(deadline);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');

  return { year, month, day };
};
