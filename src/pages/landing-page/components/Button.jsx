const gradient =
  'bg-gradient-to-r from-pink-500 to-rose-400';
const hoverGradient =
  'hover:from-pink-400 hover:to-rose-300';

const Button = () => {
  return (
    <button
      className={`${gradient} ${hoverGradient} sub-title-text rounded-full px-24 py-4 text-white shadow-lg/40 transition-colors duration-300`}
    >
      지금 시작하기
    </button>
  );
};

export default Button;
