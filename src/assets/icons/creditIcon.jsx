const CreditIcon = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
    >
      <path fill='#fff' d='M7.5 10 10 6.25 12.5 10 10 13.75 7.5 10Z' />
      <path
        fill='url(#a)'
        fillRule='evenodd'
        d='m10 0 6.875 9.843L10 19.65 3.125 9.843 10 0ZM4.63 9.841 10 17.503l5.37-7.662L10 2.153 4.63 9.841Z'
        clipRule='evenodd'
      />
      <defs>
        <linearGradient
          id='a'
          x1='10'
          x2='10'
          y1='0'
          y2='19.651'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF8282' />
          <stop offset='1' stopColor='#F96969' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CreditIcon;
