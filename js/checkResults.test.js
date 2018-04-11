import {assert} from 'chai';
import {checkGameResult} from './checkResults.js';

describe(`Check game points`, () => {
  it(`should complete ALL game questions`, () => {
    const testData1 = {answers: [10, 2, 3, 4, 5, 5, `string`, 7, 8]};
    assert.equal(checkGameResult(testData1), -1);
    const testData2 = {answers: [10, 2, 3, 4, 5, 5, 6]};
    assert.equal(checkGameResult(testData2), -1);
    const testData3 = {answers: [10, 2, 3, 4, 5]};
    assert.equal(checkGameResult(testData3), -1);
    const testData4 = {answers: [10]};
    assert.equal(checkGameResult(testData4), -1);
  });

  it(`should not allow a wrong type`, () => {
    const errorMessage = `Wrong type of answers. Expected array`;
    // if got number instead array
    assert.throws(() => checkGameResult({answers: 103}), errorMessage);
    // if got string instead array
    assert.throws(() => checkGameResult({answers: `testString`}), errorMessage);
    // if got boolean instead array
    assert.throws(() => checkGameResult({answers: true}), errorMessage);
    // if got undefined instead array
    let testUndefined;
    const testUndefinedData = {answers: testUndefined};
    assert.throws(() => checkGameResult(testUndefinedData), errorMessage);
  });

  it(`should count according answerValue (answer time)`, () => {
    const testData1 = {
      answers: [`right`, `right`, `right`, `right`, `right`, `right`, `right`, `right`, `wrong`, `wrong`],
      life: 1,
    };
    assert.equal(checkGameResult(testData1), 850);

    const testData2 = {
      answers: [`fast`, `fast`, `fast`, `right`, `right`, `right`, `right`, `right`, `right`, `right`],
      life: 3,
    };
    assert.equal(checkGameResult(testData2), 1300);

    const testData3 = {
      answers: [`wrong`, `wrong`, `slow`, `right`, `right`, `right`, `right`, `right`, `right`, `right`],
      life: 1,
    };
    assert.equal(checkGameResult(testData3), 800);

    const testData4 = {
      answers: [`wrong`, `fast`, `fast`, `slow`, `slow`, `slow`, `right`, `right`, `right`, `right`],
      life: 2,
    };
    assert.equal(checkGameResult(testData4), 950);

    const testData5 = {
      answers: [`right`, `right`, `right`, `right`, `right`, `right`, `right`, `right`, `right`, `right`],
      life: 3,
    };
    assert.equal(checkGameResult(testData5), 1150);
  });
});

describe(`Check game lifes`, () => {
  it(`should not allow the life amount less than 0`, () => {
    const testData1 = {
      answers: [`right`, `right`, `right`, `right`, `right`, `right`, `right`, `right`, `right`, `right`],
      life: -2,
    };
    assert.throws(() => checkGameResult(testData1), `Wrong life amount. It can't be less than 0`);
  });
});
