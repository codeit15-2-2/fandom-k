import { motion } from 'motion/react';
import FundingCard from '@pages/landing-page/components/card/FundingCard';

const SlideCard = () => {
  const cards = Array.from({ length: 20 });

  return (
    <div className='max-w-[150rem] overflow-hidden mask-x-from-50% mask-x-to-90% p-24'>
      <motion.div
        className='flex gap-8'
        animate={{ x: ['50%', '-100%'] }}
        transition={{
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {cards.map((_, index) => (
          <motion.div
            key={index}
            animate={{ y: [20, -20, 20] }}
            transition={{
              duration: 4,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: index * 1,
            }}
          >
            <FundingCard />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SlideCard;
