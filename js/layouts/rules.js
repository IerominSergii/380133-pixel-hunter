import {addAfterBeginCentral, addFragmentFromTemplate} from './../createNode.js';
// import {addQuestionNode} from './addQuestionNode.js';
// import {INITIAL_GAME} from './../data/game-data.js';
import {questions} from './../data/questions-data.js';
import {getSingle} from './questionSingle.js';
import {nextScreen} from './game.js';

// шаблон экрана с правилами игры
const rulesTemplate = `<header class="header">
  <div class="header__back">
    <button class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.svg" width="101" height="44">
    </button>
  </div>
</header>
<div class="rules">
  <h1 class="rules__title">Правила</h1>
  <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится 30 секунд.<br>
    Ошибиться можно не более 3 раз.<br>
    <br>
    Готовы?
  </p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</div>`;

// добавление экрана с правилами
export const addRulesNode = () => {
  const greeting = document.querySelector(`.greeting`);
  greeting.remove();
  addAfterBeginCentral(rulesTemplate);

  // функция возврата на экран приветствия по клику на кнопку "Назад"
  // backToGreeting();

  const form = document.querySelector(`.rules__form`);
  const input = form.querySelector(`.rules__input`);
  const submitFormBtn = form.querySelector(`.rules__button`);

  // кнопка отправки отключена,
  // пока в поле с именем игрока ничего не введено
  submitFormBtn.setAttribute(`disabled`, ``);

  // проверка, если введено имя,
  // то кнопка становится активной
  form.addEventListener(`input`, () => {
    if (input.value) {
      submitFormBtn.removeAttribute(`disabled`);
    } else {
      if (!submitFormBtn.getAttribute(`disabled`)) {
        submitFormBtn.setAttribute(`disabled`, ``);
      }
    }
  });

  const currentQuestion = questions.shift();
  // const getSingleScreen = () => {
  //   return addFragmentFromTemplate(getSingle(currentQuestion.options, nextScreen));
  // };
  //
  form.addEventListener(`submit`, () => {
    addFragmentFromTemplate(getSingle(currentQuestion.options, nextScreen));
  });
};
