import {headerTemplate} from './header';
import {INITIAL_GAME, changeLevel} from './../data/game-data';

import {questions} from './../data/questions-data';
import {footerTemplate} from './footer';

import {questionsTemplate, questionsHandlers} from './questions';
import {addStatsNode} from './stats';
import {MAX_QUESTION_AMOUNT} from './../constant';
import {reloadGameScreen, removeGame} from './../util';
// import {answerStatus} from '../constant';


let game = Object.assign({}, INITIAL_GAME);

export const startGame = () => {
  const central = document.querySelector(`.central`);

  central.innerHTML = `
  ${headerTemplate(game)}
  ${footerTemplate}
  `;

  nextGame();
};

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
    ${headerTemplate(game)}
    ${gameTemplate(currentOption, game)}`);

  const addHandler = questionsHandlers[type];

  addHandler(nextGame, game, currentOption);

  return game;
};
