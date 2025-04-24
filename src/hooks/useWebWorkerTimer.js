import { useEffect, useRef, useState } from 'react';
import TimerWorker from '../libs/timerWorker?worker';

export const useWebWorkerTimer = (interval = 1000) => {
  const [now, setNow] = useState(Date.now());
  const workerRef = useRef(null);

  useEffect(() => {
    if (interval === null) return;

    const worker = new TimerWorker();
    workerRef.current = worker;

    worker.postMessage({ type: 'start', interval });

    worker.onmessage = (e) => {
      if (e.data.type === 'tick') {
        setNow(e.data.timestamp);
      }
    };

    return () => {
      worker.postMessage({ type: 'stop' });
      worker.terminate();
    };
  }, [interval]);

  return now;
};
