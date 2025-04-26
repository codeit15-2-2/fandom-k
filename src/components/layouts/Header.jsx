import Logo from '../../assets/images/img_fandom-k-logo.webp';
import Default from '../../assets/images/img_default-profile.webp';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className='m-auto flex h-[5rem] w-full max-w-[120rem] justify-between bg-black p-20 sm:h-[8rem]'>
      <div></div>
      <Link to='/main' className='flex items-center justify-center'>
        <img
          src={Logo}
          alt='Fandom-K logo'
          className='h-[2rem] sm:h-[2.2rem] md:h-[3.2rem]'
        />
      </Link>
      <Link to='/mypage' className='flex items-center justify-center'>
        <img
          src={Default}
          alt='empty profile Img'
          className='h-[3.2rem] w-[3.2rem] rounded-full'
        />
      </Link>
    </header>
  );
}
