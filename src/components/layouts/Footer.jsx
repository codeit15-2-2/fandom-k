import Logo from '@assets/logos/logo.webp';
import GithubIcon from '@assets/icons/icon_github';

export default function Footer() {
  return (
    <footer className='flex relative justify-center items-center py-8 w-full h-auto text-white bg-black border-t border-white/20 sm:py-10'>
      <div className='flex w-full max-w-[120rem] px-20'>
        <div className='flex flex-col gap-6 items-start'>
          <img src={Logo} alt='Fandom-K logo' className='h-12 sm:h-16' />

          <div className='flex flex-col gap-1'>
            <p className='text-sm font-medium text-white/80 sm:text-base'>
              You Moved Me — Now I move for you
            </p>
          </div>
          <div>
            <p className='text-sm text-white/60'>
              Codeit Sprint 15 Frontend Bootcamp
            </p>
            <p className='text-sm text-white/60'>Primary Project</p>
          </div>

          <a
            href='https://github.com/codeit15-2-2/fandom-k'
            target='_blank'
            rel='noopener noreferrer'
            className='flex gap-3 items-center text-base transition-colors hover:text-brand-1'
          >
            <GithubIcon className='w-6 h-6' />
            <span className='font-medium'>codeit15-2-2/fandom-k</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
