import { useState, useEffect } from 'react';
import { useWebWorkerTimer } from '@/hooks/useWebWorkerTimer';
import { SECOND, MINUTE, HOUR, DAY } from '@constants/donationConstants';

const emptyTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };

/**
 * @param {string} deadline - ISO 형식의 마감 시각
 * @param {boolean} isOpen - 후원 진행 상태
 * @returns {Object} { days, hours, minutes, seconds }
 */
export const useCountdownTimer = (deadline, isOpen) => {
  const timer = useWebWorkerTimer(isOpen ? SECOND : null); // 타이머 값을 기준으로 초기 상태를 계산하려면 반드시 timer를 먼저 정의 (1초마다 업데이트)

  const [remainingTime, setRemainingTime] = useState(() =>
    isOpen && timer ? calculateRemaining(deadline, timer) : emptyTime,
  );

  useEffect(() => {
    if (!isOpen || timer === null) return;

    setRemainingTime(calculateRemaining(deadline, timer));
  }, [timer, isOpen, deadline]);

  return remainingTime;
};

const calculateRemaining = (deadline, nowTimestamp) => {
  const deadlineObj = new Date(deadline);
  const now = new Date(nowTimestamp);
  const diff = deadlineObj - now;

  if (diff <= 0) {
    // deadline이 now보다 과거라면 0:0:0:0으로 초기화하여 음수 값이 나오는 것을 방지.
    // 단, 타이머는 계속 진행되므로 외부에서 isOpen을 처리하는 것이 우선. (즉, 정리하면 메모리 누수 방지는 사용처에서 isOpen으로 관리한다.)
    return emptyTime;
  }

  return {
    days: Math.floor(diff / DAY),
    hours: Math.floor((diff % DAY) / HOUR),
    minutes: Math.floor((diff % HOUR) / MINUTE),
    seconds: Math.floor((diff % MINUTE) / SECOND),
  };
};
