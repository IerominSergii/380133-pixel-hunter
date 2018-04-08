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
  const answersArr = gameObject.answers;

  const fastAnswers = answersArr.filter((item) => item === answerType.fast);
  const slowAnswers = answersArr.filter((item) => item === answerType.slow);
  const rightAnswers = answersArr.filter((item) => item === answerType.right);

  const sumPoints = (fastAnswers.length * ANSWER_VALUE.fast + slowAnswers.length * ANSWER_VALUE.slow + rightAnswers.length * ANSWER_VALUE.right);

  return sumPoints;
};

// посчитать очки за оставш. жизни
const countSumLifes = (gameObject) => {
  return gameObject.life * LIFE_VALUE;
};

// подсчет результатов игры
const checkGameResult = (gameObject) => {
  const answers = gameObject.answers;
  if (typeof answers !== `object`) {
    throw new Error(`Wrong type of answers. Expected array`);
  }

  if (answers.length > 0 && answers.length < 10) {
    return -1;
  }

  if (gameObject.life < 0 || gameObject.life > 3) {
    throw new Error(`Wrong life amount. Expected from 0 to 3`);
  }

  const pointsResult = countSumPoints(gameObject);
  const lifesResult = countSumLifes(gameObject);

  return pointsResult + lifesResult;
};

export {MAX_QUESTION_AMOUNT, gameData, checkGameResult};
