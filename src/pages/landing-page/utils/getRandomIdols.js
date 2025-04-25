import { idolsList } from '@pages/landing-page/mocks/idolsList';

const getRandomIdols = (count = 7) => {
  const shuffled = [...idolsList].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export { getRandomIdols };
