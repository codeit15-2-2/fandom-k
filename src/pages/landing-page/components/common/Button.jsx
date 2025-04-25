import { cn } from '@libs/cn';

const Button = ({ children }) => {
  return (
    <button
      className={cn(
        `w-130 cursor-pointer rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-24 py-4 text-3xl font-semibold text-white shadow-lg/40 transition-colors duration-300 hover:from-pink-300 hover:to-rose-200`,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
