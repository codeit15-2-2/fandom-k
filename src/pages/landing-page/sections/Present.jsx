import { cn } from '@libs/cn';
import Button from '@pages/landing-page/components/Button';
import PresentCard from '@pages/landing-page/components/PresentCard';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

const Present = () => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      const timeout = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timeout);
    }
  }, [isIntersecting]);

  const delayClasses = ['delay-500', 'delay-1000', 'delay-1500', 'delay-2000'];

  return (
    <div
      ref={ref}
      className='relative flex h-screen w-screen snap-start snap-always items-center justify-center bg-gray-900'
    >
      <div className='mb-96 flex flex-wrap justify-center gap-6'>
        {[0, 1, 2, 3].map((idx) => (
          <div
            key={idx}
            className={cn(
              'translate-y-8 transform-gpu opacity-0 transition-all duration-700',
              isVisible && ['translate-y-0', 'opacity-100', delayClasses[idx]],
            )}
          >
            <PresentCard />
          </div>
        ))}
      </div>
      <div className='absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 translate-y-3/4 flex-col items-center justify-center'>
        <div className='z-10 text-7xl font-bold text-white'>
          내 손으로 직접 고르는 선물
        </div>
        <div className='my-14 text-center text-5xl text-white'>
          진행중인 아티스트의
          <br />
          다양한 조공을 선택해보세요
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Present;
