import { createContext, useContext } from 'react';
import toast from 'react-hot-toast';

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast는 ToastProvider 내부에서 사용해야 합니다.');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const showSuccess = (message) => toast.success(message);
  const showError = (message) => toast.error(message);
  const showLoading = (message) => toast.loading(message);
  const dismiss = toast.dismiss;

  const value = {
    showSuccess,
    showError,
    showLoading,
    dismiss,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};
