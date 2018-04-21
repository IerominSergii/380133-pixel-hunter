import {assert} from 'chai';
import {getSingle} from './questionSingle.js';

describe(`Check renderSingle`, () => {
  it(`should return Single-template`, () => {
    const option = {
      src: `http://placehold.it/705x455`,
      alt: `Option 1`,
      name: `question1`,
      answer: `paint`,
    };

    const testCallback = () => {
      const testElement = document.querySelector(`.game__task`);
      testElement.setAttribute(`color`, `green`);

    };

    assert.equal(getSingle(option, testCallback), -1);
  });
});
