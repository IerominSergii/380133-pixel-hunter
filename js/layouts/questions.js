import {singleTemplate, singleHandlers} from './questionSingle.js';
import {twiceTemplate, twiceHandlers} from './questionTwice.js';
import {tripleTemplate, tripleHandlers} from './questionTriple.js';

export const questionsTemplate = {
  single: singleTemplate,
  twice: twiceTemplate,
  triple: tripleTemplate,
};

export const questionsHandlers = {
  single: singleHandlers,
  twice: twiceHandlers,
  triple: tripleHandlers,
};
