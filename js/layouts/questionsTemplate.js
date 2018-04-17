import {questionTwice} from './questionTwice.js';
import {questionSingle} from './questionSingle.js';
import {questionTriple} from './questionTriple.js';
import {renderStats} from './statsTemplate.js';

export const questionTempls = {
  single: questionSingle,
  twice: questionTwice,
  triple: questionTriple,
};

export const questionTemplate = (state, dataElement) => {
  const type = dataElement.type;
  const currentTemplate = questionTempls[type];
  // const currentTemplate = questionTempls.values(dataElement.type);

  return `<div class="game">
  <p class="game__task">${(currentTemplate(dataElement)).title}</p>
    ${(currentTemplate(dataElement)).optionsRendered}
    ${renderStats(state)}
  </div>`;
};
