const BackgroundIdolImage = ({ imgSrc }) => {
  return (
    <div
      className='absolute inset-0 hidden bg-cover bg-center md:block'
      style={{
        backgroundImage: `
        linear-gradient(to right, transparent, rgba(0,0,0,0.8)),
        linear-gradient(to bottom, transparent, rgba(0,0,0,0.3), black),
        url(${imgSrc})
      `,
      }}
    />
  );
};

export default BackgroundIdolImage;
