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
    <header className='relative z-101 m-auto flex h-[5rem] w-full items-center justify-center bg-black p-10 sm:h-[8rem]'>
      <div className='absolute top-0 z-101 m-auto flex h-[8rem] w-full max-w-[120rem] items-center justify-between bg-black px-20 sm:h-[8rem]'>
        <div
          onClick={creditModal.open}
          className='p- cursor-pointer rounded-full border-[1.5px] border-white/50 px-4 py-3'
        >
          <p className='flex items-center text-xl font-bold text-white sm:text-xl'>
            <CreditIcon className='mr-2 h-6 w-6' />
            {credit || '0'}
            <span className='hover:text-brand-1 transition-color ml-6 flex size-7 items-center justify-center rounded-full bg-white/30 leading-none text-black transition-all hover:bg-white'>
              <PlusIcon />
            </span>
          </p>
        </div>
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
      <CreditModal
        creditModal={creditModal}
        credit={credit}
        handleChargeCredit={handleCharge}
      ></CreditModal>
    </header>
  );
}
