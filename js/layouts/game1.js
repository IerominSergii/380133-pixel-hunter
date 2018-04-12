/*
 Набор импортированных значений
*/
import {addAfterBeginCentral} from './../createNode.js';
import {headerTemplate} from './header.js';
import addGame2Node from './game2.js';
import {backToGreeting} from './header.js';

/*
 Список констант
*/

// шаблон экрана первой игры
const game1Template = `<div class="game">
  <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
  <form class="game__content">
    <div class="game__option">
      <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
    <div class="game__option">
      <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
      <label class="game__answer  game__answer--photo">
        <input name="question2" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input name="question2" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
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
  </div>
</div>`;

// добавление экрана с первой игрой
// и добавляю функционал для перехода на след экран
const game1Node = () => {
  const rules = document.querySelector(`.rules`);
  rules.remove();
  // добавление экрана с первой игрой
  addAfterBeginCentral(game1Template);

  // добавление header
  addAfterBeginCentral(headerTemplate);

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

/*
 Набор экспортированных значений
*/

// экспортирую функцию
// добавления экрана с первой игрой
export default game1Node;
