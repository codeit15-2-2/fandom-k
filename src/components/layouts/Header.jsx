import React from 'react';

export default function Header() {
  return (
    <header className='grid h-[5rem] w-full grid-cols-3 bg-black sm:h-[8rem]'>
      <div></div>
      <div className='flex items-center justify-center'>
        <img
          src='src\assets\images\img_fandom-k-logo.webp'
          alt='Fandom-K logo'
          className='h-[2rem] sm:h-[2.2rem] md:h-[3.2rem]'
        />
      </div>
      <div className='flex items-center justify-center'>
        <img
          src='src\assets\images\img_empty-profile.webp'
          alt='empty profile Img'
          className='h-[3.2rem] w-[3.2rem] rounded-full'
        />
      </div>
    </header>
  );
}
