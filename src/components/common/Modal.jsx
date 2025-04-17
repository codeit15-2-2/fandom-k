import { createPortal } from 'react-dom';

/* 사용방법
1. 모달을 사용하고 싶은 곳에 import한다.
2. <Modal>콘텐츠 내용</Modal> 을 입력한다.
3. useModal() 훅을 사용한다.
4. useModal()을 destructing해서 {isOpen, open, close}를 가져온다. {isOpen, open, close} = useModal();
5. 모달 컴포넌트에 isOpen, close를 Props로 내려준다. isOpen={isOpen}, onClose(close)
6. open은 모달을 열고 싶은 버튼에 onClick 이벤트로 넣어준다.
7. 추가로 props로 title, button, extra를 보내줄 수 있다.
*/

const Modal = ({ title, button, children, extra, isOpen, onClose }) => {
  if (!isOpen) return;

  return createPortal(
    <div className='modal-overlay fixed top-0 right-0 bottom-0 left-0 flex h-screen w-screen items-center justify-center bg-black/40'>
      <div className='modal-content flex w-9/10 max-w-md min-w-64 flex-col bg-black p-10 text-white'>
        <div className='relative flex justify-between'>
          {title && <p className='content-text'>{title}</p>}
          <button
            className='content-text absolute -top-6 right-0 text-white'
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className='my-4 flex items-center justify-center'>{children}</div>
        <button>버튼 컴포넌트 가져오기</button>
        {extra && (
          <span className='caption-text mt-2 text-center'>{extra}</span>
        )}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
