import { useContext, createContext } from 'react';

const CARD_SIZE_STYLE = {
  s: 'w-[15.8rem]',
  m: 'w-[28rem]',
};

const IdolCardContext = createContext({
  id: null,
  src: '',
  location: '',
  title: '',
  credit: 0,
  daysLeft: 0,
  onClick: () => {},
  isHover: false,
  size: 'm',
});

const IdolCardList = ({
  id,
  src,
  location,
  title,
  credit,
  daysLeft,
  onClick,
  isHover = false,
  size = 'm',
  children,
}) => {
  const contextValue = {
    id,
    src,
    location,
    title,
    credit,
    daysLeft,
    onClick,
    isHover,
    size,
  };

  const IdolCardWrapClassName = cn(
    'w-full max-w-xs overflow-hidden bg-[var(--color-black)] text-[var(--color-white)]',
    CARD_SIZE_STYLE[size],
  );
}