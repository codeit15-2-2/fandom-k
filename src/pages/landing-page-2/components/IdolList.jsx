const IdolList = ({ img, rank, name, votes }) => {
  return (
    <div className='flex w-full items-center justify-center gap-8 border-b border-white/30 px-12 py-8 text-3xl'>
      <div className='border-brand-2 rounded-full border-2 p-2'>
        <img src={img} alt='애스파' className='w-24 rounded-full' />
      </div>
      <div className='text-brand-2 text-5xl font-bold'>
        {rank}
        <span className='text-2xl'>위</span>
      </div>
      <div className='flex-1 font-semibold'>aespa {name}</div>
      <div className='font-bold'>{votes}</div>
    </div>
  );
};

export default IdolList;
