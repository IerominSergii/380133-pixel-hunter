import {assert} from 'chai';
import {createTimer} from './timer.js';

describe(`Check createTimer function`, () => {
  it(`should throws Error if time is not a number`, () => {
    assert.throws(() => createTimer([-3]), `Wrong type Expect number type`);
  });

  it(`should throws Error if time is not an integer`, () => {
    assert.throws(() => createTimer(2.1), `Time should be integer`);
  });

  it(`should throws Error if time is less than 0`, () => {
    assert.throws(() => createTimer(-3), `Wrong time Expect more then 0`);
  });
});

describe(`Check tick method`, () => {
  it(`should not decrease the timer. Just create the timer`, () => {
    const newTimer = createTimer(30);
    assert.equal(newTimer.timer, 30);
  });

  it(`should decrease time by 1 if run tick once`, () => {
    const onceTimer = createTimer(30).tick();
    assert.equal(onceTimer.timer, 29);
  });

  it(`should decrease time by 2 if run tick twice`, () => {
    const twiceTimer = createTimer(30).tick().tick();
    assert.equal(twiceTimer.timer, 28);
  });
});
