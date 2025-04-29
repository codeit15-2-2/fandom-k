import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

/**
 * @typedef {Object} ModalProps
 * @property {string} [title] - 모달 상단에 표시될 제목 (선택사항)
 * @property {React.ReactNode} [button] - 컴포넌트로 가져와 사용할 버튼
 * @property {React.ReactNode} children - 모달 본문에 표시될 내용
 * @property {string} [extra] - 모달 내용 아래에 표시될 추가 텍스트 (선택사항)
 * @property {boolean} isOpen - 모달의 표시 여부를 제어
 * @property {Function} onClose - 모달을 닫을 때 호출할 함수
 */

/**
 * 모달 컴포넌트
 *
 * @param {ModalProps} props - 컴포넌트 속성
 * @returns {React.ReactPortal|null} 모달 포털 또는 닫혀있을 때 null
 *
 * @example
 * // 기본 사용 방법
 * const {isOpen, open, close} = useModal();
 *
 * return (
 * <>
 *    <button onClick={open}>모달 열기</button>
 *    <Modal isOpen={isOpen} onClose={close} title="타이틀">
 *      모달에 들어갈 내용을 여기 작성
 *    </Modal>
 * </>
 * );
 */

const Modal = ({ title, button, children, extra, isOpen, onClose }) => {
  // 모달 외부 클릭 처리
  const handleOverlayClick = (e) => {
    // 오버레이 영역을 클릭했을 때만 모달 닫기 (모달 컨텐츠 클릭 시 닫히지 않도록)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // 간단하게 body 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);
  return createPortal(
    <AnimatePresence mode='wait'>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='modal-overlay fixed top-0 right-0 bottom-0 left-0 z-102 flex h-screen w-screen items-center justify-center bg-[#000000]/70'
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className='modal-content relative flex max-h-[100%] w-2xl max-w-[60rem] min-w-[40rem] flex-col rounded-2xl bg-[#181D26] p-10 text-white'
          >
            <div className='flex justify-between'>
              {title && <p className='content-text'>{title}</p>}
              <button
                className='content-text absolute top-9 right-10 z-99 cursor-pointer text-white/50'
                onClick={onClose}
                aria-label='모달 닫기'
              >
                <span className='text-5xl'>&times;</span>
              </button>
            </div>
            <div className='my-4 flex flex-col items-center justify-center gap-5 py-3'>
              {children}
            </div>
            {button}
            {extra && (
              <span className='caption-text mt-2 text-center'>{extra}</span>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Modal;
