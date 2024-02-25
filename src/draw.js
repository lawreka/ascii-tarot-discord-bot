import { deck } from './cards.js';

export const drawCard = (x) => {
  const name = deck[x].name;
  const card = deck[x].card;
  return `
${name}

${card}`;
};
