import React, { useState, useEffect, useRef } from 'react';
import Button from '@pages/landing-page/components/Button';

const HeartFloatingEffect = ({ trigger }) => {
  const containerRef = useRef(null);
  const heartEmojis = [
    '💓',
    '❤️',
    '💕',
    '💜',
    '💛',
    '💙',
    '🧡',
    '💗',
    '💝',
    '🩵',
    '🤎',
    '💞',
    '🩷',
    '💚',
    '🤍',
  ];
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (!trigger) return;
    const id = Math.random().toString(36).slice(2, 11);
    const left = Math.random() * 100;
    const emoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    const newHeart = { id, left, emoji };
    setHearts((prev) => [...prev, newHeart]);

    const timeout = setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== id));
    }, 2000);

    return () => clearTimeout(timeout);
  }, [trigger]);

  return (
    <div
      ref={containerRef}
      className='pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden'
    >
      {hearts.map((heart) => (
        <span
          key={heart.id}
          style={{
            position: 'absolute',
            top: 0,
            left: `${heart.left}%`,
            transform: 'translateY(-100%)',
            animation: 'floatUp 2s ease-out forwards',
            fontSize: '2rem',
            opacity: 0,
          }}
        >
          {heart.emoji}
        </span>
      ))}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-150px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

const DonationSection = () => {
  const [inputValue, setInputValue] = useState('');
  const [heartTrigger, setHeartTrigger] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setHeartTrigger(Date.now()); // 트리거 값 변경
  };

  return (
    <section className='flex h-screen w-screen snap-start snap-always items-center justify-center overflow-hidden text-white'>
      <div className='flex w-[110rem] items-center justify-center'>
        <div className='flex flex-1 flex-col items-center justify-center gap-8'>
          <div className='relative w-full'>
            <input
              type='number'
              placeholder='크레딧을 입력해보세요!'
              className='relative z-10 w-130 rounded-2xl bg-white p-8 text-2xl text-black'
              value={inputValue}
              onChange={handleInputChange}
            />
            <HeartFloatingEffect trigger={heartTrigger} />
          </div>
          <Button>후원하기</Button>
        </div>

        <div className='flex h-full flex-1 flex-col items-center justify-center gap-12'>
          <h1 className='text-7xl/20 font-bold'>
            이렇게나{' '}
            <span className='from-brand-1 to-brand-2 bg-gradient-to-r bg-clip-text text-transparent'>
              쉬운
            </span>
            <br />내 마음 고백
          </h1>
          <p className='text-left text-4xl leading-snug'>
            단 한 번의 클릭으로
            <br />
            무거운 진심을 전해보세요
          </p>
        </div>

        {/* 아이돌 리스트 */}
      </div>
    </section>
  );
};

export default DonationSection;
