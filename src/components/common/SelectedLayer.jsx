import Checked from '@assets/icons/icon_checked';

const SelectedLayer = () => {
  return (
    <div className='absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-[rgba(249,109,105,0.5)]'>
      <Checked />
    </div>
  );
};

export default SelectedLayer;
