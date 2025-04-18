import Button from '@pages/landing-page/components/Button';

const gradient =
  'bg-gradient-to-r from-pink-500 to-rose-400';

const HeroSection = () => {
  return (
    <section className='relative flex h-screen w-full snap-start snap-always flex-col items-center justify-center gap-12 overflow-hidden text-white'>
      {/* 배경 이미지 레이어 */}
      <div className="absolute inset-0 bg-[url('https://velog.velcdn.com/images/justhighway/post/f96fa72b-d6cd-4c52-8e8f-6e8c11f0ea7d/image.jpeg')] bg-cover bg-fixed bg-center" />

      {/* 어두운 오버레이 */}
      <div className='absolute inset-0 bg-black/30' />

      {/* 하단 그라데이션 오버레이 */}
      <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black' />

      {/* 콘텐츠 컨테이너 */}
      <div className='relative z-10 text-center'>
        <h1
          className={`${gradient} mb-12 bg-clip-text font-serif text-9xl font-bold text-transparent`}
        >
          Fandom-K
        </h1>

        <h2 className='mb-8 text-6xl/20 font-semibold'>
          나를 설레게 했던 순간,
          <br />
          이제는 내가 답할 차례
        </h2>

        <Button />
      </div>
    </section>
  );
};

export default HeroSection;
