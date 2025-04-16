import { createPortal } from 'react-dom';

const Modal = ({ title, children, isOpen, onClose }) => {
  if (!isOpen) return;

  return createPortal(
    <div className='modal-overlay'>
      <div className='modal-content'>
        <div>
          <p>{title}</p>
          <button onClick={onClose}>&times;</button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
