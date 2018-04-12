/*
  Набор импортированных значений
*/
import {addFragmentFromTemplate} from './../createNode.js';
import addStatsNode from './stats.js';
import {backToGreeting} from './greeting.js';

/*
  Список констант
*/

// шаблон экрана третьей игры
const game3Template = `<div class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
  </form>
  <div class="stats">
    <ul class="stats">
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>
  </div>
</div>`;

// добавление экрана с третьей игрой
// и добавляю функционал для перехода на след экран
const game3Node = () => {
  const game = document.querySelector(`.game`);
  game.remove();

  const header = document.querySelector(`.header`);
  // добавление экрана с третьей игрой
  header.after(addFragmentFromTemplate(game3Template));

  // функция возврата на экран приветствия по клику на кнопку "Назад"
  // backToGreeting();

  const form = document.querySelector(`.game__content`);
  const gameOption = form.querySelectorAll(`.game__option`);

  // на каждый элемент коллекции вешаю обработчик
  // перехода на страницу с результатами игры
  gameOption.forEach((elem) => elem.addEventListener(`click`, addStatsNode));
};

/*
  Набор экспортированных значений
*/

// экспортирую функцию
// добавления экрана с третьей игрой
export default game3Node;
