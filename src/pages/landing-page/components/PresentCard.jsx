const PresentCard = () => {
  return (
    <div className='flex items-center justify-center transition-transform duration-300 hover:scale-110'>
      <div className='relative flex h-[40rem] w-md max-w-lg justify-center overflow-hidden rounded-4xl bg-black p-6'>
        <img
          src='/karina.webp'
          className='h-full w-full rounded-4xl object-cover'
          alt='present'
        />
        <div className='absolute right-0 bottom-0 left-0 h-1/2 bg-gradient-to-b from-transparent to-gray-900' />
      </div>
    </div>
  );
};

export default PresentCard;
