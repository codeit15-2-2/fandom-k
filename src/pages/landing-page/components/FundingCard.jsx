import { cn } from '@libs/cn';
import { useCardAnimation } from '@pages/landing-page/hooks/useCardAnimation';

const FundingCard = () => {
  const {
    elementRef,
    cardStyle,
    lightEffectStyle,
    handleMouseMove,
    handleMouseLeave,
    handleMouseEnter,
  } = useCardAnimation({ x: 30, y: 30 });

  return (
    <div className='group relative perspective-[1000px]'>
      <div
        ref={elementRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className={cn(
          'relative flex h-[40rem] w-sm flex-col gap-2 overflow-hidden rounded-3xl',
          'border-2 border-black will-change-transform',
        )}
        style={cardStyle}
      >
        <div className='h-full w-full overflow-hidden rounded-3xl bg-black'>
          <img
            src='https://velog.velcdn.com/images/justhighway/post/b62fb4e5-79b5-4ee6-a539-014d5fc72dd2/image.webp'
            className='h-full w-full object-cover brightness-90'
            alt='funding card'
          />
          {/* 광택 효과 */}
          <div
            className='pointer-events-none absolute inset-0 opacity-70 mix-blend-screen'
            style={lightEffectStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default FundingCard;
