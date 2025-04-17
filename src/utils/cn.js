import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...args) => {
  const merged = twMerge(clsx(...args));
  return merged;
};

export { cn };
