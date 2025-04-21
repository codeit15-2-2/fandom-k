import Remove from '@assets/icons/icon_remove';

const RemoveButton = () => {
  return (
    <div className='absolute right-0 z-100 h-fit w-fit cursor-pointer rounded-full border-3 border-black bg-white p-2'>
      <Remove />
    </div>
  );
};

export default RemoveButton;
