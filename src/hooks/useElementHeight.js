import { useRef, useEffect, useState } from 'react';

const useElementHeight = () => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, []);

  return [ref, height];
};

export default useElementHeight;
