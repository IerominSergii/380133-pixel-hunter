import {addGreetingNode} from './greeting.js';

export const headerTemplate = `<header class="header">
  <div class="header__back">
    <button class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.svg" width="101" height="44">
    </button>
  </div>
  <h1 class="game__timer">NN</h1>
  <div class="game__lives">
    <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
    <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
    <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
  </div>
</header>`;

// фунция возврата на экран приветствия по нажатию на кнопку "Назад"
export const backToGreeting = () => {
  // нахожу кнопку "Назад"
  const backButton = document.querySelector(`.back`);

  // переход на страницу приветствия по клику на кнопку "Назад"
  backButton.addEventListener(`click`, addGreetingNode);
};
