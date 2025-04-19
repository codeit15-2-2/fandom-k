import Button from '@pages/landing-page/components/Button';
import logoSvg from '@pages/landing-page/assets/logo.svg';
import Background from '@pages/landing-page/components/Background';
import DarkOverlay from '@pages/landing-page/components/DarkOverlay';
import DarkGradientOverlay from '@pages/landing-page/components/DarkGradientOverlay';

const HeroSection = () => {
  return (
    <section className='relative flex h-screen w-full snap-start snap-always flex-col items-center justify-center gap-12 overflow-hidden text-white'>
      <Background
        assetPath={
          'https://velog.velcdn.com/images/justhighway/post/f96fa72b-d6cd-4c52-8e8f-6e8c11f0ea7d/image.jpeg'
        }
      />
      <DarkOverlay />
      <DarkGradientOverlay />
      <div className='relative z-10 flex flex-col items-center justify-center gap-10'>
        <img src={logoSvg} alt='Fandom-K 로고' className='ml-10 w-[35rem]' />

        <h1 className='mb-8 text-6xl/20 font-semibold'>
          나를 설레게 했던 순간
          <br />
          이제는 내가 답할 차례
        </h1>

        <Button>시작하기</Button>
      </div>
    </section>
  );
};

export default HeroSection;
