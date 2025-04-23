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
  if (!isOpen) return null;

  return createPortal(
    <div className='modal-overlay fixed top-0 right-0 bottom-0 left-0 flex h-screen w-screen items-center justify-center bg-black/40'>
      <div className='modal-content relative flex max-h-[80%] w-[90%] max-w-md min-w-64 flex-col rounded-2xl bg-black p-10 text-white'>
        <div className='mb-3 flex justify-between'>
          {title && <p className='content-text'>{title}</p>}
          <button
            className='content-text absolute top-9 right-10 cursor-pointer text-white/50'
            onClick={onClose}
            aria-label='모달 닫기'
          >
            &times;
          </button>
        </div>
        <div className='my-4 flex items-center justify-center overflow-hidden py-3'>
          {children}
        </div>
        {button}
        {extra && (
          <span className='caption-text mt-2 text-center'>{extra}</span>
        )}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
