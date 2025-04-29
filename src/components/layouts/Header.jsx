import Logo from '@assets/logos/logo.webp';
import Default from '../../assets/images/img_default-profile.webp';
import { Link } from 'react-router-dom';
import useCredit from '@hooks/useCredit';
import CreditIcon from '@assets/icons/icon_credit';
import useModal from '@hooks/useModal';
import CreditModal from '@pages/main-page/components/CreditModal';
import PlusIcon from '@assets/icons/icon_plus';
import { useToast } from '@contexts/ToastContext';

export default function Header() {
  const { credit, handleChargeCredit } = useCredit();
  const creditModal = useModal();
  const { showSuccess, showError } = useToast();

  // 크레딧 충전 핸들러
  const handleCharge = (amount) => {
    try {
      handleChargeCredit(amount);
      showSuccess(`${amount.toLocaleString()}크레딧 충전이 완료되었습니다!`);
      creditModal.close();
    } catch (error) {
      showError('크레딧 충전에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <header className='relative z-50 m-auto flex h-[5rem] w-full items-center justify-center bg-black p-10 sm:h-[8rem]'>
      <div className='absolute top-0 z-101 m-auto flex h-[8rem] w-full max-w-[120rem] items-center justify-between bg-black px-20 sm:h-[8rem]'>
        <div className='flex w-1/3 justify-start'>
          <div
            onClick={creditModal.open}
            className='cursor-pointer rounded-full border-[1.5px] border-white/50 px-2 py-1 sm:px-4 sm:py-3'
          >
            <p className='text flex items-center font-bold text-white sm:text-xl'>
              <CreditIcon className='mr-2 h-4 w-6 sm:h-5 md:h-6' />
              {credit || '0'}
              <span className='hover:text-brand-1 transition-color sm:siz-6 ml-6 flex size-5 items-center justify-center rounded-full bg-white/30 leading-none text-black transition-all hover:bg-white md:size-7'>
                <PlusIcon />
              </span>
            </p>
          </div>
        </div>
        <div className='flex w-1/3 justify-center'>
          <Link to='/main' className='flex items-center justify-center'>
            <img
              src={Logo}
              alt='Fandom-K logo'
              className='h-[3rem] sm:h-[4rem] md:h-[4.5rem]'
            />
          </Link>
        </div>
        <div className='flex w-1/3 justify-end'>
          <Link to='/mypage' className='flex items-center justify-center'>
            <img
              src={Default}
              alt='empty profile Img'
              className='size-[3rem] rounded-full sm:size-[4rem] md:size-[4.5rem]'
            />
          </Link>
        </div>
      </div>
      <CreditModal
        creditModal={creditModal}
        credit={credit}
        handleChargeCredit={handleCharge}
      ></CreditModal>
    </header>
  );
}
