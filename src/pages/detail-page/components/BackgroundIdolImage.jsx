const BackgroundIdolImage = ({ imgSrc }) => {
  return (
    <div className='absolute inset-0 hidden md:block'>
      <img src={imgSrc} alt='idol' className='h-full w-full object-cover' />

      <div className='absolute inset-0 bg-gradient-to-r from-transparent to-black/80'></div>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black'></div>
    </div>
  );
};

export default BackgroundIdolImage;
