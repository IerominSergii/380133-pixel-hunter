import AbstractView from '../abstract-view';
import {createCustomElement} from '../util';

export default class HeaderView extends AbstractView {
  constructor(life = false, timer = false) {
    super();
    this.life = life;
    this.time = timer;
  }

  get template() {
    let extraTemplate = ``;
    const heartEmpty = `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`;
    const heartFull = `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`;

    if (this.life !== false && this.time !== false) {
      extraTemplate = `</div>
      <h1 class="game__timer">${this.time}</h1>
      <div class="game__lives">
      ${new Array(3 - this.life).fill(heartEmpty).join(``)}
      ${new Array(this.life).fill(heartFull).join(``)}
      </div>`;
    }

    return `<div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
        ${extraTemplate}`;
  }

  onBackArrowClick() {
  }

  render() {
    return createCustomElement(this.template, `header`, `header`);
  }

  bind() {
    const backButton = this.element.querySelector(`.back`);

    backButton.addEventListener(`click`, this.onBackArrowClick);
  }
}
