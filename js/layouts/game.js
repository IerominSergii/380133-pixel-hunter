import {headerTemplate} from './header';
import {INITIAL_GAME} from './../data/game-data.js';
// import {appendNode} from './../createNode.js';

import {questions} from './../data/questions-data.js';
import {singleTemplate, singleHandlers} from './questionSingle.js';
// import {footerTemplate} from './footer.js';


// !!!!!!!!
export const startGame = () => {
  const central = document.querySelector(`.central`);
  const currentOption = questions.shift();
  // const type = currentOption.type;

  central.innerHTML = `
  ${headerTemplate(INITIAL_GAME)}
  ${singleTemplate(currentOption)}
  `;

  const nextOptions = questions.shift();
  singleHandlers(nextOptions, nextGame);
};

export const nextGame = () => {
  const central = document.querySelector(`.central`);
  const currentOption = questions.shift();

  central.innerHTML = `
    ${headerTemplate(INITIAL_GAME)}
    ${singleTemplate(currentOption)}
  `;

  const nextOptions = questions.shift();
  singleHandlers(nextOptions, nextGame);
};
