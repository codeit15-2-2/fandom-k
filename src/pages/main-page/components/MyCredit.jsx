import Jewel from '@assets/icons/icon_jewel';

const MyCredit = ({ credit, open }) => {
  return (
    <>
      <div className='my-10 flex h-[8.5rem] w-full max-w-[120rem] items-center justify-between rounded-xl border border-white bg-black px-10 sm:h-[13rem]'>
        <div className='flex flex-col justify-center'>
          <p className='caption-text text-white/60 sm:text-[1.6rem]'>
            내 크레딧
          </p>
          <p className='flex items-center text-[2rem] font-bold text-white sm:text-[2.4rem]'>
            <Jewel />
            {credit || '0'}
          </p>
        </div>
        <div className='flex items-center'>
          <button
            onClick={open}
            className='caption-text cursor-pointer font-bold text-[#F96D69] sm:text-[1.6rem]'
          >
            충전하기
          </button>
        </div>
      </div>
    </>
  );
};

export default MyCredit;
