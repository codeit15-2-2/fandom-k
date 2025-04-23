import { useState } from 'react';
import DonateModal from './DonateModal';
import profile from '@assets/images/img_empty-profile.webp';

export default function DetailPage() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className='p-8'>
      <button
        className='rounded bg-blue-500 px-4 py-2 text-white'
        onClick={openModal}
      >
        후원 모달 열기
      </button>

      <DonateModal
        isOpen={isOpen}
        close={closeModal}
        donateId={123}
        cardItem={{
          id: 3,
          img: profile,
          title: '르세라핌 하이하이',
          location: '강남역 광고',
        }}
        credit={10000}
        isDonate
      />
    </div>
  );
}
