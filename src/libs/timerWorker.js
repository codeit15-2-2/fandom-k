let intervalId = null;

self.onmessage = (e) => {
  const { type, interval } = e.data;

  if (type === 'start') {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      self.postMessage({ type: 'tick', timestamp: Date.now() });
    }, interval);
  }

  if (type === 'stop') {
    clearInterval(intervalId);
    intervalId = null;
  }
};
