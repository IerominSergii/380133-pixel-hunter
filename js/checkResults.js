import {MAX_QUESTION_AMOUNT, ANSWER_VALUE, LIFE_VALUE, answerStatus} from './constant.js';

// =========== POINTS ==========
// посчитать заработанные набранные очки
const countPoints = (gameObject) => {
  const answers = gameObject.answers;
  if (!Array.isArray(gameObject.answers)) {
    throw new Error(`Wrong type of answers. Expected array`);
  }

  if (answers.length !== MAX_QUESTION_AMOUNT) {
    return -1;
  }

  const wrongAnswers = answers.filter((item) => item === answerStatus.wrong);
  if (wrongAnswers > 3) {
    return -1;
  }

  const fastAnswers = answers.filter((item) => item === answerStatus.fast);
  const slowAnswers = answers.filter((item) => item === answerStatus.slow);
  const correctAnswers = answers.filter((item) => item === answerStatus.correct);

  const sumPoints = (fastAnswers.length * ANSWER_VALUE.fast + slowAnswers.length * ANSWER_VALUE.slow + correctAnswers.length * ANSWER_VALUE.correct);

  return sumPoints;
};

// =========== LIFES ==========
// посчитать очки за оставш. жизни
const countLifes = (gameObject) => {
  if (gameObject.life < 0) {
    throw new Error(`Wrong life amount. It can't be less than 0`);
  }

  return gameObject.life * LIFE_VALUE;
};

// =========== SUM ==========
// подсчет итоговых результатов игры
export const checkGameResult = (gameObject) => {

  const pointsResult = countPoints(gameObject);
  const lifesResult = countLifes(gameObject);

  if (pointsResult === -1 || lifesResult === -1) {
    return -1;
  }
  return pointsResult + lifesResult;
};
