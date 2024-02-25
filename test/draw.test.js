/* eslint-disable no-useless-escape */
import { drawCard } from '../src/draw.js';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('Draw card', () => {
  it.skip('Should return card with name and illustration', () => {
    const result = drawCard(0);
    console.log(result);
    expect(result).to.equal(
      `
The Fool


        .-------------------.
        |         0  *  *{  |
        |             *  *\`~|
        |       /P  *   *  *|
        |      / ###~8     *|
        |     / (^◡^)       |
        |    /  /   \\\    ❀  |
        |  E/==/\\\❀-❀/\\\===3  |
        |       /   \\\       |
        |      /~~~~~\\\      |
        |       (/(/   /\\\_;\\\|
        |     ;\\\|| \\\\\~/     |
        | ;\\\~/  ||  \\\\\      |
        |/     od   o/      |
        |                   |
        |            U(･ｪ･)U|
        |              m m  |
        |-------------------|
        |      The Fool     |
        \`-------------------´
        `,
    );
  });
});
