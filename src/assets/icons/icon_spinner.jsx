import { cn } from '@utils/cn';

const Spinner = ({ className = '' }) => {
  return (
    <svg
      className={cn('h-10 w-10 animate-spin text-white', className)}
      viewBox='0 0 24 24'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <circle cx='3' cy='12' r='2' />
        <circle cx='21' cy='12' r='2' />
        <circle cx='12' cy='21' r='2' />
        <circle cx='12' cy='3' r='2' />
        <circle cx='5.64' cy='5.64' r='2' />
        <circle cx='18.36' cy='18.36' r='2' />
        <circle cx='5.64' cy='18.36' r='2' />
        <circle cx='18.36' cy='5.64' r='2' />
      </g>
    </svg>
  );
};

export default Spinner;
