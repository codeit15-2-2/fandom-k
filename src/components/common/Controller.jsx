const Controller = ({ onAdd, onAddAll, isDonate }) => {
  return (
    <div className='mt-8 mb-7.5 flex gap-3'>
      {[100, 500, 1000].map((value) => (
        <button
          className='content-text bg-navy cursor-pointer rounded-md px-[15px] py-[9px] text-xl font-bold text-white hover:opacity-50'
          key={value}
          onClick={() => onAdd(value)}
        >
          +{value.toLocaleString()}
        </button>
      ))}
      {isDonate && (
        <button
          className="content-text bg-navy hover:opacity-50' cursor-pointer rounded-md px-[15px] py-[9px] font-bold text-white"
          onClick={onAddAll}
        >
          전액
        </button>
      )}
    </div>
  );
};

export default Controller;
