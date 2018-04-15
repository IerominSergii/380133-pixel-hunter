import {question1} from './questionTwice.js';
import {question2} from './questionSingle.js';
import {question3} from './questionTriple.js';

const currentTemplate = (question) => {
  switch (question.type) {
    case `twice`: {
      return question1(question);
    }
    case `single`: {
      return question2(question);
    }
    case `triple`: {
      return question3(question);
    }
    default: {
      throw new Error(`Unknown question type was given.`);
    }
  }
};

export const questionTemplate = (questionOptions) => {
  return `<div class="game">
  <p class="game__task">${currentTemplate(questionOptions).title}</p>
    ${currentTemplate(questionOptions).optionsRendered}
  <div class="stats">
    <ul class="stats">
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>
  </div>`;
};
