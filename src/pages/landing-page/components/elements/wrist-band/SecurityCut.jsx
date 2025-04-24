const ZigZag = ({ color }) => {
  return (
    <div className='flex flex-col gap-2 md:gap-6'>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className={`bg-${color} h-[0.2rem] w-4 rounded-full md:w-[2rem]`}
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
