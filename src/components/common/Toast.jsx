import { Toaster } from 'react-hot-toast';

/**
 * @fileoverview 전역적으로 사용되는 토스트 메시지 컴포넌트
 * @module components/common/Toast
 * @requires react-hot-toast
 *
 * @description
 * 이 컴포넌트는 애플리케이션 전역에서 사용되는 토스트 메시지를 표시합니다.
 * 하단 중앙에 위치하며, 성공/실패/로딩 등의 다양한 상태에 따른 스타일을 제공합니다.
 * Tailwind CSS를 사용하여 스타일링됩니다.
 *
 * @example
 * // App.jsx에서 사용 예시
 * import Toast from '@components/common/Toast';
 *
 * function App() {
 *   return (
 *     <>
 *       <OtherComponents />
 *       <Toast />
 *     </>
 *   );
 * }
 */
const Toast = () => {
  return (
    <Toaster
      // 토스트 메시지의 위치 설정 (하단 중앙)
      position='bottom-center'
      // 토스트 메시지의 순서를 반대로 표시할지 여부 (false: 최신 메시지가 아래에 표시)
      reverseOrder={false}
      // 토스트 메시지 간의 간격 (8px)
      gutter={8}
      // 토스트 컨테이너의 스타일
      containerStyle={{
        position: 'fixed',
        zIndex: 50,
        bottom: '80px',
      }}
      // 토스트 메시지의 기본 옵션 설정
      toastOptions={{
        // 기본 토스트 메시지 스타일
        style: {
          background: '#fff',
          color: '#363636',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          fontSize: '1.3rem',
          fontWeight: '600',
          width: '50rem',
          borderRadius: '9999px',
        },
        // 토스트 메시지가 자동으로 사라지는 시간 (5초)
        duration: 5000,
        // 성공 토스트 메시지 스타일
        success: {
          // 성공 메시지는 3초 후 자동으로 사라짐
          duration: 3000,
          // 성공 메시지 스타일 (초록색 배경)
          style: {
            background: '#10B981',
            color: '#fff',
            fontSize: '1.3rem',
            fontWeight: '600',
            width: '50rem',
            padding: '20px',
            borderRadius: '9999px',
          },
        },
        // 에러 토스트 메시지 스타일
        error: {
          // 에러 메시지는 4초 후 자동으로 사라짐
          duration: 4000,
          // 에러 메시지 스타일 (빨간색 배경)
          style: {
            background: '#EF4444',
            color: '#fff',
            fontSize: '1.3rem',
            fontWeight: '600',
            width: '50rem',
            padding: '20px',
            borderRadius: '9999px',
          },
        },
        loading: {
          style: {
            background: '#4B5563',
            color: '#fff',
            fontSize: '1.3rem',
            fontWeight: '600',
            width: '50rem',
            padding: '20px',
            borderRadius: '9999px',
          },
        },
      }}
    />
  );
};

export default Toast;
