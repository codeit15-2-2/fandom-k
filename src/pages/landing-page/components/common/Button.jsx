import { cn } from '@libs/cn';

const Button = ({ children }) => {
  return (
    <button
      className={cn(
        `px:18 w-80 cursor-pointer rounded-full bg-gradient-to-r from-pink-500 to-rose-400 py-2 text-3xl font-semibold text-white shadow-lg/40 transition-colors duration-300 hover:from-pink-300 hover:to-rose-200 md:w-130 md:px-24 md:py-4`,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
