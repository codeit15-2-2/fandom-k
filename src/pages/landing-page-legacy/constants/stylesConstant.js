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

export { DEFAULT_STYLES, BACKGROUND_STYLES };
