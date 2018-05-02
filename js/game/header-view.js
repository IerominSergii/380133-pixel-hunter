import AbstractView from '../abstract-view';

export default class HeaderView extends AbstractView {
  constructor(state = false) {
    super();
    this.state = state;
  }

  get template() {
    const extraTemplate = ``;
    const heartEmpty = `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`;
    const heartFull = `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`;

    if (this.state) {
      extraTemplate = `</div>
      <h1 class="game__timer">${this.state.timer}</h1>
      <div class="game__lives">
      ${new Array(3 - this.state.life).fill(heartEmpty).join(``)}
      ${new Array(this.state.life).fill(heartFull).join(``)}
      </div>`;
    }

    return `<header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
        ${extraTemplate}
    </header>`;
  }

  onBackArrowClick() {
  }

  bind() {
    const backButton = this.element.querySelector(`.back`);

    backButton.addEventListener(`click`, this.onBackArrowClick);
  }
}
