import {assert} from 'chai';
import {checkGameResult} from './checkResults.js';

describe(`Check game points`, () => {
  it(`should complete ALL game questions`, () => {
    const testData1 = [10, 2, 3, 4, 5, 5, `string`, 7, 8];
    assert.equal(checkGameResult(testData1), -1);
    const testData2 = [10, 2, 3, 4, 5, 5, 6];
    assert.equal(checkGameResult(testData2), -1);
    const testData3 = [10, 2, 3, 4, 5];
    assert.equal(checkGameResult(testData3), -1);
    const testData4 = [10];
    assert.equal(checkGameResult(testData4), -1);
  });

  it(`should not allow a wrong type`, () => {
    const errorMessage = `Wrong type of results. Expected array`;
    // if got number instead array
    assert.throws(() => checkGameResult([103]), errorMessage);
    // if got string instead array
    assert.throws(() => checkGameResult([`testString`]), errorMessage);
    // if got boolean instead array
    assert.throws(() => checkGameResult([true]), errorMessage);
    // if got undefined instead array
    let testUndefined;
    const testUndefinedData = [testUndefined];
    assert.throws(() => checkGameResult(testUndefinedData), errorMessage);
  });

  it(`should count according answerValue (answer time)`, () => {
    const testResults1 = [`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `wrong`, `wrong`];
    const testLife1 = 1;
    assert.equal(checkGameResult(testResults1, testLife1), 850);

    const testResults2 = [`fast`, `fast`, `fast`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`];
    const testLife2 = 3;
    assert.equal(checkGameResult(testResults2, testLife2), 1300);

    const testResults3 = [`wrong`, `wrong`, `slow`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`];
    const testLife3 = 1;
    assert.equal(checkGameResult(testResults3, testLife3), 800);

    const testResults4 = [`wrong`, `fast`, `fast`, `slow`, `slow`, `slow`, `correct`, `correct`, `correct`, `correct`];
    const testLife4 = 2;
    assert.equal(checkGameResult(testResults4, testLife4), 950);

    const testResults5 = [`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`];
    const testLife5 = 3;
    assert.equal(checkGameResult(testResults5, testLife5), 1150);
  });
});

describe(`Check game lifes`, () => {
  it(`should not allow the life amount less than 0`, () => {
    const testLife = -2;
    assert.throws(() => checkGameResult(testLife), `Wrong life amount. It can't be less than 0`);
  });
});
