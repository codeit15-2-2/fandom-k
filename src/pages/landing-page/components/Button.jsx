const gradient = 'bg-gradient-to-r from-pink-500 to-rose-400';
const hoverGradient = 'hover:from-pink-400 hover:to-rose-300';

const Button = ({ children }) => {
  return (
    <button
      className={`${gradient} ${hoverGradient} z-10 w-130 rounded-2xl px-24 py-4 text-3xl font-semibold text-white shadow-lg/40 transition-colors duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
