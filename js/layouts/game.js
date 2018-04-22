import {headerTemplate} from './header';
import {INITIAL_GAME} from './../data/game-data.js';
import {appendNode} from './../createNode.js';

import {questions} from './../data/questions-data.js';
import {getSingleTemplate, getSingle} from './questionSingle.js';
import {footerTemplate} from './footer.js';


// !!!!!!!!
export const startGame = (questionsArray) => {
  const centralEl = document.querySelector(`.central`);
  const currentOption = questionsArray.shift();
  const type = currentOption.type;

  centralEl.innerHTML = `
  ${headerTemplate(INITIAL_GAME)}
  ${getSingleTemplate(currentOption)}
  ${footerTemplate}
  `;

  const nextOptions = questions.shift();
  getSingle(nextOptions, startGame);
};

export const nextScreen = () => {
  const screen = `
    ${headerTemplate(INITIAL_GAME)}
  `;
  appendNode(screen);
};
