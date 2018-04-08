const MAX_QUESTION_AMOUNT = 10;

const gameData = {
  answers: [],
  questionNumber: 10,
  life: 3,
};

const answerType = {
  fast: `fast`,
  right: `right`,
  slow: `slow`,
  wrong: `wrong`,
};

const ANSWER_VALUE = {
  fast: `150`,
  right: `100`,
  slow: `50`,
};

const LIFE_VALUE = 50;

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

// функция создания таймера
const createTimer = (time) => {
  const timerObj = {timer: time};
  return timerObj;
};

const tick = (timerObj) => {
  if (timerObj.timer < 0 || timerObj.timer > 30) {
    throw new Error(`Wrong time. Expect from 0 to 30`);
  }

  if (timerObj.timer === 0) {
    return -1;
  }

  return timerObj.timer - 1;
};

export {MAX_QUESTION_AMOUNT, gameData, checkGameResult, createTimer, tick};
