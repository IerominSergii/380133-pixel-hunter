import {addAfterBeginCentral, addFragmentFromTemplate} from './../createNode.js';
import {headerTemplate} from './header.js';
import {INITIAL_GAME} from './../data/game-data.js';
import {addGame2Node} from './game2.js';
// import {backToGreeting} from './header.js';
import {questionTemplate} from './questionsTemplate.js';
import {questions} from './../data/questions-data.js';

// добавление экрана с первой игрой
// и добавляю функционал для перехода на след экран
export const addGame1Node = () => {
  const rules = document.querySelector(`.rules`);
  rules.remove();

  // добавление header
  addAfterBeginCentral(headerTemplate(INITIAL_GAME));

  const header = document.querySelector(`.header`);
  // добавление экрана с игрой
  const nextQuestionScreen = questions.shift();
  header.after(addFragmentFromTemplate(questionTemplate(nextQuestionScreen, INITIAL_GAME)));

  // функция возврата на экран приветствия по клику на кнопку "Назад"
  // backToGreeting();

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
