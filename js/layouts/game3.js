import {addFragmentFromTemplate} from './../createNode.js';
import addStatsNode from './stats.js';
import {question3} from './question3.js';
import {questions} from './../data/questionsData.js';

// добавление экрана с третьей игрой
// и добавляю функционал для перехода на след экран
const game3Node = () => {
  const game = document.querySelector(`.game`);
  game.remove();

  const header = document.querySelector(`.header`);
  // добавление экрана с третьей игрой
  // header.after(addFragmentFromTemplate(game3Template));
  header.after(addFragmentFromTemplate(question3(questions[0])));

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
