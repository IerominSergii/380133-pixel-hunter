import {headerTemplate} from './header';
import {INITIAL_GAME, changeLevel} from './../data/game-data';

import {questions} from './../data/questions-data';
import {footerTemplate} from './footer';

import {questionsTemplate, questionsHandlers} from './questions';
import {addStatsNode} from './stats';
import {MAX_QUESTION_AMOUNT} from './../constant';
import {reloadGameScreen, removeGame} from './../util';


let game = Object.assign({}, INITIAL_GAME);

export const startGame = () => {
  const central = document.querySelector(`.central`);

  central.innerHTML = `
  ${headerTemplate(game)}
  ${footerTemplate}
  `;

  nextGame();
};

// export const startGame = () => {
//   const central = document.querySelector(`.central`);
//   const currentOption = questions.shift();
//   const type = currentOption.type;
//   const gameTemplate = questionsTemplate[type];
//
//   const next = game.level + 1;
//   game = changeLevel(game, next);
//
//   central.innerHTML = `
//   ${headerTemplate(game)}
//   ${gameTemplate(currentOption)}
//   ${footerTemplate}
//   `;
//
//   const addHandler = questionsHandlers[type];
//   addHandler(nextGame);
//
//   return game;
// };

export const nextGame = () => {
  if (game.level === MAX_QUESTION_AMOUNT) {
    removeGame();
    addStatsNode();
    return game;
  }

  const central = document.querySelector(`.central`);
  const currentOption = questions.shift();
  const type = currentOption.type;
  const gameTemplate = questionsTemplate[type];

  const next = game.level + 1;
  game = changeLevel(game, next);

  reloadGameScreen(central, `
    ${headerTemplate(INITIAL_GAME)}
    ${gameTemplate(currentOption)}`);

  const addHandler = questionsHandlers[type];
  addHandler(nextGame);

  return game;
};

// const endGame = () => {};
// const reloadHeader = () => {};
