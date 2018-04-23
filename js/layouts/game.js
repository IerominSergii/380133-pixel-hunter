import {headerTemplate} from './header';
import {INITIAL_GAME} from './../data/game-data.js';

import {questions} from './../data/questions-data.js';
import {footerTemplate} from './footer.js';

import {questionsTemplate, questionsHandlers} from './questions.js';

let game = Object.assign({}, INITIAL_GAME);

export const startGame = () => {
  const central = document.querySelector(`.central`);
  const currentOption = questions.shift();
  const type = currentOption.type;
  const gameTemplate = questionsTemplate[type];

  central.innerHTML = `
  ${headerTemplate(INITIAL_GAME)}
  ${gameTemplate(currentOption)}
  ${footerTemplate}
  `;

  const addHandler = questionsHandlers[type];
  addHandler(nextGame);
};

export const nextGame = () => {
  const central = document.querySelector(`.central`);
  const currentOption = questions.shift();
  const type = currentOption.type;
  const gameTemplate = questionsTemplate[type];

  central.innerHTML = `
    ${headerTemplate(INITIAL_GAME)}
    ${gameTemplate(currentOption)}
  `;

  const addHandler = questionsHandlers[type];
  addHandler(nextGame);
};

// const endGame = () => {};
// const reloadHeader = () => {};
