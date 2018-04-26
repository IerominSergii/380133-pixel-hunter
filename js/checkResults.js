import {MAX_QUESTION_AMOUNT, ANSWER_VALUE, LIFE_VALUE, resultStatus} from './constant.js';

// =========== POINTS ==========
// посчитать заработанные набранные очки
export const countPoints = (state) => {
  const results = state.results;
  if (!Array.isArray(state.results)) {
    throw new Error(`Wrong type of results. Expected array`);
  }

  if (results.length !== MAX_QUESTION_AMOUNT) {
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
export const countLifes = (state) => {
  if (state.life < 0) {
    throw new Error(`Wrong life amount. It can't be less than 0`);
  }

  return state.life * LIFE_VALUE;
};

// =========== SUM ==========
// подсчет итоговых результатов игры
export const checkGameResult = (state) => {

  const pointsResult = countPoints(state);
  const lifesResult = countLifes(state);

  if (pointsResult === -1 || lifesResult === -1) {
    return -1;
  }
  return pointsResult + lifesResult;
};
