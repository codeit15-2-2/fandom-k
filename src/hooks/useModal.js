import { useState } from 'react';

/**
 * 모달 상태 관리를 위한 커스텀 훅
 *
 * @returns {Object} 모달 제어 메서드
 * @returns {boolean} Object.isOpen - 모달이 현재 열려있는지 여부
 * @returns {Function} Object.open - 모달을 여는 함수
 * @returns {Function} Object.close - 모달을 닫는 함수
 *
 * @example
 * const { isOpen, open, close } = useModal();
 */

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close };
};

export default useModal;
