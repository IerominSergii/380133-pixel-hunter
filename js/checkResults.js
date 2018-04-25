import {MAX_QUESTION_AMOUNT, ANSWER_VALUE, LIFE_VALUE, resultstatus} from './constant.js';

// =========== POINTS ==========
// посчитать заработанные набранные очки
const countPoints = (gameObject) => {
  const results = gameObject.results;
  if (!Array.isArray(gameObject.results)) {
    throw new Error(`Wrong type of results. Expected array`);
  }

  if (results.length !== MAX_QUESTION_AMOUNT) {
    return -1;
  }

  const wrongresults = results.filter((item) => item === resultstatus.wrong);
  if (wrongresults > 3) {
    return -1;
  }

  const fastresults = results.filter((item) => item === resultstatus.fast);
  const slowresults = results.filter((item) => item === resultstatus.slow);
  const correctresults = results.filter((item) => item === resultstatus.correct);

  const sumPoints = (fastresults.length * ANSWER_VALUE.fast + slowresults.length * ANSWER_VALUE.slow + correctresults.length * ANSWER_VALUE.correct);

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
