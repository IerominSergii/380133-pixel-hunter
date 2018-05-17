import {ANSWER_VALUE, LIFE_VALUE, resultStatus} from './constant.js';
import {questions} from './data/questions-data';

// =========== POINTS ==========
// посчитать заработанные набранные очки
export const countPoints = (results) => {
  // const results = gameResults;
  if (!Array.isArray(results)) {
    throw new Error(`Wrong type of results. Expected array`);
  }

  if (results.length !== questions.length) {
    return -1;
  }

  const wrongresults = results.filter((item) => item === resultStatus.wrong);
  if (wrongresults > 3) {
    return -1;
  }

  const fastresults = results.filter((item) => item === resultStatus.fast);
  const slowresults = results.filter((item) => item === resultStatus.slow);
  const correctresults = results.filter((item) => item === resultStatus.correct);

  const sumPoints = (fastresults.length * ANSWER_VALUE.fast + slowresults.length * ANSWER_VALUE.slow + correctresults.length * ANSWER_VALUE.correct);

  return sumPoints;
};

// =========== LIFES ==========
// посчитать очки за оставш. жизни
export const countLifes = (life) => {
  if (life < 0) {
    throw new Error(`Wrong life amount. It can't be less than 0`);
  }

  return life * LIFE_VALUE;
};

// =========== SUM ==========
// подсчет итоговых результатов игры
export const checkGameResult = (results, life) => {

  const pointsResult = countPoints(results);
  const lifesResult = countLifes(life);

  if (pointsResult === -1 || lifesResult === -1) {
    return -1;
  }
  return pointsResult + lifesResult;
};
