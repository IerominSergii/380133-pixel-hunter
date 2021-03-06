const heartEmpty = `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`;
const heartFull = `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`;

export const headerTemplate = (state) => {
  const header = `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    <h1 class="game__timer">${state.timer}</h1>
    <div class="game__lives">
    ${new Array(3 - state.life).fill(heartEmpty).join(``)}
    ${new Array(state.life).fill(heartFull).join(``)}
    </div>
  </header>`;
  return header;
};
