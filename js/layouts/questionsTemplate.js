import {questionTwice} from './questionTwice.js';
import {questionSingle} from './questionSingle.js';
import {questionTriple} from './questionTriple.js';
import {renderStats} from './statsTemplate.js';

const currentTemplate = (question) => {
  switch (question.type) {
    case `twice`: {
      return questionTwice(question);
    }
    case `single`: {
      return questionSingle(question);
    }
    case `triple`: {
      return questionTriple(question);
    }
    default: {
      throw new Error(`Unknown question type was given.`);
    }
  }
};

export const questionTemplate = (questionOptions, state) => {
  return `<div class="game">
  <p class="game__task">${(currentTemplate(questionOptions)).title}</p>
    ${(currentTemplate(questionOptions)).optionsRendered}
    ${renderStats(state)}
  </div>`;
};
