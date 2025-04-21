import Jewel from '@assets/icons/icon_jewel';

const MyCredit = ({ credit }) => {
  return (
    <>
      <div className='flex h-[8.5rem] max-w-5/8 items-center justify-between rounded-xl border border-white bg-black px-10 sm:h-[13rem]'>
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
          <button className='caption-text font-bold text-[#F96D69] sm:text-[1.6rem]'>
            충전하기
          </button>
        </div>
      </div>
    </>
  );
};

export default MyCredit;
