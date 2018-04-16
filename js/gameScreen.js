import {addAfterBeginCentral, addFragmentFromTemplate} from './createNode.js';
import {headerTemplate} from './layouts/header.js';
import {INITIAL_GAME} from './data/game-data.js';
import {questions} from './data/questions-data.js';
import {questionTemplate} from './layouts/questionsTemplate.js';
import {statsTemplate} from './layouts/stats.js';

// добавление header
addAfterBeginCentral(headerTemplate(INITIAL_GAME));

const header = document.querySelector(`.header`);

const nextGameContent = (element) => {
  if (element) {
    element.remove();
  }

  const newQuestionScreen = questions.shift();
  header.after(addFragmentFromTemplate(questionTemplate(newQuestionScreen, INITIAL_GAME)));
};

const provideTwiceScreen = (element) => {
  if (element.querySelectorAll(`input:checked`).length === 2) {
    nextGameContent();
  }
  element.addEventListener(`change`, nextGameContent);
};

const provideTripleScreen = (element) => {
  const gameOption = element.querySelectorAll(`.game__option`);

  // на каждый элемент коллекции вешаю обработчик
  // перехода на страницу с результатами игры
  gameOption.forEach((elem) => elem.addEventListener(`click`, nextGameContent));
};

const provideSingleScreen = (element) => {
  if (element.querySelectorAll(`input:checked`)) {
    nextGameContent();
  }
  element.addEventListener(`change`, nextGameContent);
};

const provideStatsScreen = () => {
  header.remove();
  // добавление экрана с результатами игры
  addAfterBeginCentral(statsTemplate);
};

export const nextQuestion = (questionsArray) => {
  // добавление экрана с игрой
  const gameContentNode = document.querySelector(`.game__content`);

  if (!gameContentNode) {
    return nextGameContent();
  }

  if (questionsArray.length === 0) {
    return provideStatsScreen();
  }

  switch (questionsArray[0].type) {
    case `twice`: {
      return provideTwiceScreen(gameContentNode);
    }
    case `single`: {
      return provideSingleScreen(gameContentNode);
    }
    case `triple`: {
      return provideTripleScreen(gameContentNode);
    }
    default: {
      throw new Error(`Unknown question type.`);
    }
  }
};
