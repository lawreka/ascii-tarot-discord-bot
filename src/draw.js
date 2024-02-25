import { deck } from './cards.js';

export const drawCardName = (x) => {
  return deck[x].name;
};

// only used if text version not discord cdn links
// export const drawCard = (x) => {
//   const name = deck[x].name;
//   const card = deck[x].card;
//   return `
// ${name}

// ${card}`;
// };

export const drawCardImageUrl = (x) => {
  return deck[x].card;
};
