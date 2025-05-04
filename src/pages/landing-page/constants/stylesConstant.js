/**
 * @deprecated - 이 파일의 상수들은 현재 사용되지 않습니다.
 * 새로운 스타일 적용시 constants/layouts.js를 참고하세요.
 */

const DEFAULT_STYLES = {
  SNAP_CONTAINER:
    'flex h-screen w-screen snap-start snap-always flex-col items-center justify-center overflow-hidden text-white',
  BRAND_GRADIENT: 'bg-gradient-to-r from-pink-500 to-rose-400',
  DARK_OVERLAY: 'absolute inset-0 bg-black/30',
  BOTTOM_GRADIENT:
    'absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black/100',
};

const BACKGROUND_STYLES = {
  FIXED: 'absolute inset-0 bg-cover bg-center',
};

// 사용되지 않는 상수이므로 직접 import하지 않도록 주의하세요
export { DEFAULT_STYLES, BACKGROUND_STYLES };
