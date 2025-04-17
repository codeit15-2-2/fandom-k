const LogoSvg = () => {
  return (
    <svg
      viewBox='0 0 600 100'
      className='animate-draw mx-auto h-32 w-full fill-pink-400 stroke-pink-400 stroke-2'
    >
      <text
        x='50%'
        y='50%'
        dominantBaseline='middle'
        textAnchor='middle'
        className='font-logo animate-[draw_4s_ease-out_forwards] text-7xl'
      >
        Fandom-K
      </text>
    </svg>
  );
};

export default LogoSvg;
