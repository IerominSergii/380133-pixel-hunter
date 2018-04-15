import {addFragmentFromTemplate} from './../createNode.js';
import addStatsNode from './stats.js';
import {questionTemplate} from './questionsTemplate.js';
import {questions} from './../data/questions-data.js';

// добавление экрана с третьей игрой
// и добавляю функционал для перехода на след экран
const game3Node = () => {
  const game = document.querySelector(`.game`);
  game.remove();

  const header = document.querySelector(`.header`);
  // добавление экрана с третьей игрой
  const nextQuestionScreen = questions.shift();
  header.after(addFragmentFromTemplate(questionTemplate(nextQuestionScreen)));

  // функция возврата на экран приветствия по клику на кнопку "Назад"
  // backToGreeting();

  const form = document.querySelector(`.game__content`);
  const gameOption = form.querySelectorAll(`.game__option`);

  // на каждый элемент коллекции вешаю обработчик
  // перехода на страницу с результатами игры
  gameOption.forEach((elem) => elem.addEventListener(`click`, addStatsNode));
};

// экспортирую функцию
// добавления экрана с третьей игрой
export default game3Node;
