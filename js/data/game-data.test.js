import {assert} from 'chai';
import {MAX_QUESTION_AMOUNT, checkGameResult} from './game-data.js';

describe(`Check game results`, () => {
  describe(`Check game points`, () => {
    it(`should complete ALL ${MAX_QUESTION_AMOUNT} game questions`, () => {
      const testData1 = {answers: [10, 2, 3, 4, 5, 5, `string`, 7, 8]};
      assert.equal(checkGameResult(testData1), -1);
      const testData2 = {answers: [10, 2, 3, 4, 5, 5, 6]};
      assert.equal(checkGameResult(testData2), -1);
      const testData3 = {answers: [10, 2, 3, 4, 5]};
      assert.equal(checkGameResult(testData3), -1);
      const testData4 = {answers: [10]};
      assert.equal(checkGameResult(testData4), -1);
    });

    // it(`should not allow wrong type`, () => {
    //   const testNumberData = {answers: 103};
    //   assert.equal(checkGameResult(testNumberData), -1);
    //   const testStringData = {answers: `testString`};
    //   assert.equal(checkGameResult(testStringData), -1);
    //   const testBooleanData = {answers: true};
    //   assert.equal(checkGameResult(testBooleanData), -1);
    //   let testUndefined;
    //   const testUndefinedData = {answers: testUndefined};
    //   assert.equal(checkGameResult(testUndefinedData), -1);
    // });

    it(`should count according answerValue (answer time)`, () => {
      const testData1 = {
        answers: [`right`, `right`, `right`, `right`, `right`, `right`, `right`, `right`, `right`, `right`],
        life: 1,
      };
      assert.equal(checkGameResult(testData1), 1050);

      const testData2 = {
        answers: [`fast`, `fast`, `fast`, `right`, `right`, `right`, `right`, `right`, `right`, `right`],
        life: 1,
      };
      assert.equal(checkGameResult(testData2), 1200);

      const testData3 = {
        answers: [`slow`, `slow`, `slow`, `right`, `right`, `right`, `right`, `right`, `right`, `right`],
        life: 1,
      };
      assert.equal(checkGameResult(testData3), 900);

      const testData4 = {
        answers: [`fast`, `fast`, `fast`, `slow`, `slow`, `slow`, `right`, `right`, `right`, `right`],
        life: 0,
      };
      assert.equal(checkGameResult(testData4), 1000);

      const testData5 = {
        answers: [`fast`, `fast`, `fast`, `slow`, `slow`, `slow`, `right`, `right`, `right`, `right`],
        life: 2,
      };
      assert.notEqual(checkGameResult(testData5), 1000);
    });
  });

  // describe(`Check game lifes`, () => {
  //   it(`should count lifes properly`, () => {
  //     const testData1 = {answers: [10, 2, 3, 4, 5, 5, `string`, 7, 8]};
  //     assert.equal(checkGameResult(testData1), -1);
  //   });
  // });
});
