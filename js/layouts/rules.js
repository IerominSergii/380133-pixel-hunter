import {startGame} from './game.js';
import {changeScreen} from './../util.js';
import {INITIAL_GAME} from '../data/game-data';

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

const disableFormBtn = () => {
  const form = document.querySelector(`.rules__form`);
  const input = form.querySelector(`.rules__input`);
  const submitFormBtn = form.querySelector(`.rules__button`);

  const isFormBtnEmpty = () => {
    if (input.value) {
      submitFormBtn.removeAttribute(`disabled`);
    } else {
      if (!submitFormBtn.getAttribute(`disabled`)) {
        submitFormBtn.setAttribute(`disabled`, ``);
      }
    }
  };

  // автофокус
  input.focus();
  // кнопка отключена, пока в поле с ничего не введено
  submitFormBtn.setAttribute(`disabled`, ``);
  // если введено имя, то кнопка становится активной
  form.addEventListener(`input`, isFormBtnEmpty);
};

const addRulesHandlers = () => {
  const form = document.querySelector(`.rules__form`);

  const start = () => {
    startGame(INITIAL_GAME);
  };

  form.addEventListener(`submit`, start);
};

// добавление экрана с правилами
export const renderRulesNode = () => {
  const greeting = document.querySelector(`.greeting`);
  changeScreen(greeting, rulesTemplate);

  disableFormBtn();
  addRulesHandlers();
};
