const MAX_QUESTION_AMOUNT = 10;

export const INITIAL_GAME = Object.freeze({
  answers: [],
  questionNumber: 10,
  life: 3,
  timer: 30,
});

const answerType = {
  fast: `fast`,
  right: `right`,
  slow: `slow`,
  wrong: `wrong`,
};

const ANSWER_VALUE = {
  fast: 150,
  right: 100,
  slow: 50,
};

const LIFE_VALUE = 50;

// =========== POINTS ==========
// посчитать заработанные набранные очки
const countSumPoints = (gameObject) => {
  const answers = gameObject.answers;
  if (typeof answers !== `object`) {
    return -1;
    // throw new Error(`Wrong type of answers. Expected array`);
  }

  if (answers.length > 0 && answers.length < 10) {
    return -1;
  }

  if (gameObject.life < 0 || gameObject.life > 3) {
    return -1;
    // throw new Error(`Wrong life amount. Expected from 0 to 3`);
  }

  const wrongAnswers = answers.filter((item) => item === answerType.wrong);
  if (wrongAnswers > 3) {
    return -1;
  }

  const fastAnswers = answers.filter((item) => item === answerType.fast);
  const slowAnswers = answers.filter((item) => item === answerType.slow);
  const rightAnswers = answers.filter((item) => item === answerType.right);

  const sumPoints = (fastAnswers.length * ANSWER_VALUE.fast + slowAnswers.length * ANSWER_VALUE.slow + rightAnswers.length * ANSWER_VALUE.right);

  return sumPoints;
};

// посчитать очки за оставш. жизни
const countSumLifes = (gameObject) => {
  if (gameObject.life < 0 || gameObject.life > 3) {
    // throw new Error(`Wrong lifes amount. Expect from 0 to 3.`);
    return -1;
  }

  return gameObject.life * LIFE_VALUE;
};

// подсчет итоговых результатов игры
const checkGameResult = (gameObject) => {

  const pointsResult = countSumPoints(gameObject);
  const lifesResult = countSumLifes(gameObject);

  if (pointsResult === -1 || lifesResult === -1) {
    return -1;
  }
  return pointsResult + lifesResult;
};

// =========== TIMER ==========
// создание объекта таймера с методом tick
const getTimer = (time) => {
  if (typeof time !== `number`) {
    throw new Error(`Wrong type. Expect number type.`);
  }

  if (!Number.isInteger(time)) {
    throw new Error(`Time should be integer`);
  }

  if (time < 0 || time > 30) {
    throw new Error(`Wrong time. Expect from 0 to 30`);
  }

  const newTimer = {
    timer: time,
    tick() {
      if (time === 0) {
        return `Time is over`;
      }

      return this.timer--;
    }
  };

  return newTimer;
};


// функция tick, которая уменьшает значение таймера на 1
// const tick = (timerGame, time) => {
//   if (time < 0 || time > 30) {
//     throw new Error(`Wrong time. Expect from 0 to 30`);
//   }
//
//   if (time === 0) {
//     return timerGame.answers.push(`wrong`);
//   }
//
//   const newGame = Object.assign({}, timerGame, {
//     timer: time - 1,
//   });
//
//   return newGame;
// };

export {MAX_QUESTION_AMOUNT, checkGameResult, getTimer};
