const ZigZag = ({ color }) => {
  return (
    <div className='flex flex-col md:gap-6'>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className={`bg-${color} h-4 w-1 rounded-full md:h-[0.2rem] md:w-[2rem]`}
          style={{
            transform: `rotate(${i % 2 === 0 ? -60 : 60}deg)`,
          }}
        />
      ))}
    </div>
  );
};

const SecurityCut = ({ color }) => {
  return (
    <div className='flex'>
      {Array.from({ length: 5 }).map((_, i) => (
        <ZigZag key={i} color={color} />
      ))}
    </div>
  );
};

export default SecurityCut;
