// import {addFragmentFromTemplate} from './../createNode.js';
// import {addQuestionNode} from './addQuestionNode.js';
// import {INITIAL_GAME} from './../data/game-data.js';
import {questions} from './../data/questions-data.js';
import {getSingleTemplate, getSingle} from './questionSingle.js';
// import {nextScreen} from './game.js';

import {headerTemplate} from './header';
import {INITIAL_GAME} from './../data/game-data.js';

import {footerTemplate} from './footer.js';
import {changeScreen} from './../util.js';

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
  changeScreen(greeting, rulesTemplate);
  // greeting.remove();

  // const central = document.querySelector(`.central`);

  // central.insertAdjacentHTML(`afterBegin`, rulesTemplate);

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

  const addHeaderTest = () => {
    const centralEl = document.querySelector(`.central`);
    const currentOption = questions.shift();

    centralEl.innerHTML = `
    ${headerTemplate(INITIAL_GAME)}
    ${getSingleTemplate(currentOption)}
    ${footerTemplate}
    `;

    const nextOptions = questions.shift();
    getSingle(nextOptions, addHeaderTest);
    // const templ = headerTemplate(INITIAL_GAME);
    // centralEl.appendChild(templ);
  };

  // const currentQuestion = questions.shift();
  form.addEventListener(`submit`, addHeaderTest);
  // appendNode(getSingle(currentQuestion.options, nextScreen)););
};
