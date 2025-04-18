const CardImg = ({ src, title, isHover }) => {
  return (
    <div>
      <img
        src={src}
        alt={title}
        className='w-full rounded-2xl object-contain'
      />
      {isHover && (
        <div className='absolute bottom-0 z-10 h-24 w-full bg-gradient-to-t from-black/100 to-transparent' />
      )}
    </div>
  );
};

export default CardImg;
