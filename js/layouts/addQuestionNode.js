import {questionTemplate} from './getQuestionTemplate.js';
import {headerTemplate} from './header.js';
import {addAfterBeginCentral, addFragmentFromTemplate} from './../createNode.js';
import {INITIAL_GAME} from './../data/game-data.js';
// import {questions} from './../data/questions-data.js';

const provideNextScreen = {
  single(callback) {
    const gameContentNode = document.querySelector(`.game__content`);

    if (document.querySelectorAll(`input:checked`)) {
      callback();
    }
    gameContentNode.addEventListener(`change`, callback);
  },
  twice(callback) {
    const gameContentNode = document.querySelector(`.game__content`);

    if (document.querySelectorAll(`input:checked`).length === 2) {
      callback();
    }
    gameContentNode.addEventListener(`change`, callback);
  },
  triple(callback) {
    const gameOption = document.querySelectorAll(`.game__option`);

    // на каждый элемент коллекции вешаю обработчик
    // перехода на страницу с результатами игры
    gameOption.forEach((elem) => elem.addEventListener(`click`, callback));
  },
};

export const addQuestionNode = (state, questionsArray) => {
  if (!document.querySelector(`.header`)) {
    addAfterBeginCentral(headerTemplate(INITIAL_GAME));
  }

  const gameContentNode = document.querySelector(`.game__content`);
  if (gameContentNode) {
    gameContentNode.remove();
  }

  const newQuestionScreen = questionsArray.shift();
  const headerElement = document.querySelector(`.header`);
  headerElement.after(addFragmentFromTemplate(questionTemplate(state, newQuestionScreen)));

  const type = newQuestionScreen.type;
  const provideNextNode = provideNextScreen[type];
  const addNextNode = addQuestionNode(state, questionsArray[0]);
  provideNextNode(addNextNode);
};
