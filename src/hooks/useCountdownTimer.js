import { useState, useEffect } from 'react';
import { useWebWorkerTimer } from '@/hooks/useWebWorkerTimer';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const useCountdownTimer = (deadline, now, isOpen) => {
  const emptyTime = { days: 0, hours: 0, minutes: 0, seconds: 0 }; // 리렌더링 방지용 (타이머 방지)
  const [remainingTime, setRemainingTime] = useState(() =>
    isOpen ? calculateRemaining(deadline, now) : emptyTime,
  );

  const timer = useWebWorkerTimer(isOpen ? 1000 : null);

  useEffect(() => {
    if (!isOpen || timer === null) return;

    setRemainingTime(calculateRemaining(deadline, now));
  }, [timer, isOpen, deadline]);

  return remainingTime;
};

const calculateRemaining = (deadline, now) => {
  const deadlineObj = new Date(deadline);
  const diff = deadlineObj - now;

  return {
    days: Math.floor(diff / DAY),
    hours: Math.floor((diff % DAY) / HOUR),
    minutes: Math.floor((diff % HOUR) / MINUTE),
    seconds: Math.floor((diff % MINUTE) / SECOND),
  };
};
