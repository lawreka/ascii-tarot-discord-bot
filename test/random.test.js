import { getRandomCard } from '../src/random.js';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('Get random number', () => {
  it('Should return a random number from random.org', async () => {
    const response = await getRandomCard();
    console.log(response);
    expect(response).to.be.a('number');
  });
  it('Should still return a random number if random.org fails', async () => {
    const response = await getRandomCard(true);
    console.log(response);
    expect(response).to.be.a('number');
  });
});
