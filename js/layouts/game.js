import {headerTemplate} from './header.js';
import {changeLevel} from './../data/game-data.js';

import {questions} from './../data/questions-data.js';
import {footerTemplate} from './footer.js';

import {questionsTemplate, questionsHandlers} from './questions.js';
import {addStatsNode} from './stats.js';
import {MAX_QUESTION_AMOUNT} from './../constant.js';
import {reloadGameScreen, removeGame} from './../util.js';

// startGame
export const startGame = (stateGame) => {
  const central = document.querySelector(`.central`);
  let state = Object.assign({}, stateGame);

  central.innerHTML = `
  ${headerTemplate(state)}
  ${footerTemplate}
  `;

  nextGame(state);
};

// nextGame
export const nextGame = (state) => {
  if (state.level === MAX_QUESTION_AMOUNT) {
    removeGame();
    addStatsNode(state);
    return state;
  }

  const central = document.querySelector(`.central`);
  const currentOption = questions.shift();
  const type = currentOption.type;

  const gameTemplate = questionsTemplate[type];

  const next = state.level + 1;

  state = changeLevel(state, next);

  reloadGameScreen(central, `
    ${headerTemplate(state)}
    ${gameTemplate(currentOption, state)}`);

  const addHandler = questionsHandlers[type];

  const toNextGame = () => {
    nextGame(state);
  };

  addHandler(toNextGame, state, currentOption, type);

  return state;
};
