import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const particles = Array.from({ length: 15 });

export default function NotFoundPage() {
  const text = '404';

  return (
    <div className='to-brand-2/20 relative h-[calc(100vh-5rem)] w-full overflow-hidden bg-gradient-to-tl from-purple-100/10 via-purple-500/10 md:h-[calc(100vh-8rem)]'>
      <div className='pointer-events-none absolute top-0 left-0 z-10 h-32 w-full bg-gradient-to-b from-black/70 to-transparent' />
      {/* Motion Particles */}
      {particles.map((_, index) => (
        <motion.div
          key={index}
          className='absolute z-20 rounded-full bg-gray-100/10'
          style={{ width: 150, height: 150 }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 1.5 + 0.2,
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: Math.random() * 10 + 3,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Error page content */}
      <div className='relative z-30 flex h-full flex-col items-center justify-center text-center'>
        {/* 404 타이틀 */}
        <div className='flex'>
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              // className='from-brand-1 to-brand-2 m-0 bg-gradient-to-r bg-[length:400%_400%] bg-clip-text p-0 text-[10vh] leading-none font-bold text-transparent'
              className='m-0 bg-gradient-to-r bg-[length:400%_400%] bg-clip-text p-0 text-[10rem] leading-none font-bold text-white'
              animate={{ y: [0, 30, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
                delay: index * 0.3,
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* NOT FOUND 텍스트 */}
        <p className='relative mt-10 max-w-[60rem] text-[2.5rem] leading-[10vh] font-thin text-white/60'>
          NOT FOUND
        </p>

        {/* 홈으로 돌아가기 btn */}
        <Link to='/main' className='flex items-center justify-center'>
          <p className='hover:from-brand-1 hover:to-brand-2 content-text relative mt-20 cursor-pointer rounded-2xl px-6 py-4 leading-none text-white hover:bg-gradient-to-r hover:text-white'>
            홈으로 돌아가기
          </p>
        </Link>
      </div>
    </div>
  );
}
