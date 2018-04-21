import {assert} from 'chai';
import {questions} from './questions-data.js';

describe(`Check createTimer function`, () => {
  it(`should be an Array-type`, () => {
    assert.equal(Array.isArray(questions), true);
  });
});
