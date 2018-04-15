import {question1} from './question1.js';
import {question2} from './question2.js';
import {question3} from './question3.js';

export const questionTemplate = (question) => {
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
