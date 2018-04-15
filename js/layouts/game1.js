import {addAfterBeginCentral} from './../createNode.js';
import {headerTemplate} from './header.js';
import {INITIAL_GAME} from './../data/game-data.js';
import addGame2Node from './game2.js';
import {backToGreeting} from './header.js';
import {questionTemplate} from './questions.js';
import {questions} from './../data/questionsData.js';

// добавление экрана с первой игрой
// и добавляю функционал для перехода на след экран
const game1Node = () => {
  const rules = document.querySelector(`.rules`);
  rules.remove();
  // добавление экрана с игрой
  const nextQuestionScreen = questions.shift();
  addAfterBeginCentral(questionTemplate(nextQuestionScreen));

  // добавление header
  addAfterBeginCentral(headerTemplate(INITIAL_GAME));

  // функция возврата на экран приветствия по клику на кнопку "Назад"
  backToGreeting();

  // нахожу форму
  const form = document.querySelector(`.game__content`);

  // перехожу на страницу со второй игрой, если выбраны оба варианта ответа
  const switchGame2Screen = () => {
    if (form.querySelectorAll(`input:checked`).length === 2) {
      addGame2Node();
    }
  };

  form.addEventListener(`change`, switchGame2Screen);
};

// экспортирую функцию
// добавления экрана с первой игрой
export default game1Node;
