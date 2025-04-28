import { cn } from '@libs/cn';
import { useNavigate } from 'react-router-dom';

const Button = ({ children }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    navigate('/main');
  };

  return (
    <button
      className={cn(
        // Base styles
        'w-90 cursor-pointer rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-12 py-4 text-2xl font-semibold text-white shadow-lg/40 transition-colors duration-300',
        // Hover styles
        'hover:from-pink-300 hover:to-rose-200',
        // Responsive overrides
        'md:w-130 md:px-24 md:py-6 md:text-3xl',
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
