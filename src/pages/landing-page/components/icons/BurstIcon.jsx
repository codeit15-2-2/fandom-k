function BurstIcon({ size = 100, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('inline-block', className)}
      fill='currentColor'
    >
      <g transform='translate(50,50)'>
        <circle cx='0' cy='0' r='20' />
        {[...Array(12)].map((_, i) => (
          <polygon
            key={i}
            points='0,-40 4,-20 -4,-20'
            transform={`rotate(${i * 30})`}
          />
        ))}
      </g>
    </svg>
  );
}

export default BurstIcon;
