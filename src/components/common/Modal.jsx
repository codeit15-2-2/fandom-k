import { createPortal } from 'react-dom';

const Modal = ({
  title = '타이틀',
  button,
  children,
  extra,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return;

  return createPortal(
    <div className='modal-overlay fixed top-0 right-0 bottom-0 left-0 flex h-screen w-screen items-center justify-center bg-black/40'>
      <div className='modal-content flex aspect-square w-9/10 max-w-1/5 flex-col bg-sky-950 p-10 text-white'>
        <div className='flex justify-between'>
          {title && <p>{title}</p>}
          <button onClick={onClose}>&times;</button>
        </div>
        <div className='flex h-8/10 items-center justify-center'>
          {children}
        </div>
        <button>버튼 컴포넌트 가져오기</button>
        {extra && <span className='text-center'>{extra}</span>}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
