import Logo from '@assets/logos/logo.png';
import Default from '../../assets/images/img_default-profile.webp';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className='relative z-101 m-auto flex h-[5rem] w-full justify-center bg-black p-10 sm:h-[8rem]'>
      <div className='absolute top-0 z-101 m-auto flex h-[8rem] w-full max-w-[120rem] justify-between bg-black sm:h-[8rem]'>
        <div></div>
        <Link to='/main' className='flex items-center justify-center'>
          <img
            src={Logo}
            alt='Fandom-K logo'
            className='h-[3.5rem] sm:h-[4rem] md:h-[4.5rem]'
          />
        </Link>
        <Link to='/mypage' className='flex items-center justify-center'>
          <img
            src={Default}
            alt='empty profile Img'
            className='h-[3.2rem] w-[3.2rem] rounded-full'
          />
        </Link>
      </div>
    </header>
  );
}
