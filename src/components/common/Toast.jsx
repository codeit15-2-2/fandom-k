import { Toaster } from 'react-hot-toast';
import useDeviceSize from '@hooks/useDeviceSize';

/**
 * @fileoverview 전역적으로 사용되는 토스트 메시지 컴포넌트
 * @requires react-hot-toast
 *
 * @description
 * 이 컴포넌트는 애플리케이션 전역에서 사용되는 토스트 메시지를 표시합니다.
 * 디바이스 크기에 따라 위치가 달라집니다:
 * - 데스크톱 및 태블릿: 우측 하단
 * - 모바일: 하단 중앙
 * 성공/실패/로딩 등의 다양한 상태에 따른 스타일을 제공합니다.
 */
const Toast = () => {
  const { isMobile } = useDeviceSize();

  // 디바이스 크기에 따른 토스트 위치 설정
  const toastPosition = isMobile ? 'bottom-center' : 'bottom-center';

  // 토스트 메시지의 공통 스타일 정의
  const baseToastStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    width: '50rem',
    padding: '18px',
    borderRadius: '9999px',
    color: '#ffffff',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.9)',
    background: '#34383f',
  };

  return (
    <Toaster
      // 토스트 메시지의 위치 설정 (디바이스 크기에 따라 동적 변경)
      position={toastPosition}
      // 토스트 메시지의 순서를 반대로 표시할지 여부 (false: 최신 메시지가 아래에 표시)
      reverseOrder={false}
      // 토스트 메시지 간의 간격 (8px)
      gutter={14}
      // 토스트 컨테이너의 스타일
      containerStyle={{
        position: 'fixed',
        zIndex: 9999,
      }}
      // 토스트 메시지의 기본 옵션 설정
      toastOptions={{
        // 기본 토스트 메시지 스타일
        style: {
          ...baseToastStyle,
        },
        // 토스트 메시지가 자동으로 사라지는 시간 (5초)
        duration: 5000,
        // 성공 토스트 메시지 스타일
        success: {
          // 성공 메시지는 3초 후 자동으로 사라짐
          duration: 3000,
          // 성공 메시지 스타일 (초록색 배경)
          style: {
            ...baseToastStyle,
            border: '2px solid #10B981',
          },
        },
        // 에러 토스트 메시지 스타일
        error: {
          // 에러 메시지는 4초 후 자동으로 사라짐
          duration: 4000,
          // 에러 메시지 스타일 (빨간색 배경)
          style: {
            ...baseToastStyle,
            border: '2px solid #EF4444',
          },
        },
        // 로딩 토스트 메시지 스타일
        loading: {
          style: {
            ...baseToastStyle,
            background: '#4B5563',
          },
        },
      }}
    />
  );
};

export default Toast;
