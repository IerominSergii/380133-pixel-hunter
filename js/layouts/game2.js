/*
  Набор импортированных значений
*/
import {addFragmentFromTemplate} from './../createNode.js';
import addGame3Node from './game3.js';

/*
  Список констант
*/

// шаблон экрана второй игры
const game2Template = `<div class="game">
  <p class="game__task">Угадай, фото или рисунок?</p>
  <form class="game__content  game__content--wide">
    <div class="game__option">
      <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="question1" type="radio" value="paint">
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
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>
  </div>
</div>`;

// добавление экрана со второй игрой
// и добавляю функционал для перехода на след экран
const game2Node = () => {
  const game = document.querySelector(`.game`);
  game.remove();

  const header = document.querySelector(`.header`);
  // добавление экрана со второй игрой
  header.after(addFragmentFromTemplate(game2Template));

  // функция возврата на экран приветствия по клику на кнопку "Назад"
  // backToGreeting();

  // нахожу форму и вопрос
  const form = document.querySelector(`.game__content`);

  // перехожу на страницу с третьей игрой
  const switchGame3Screen = () => {
    if (form.querySelector(`input:checked`)) {
      addGame3Node();
    }
  };

  // по окончании изменения значения одного из элементов формы
  // перехожу на следующий экран
  form.addEventListener(`change`, switchGame3Screen);
};

/*
  Набор экспортированных значений
*/

// экспортирую функцию
// добавления экрана со второй игрой
export default game2Node;
