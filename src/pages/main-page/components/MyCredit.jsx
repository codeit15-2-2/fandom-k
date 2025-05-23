import CreditIcon from '@assets/icons/icon_credit';

const MyCredit = ({ credit, open }) => {
  return (
    <div className='to-brand-2/20 my-5 flex h-[8.5rem] w-full max-w-[120rem] flex-shrink-0 items-center justify-between rounded-xl border bg-gradient-to-tl from-purple-100/5 via-purple-300/5 px-10 py-10 sm:h-[13rem]'>
      <div className='flex flex-col justify-center'>
        <p className='caption-text text-white/60 sm:text-[1.6rem]'>내 크레딧</p>
        <p className='flex items-center text-[2rem] font-bold text-white sm:text-[2.4rem]'>
          <CreditIcon className='mr-5 h-6 w-6' />
          {credit || '0'}
        </p>
      </div>
      <div className='flex items-center'>
        <button
          onClick={open}
          className='caption-text text-brand-1 cursor-pointer p-5 font-bold sm:text-[1.6rem]'
        >
          충전하기
        </button>
      </div>
    </div>
  );
};

export default MyCredit;
