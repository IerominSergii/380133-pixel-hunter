import AbstractView from '../abstract-view';
import data from '../data/questions-type-data';
import {createCustomElement} from '../util';


export default class LevelView extends AbstractView {
  constructor(currentQuestion) {
    super();
    this.type = currentQuestion.type;
    this.option = currentQuestion.options;
    this.data = data[this.type];
    this.gameOptions = {
      single: `<div class="game__option">
          <img src="${this.option[0].src}" alt="${this.option[0].alt}" width="705" height="455">
          <label class="game__answer  game__answer--photo">
            <input name="${this.option[0].name}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="${this.option[0].name}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>`,
      twice: `<div class="game__option">
          <img src="${this.option.src}" alt="${this.option.alt}" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input name="${this.option.name}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="${this.option.name}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>`,
      triple: `<div class="game__option">
        <img src="${this.option.src}" alt="${this.option.alt}" width="304" height="455">
      </div>`,
    };
  }

  // get gameOptions() {
  //   const getOptions = {
  //     single(option) {
  //       return `<div class="game__option">
  //         <img src="${option.src}" alt="${option.alt}" width="705" height="455">
  //         <label class="game__answer  game__answer--photo">
  //           <input name="${option.name}" type="radio" value="photo">
  //           <span>Фото</span>
  //         </label>
  //         <label class="game__answer  game__answer--wide  game__answer--paint">
  //           <input name="${option.name}" type="radio" value="paint">
  //           <span>Рисунок</span>
  //         </label>
  //       </div>`;
  //     },
  //     twice(option) {
  //       return `<div class="game__option">
  //         <img src="${option.src}" alt="${option.alt}" width="468" height="458">
  //         <label class="game__answer game__answer--photo">
  //           <input name="${option.name}" type="radio" value="photo">
  //           <span>Фото</span>
  //         </label>
  //         <label class="game__answer game__answer--paint">
  //           <input name="${option.name}" type="radio" value="paint">
  //           <span>Рисунок</span>
  //         </label>
  //       </div>`;
  //     },
  //     triple(option) {
  //       return `<div class="game__option">
  //         <img src="${option.src}" alt="${option.alt}" width="304" height="455">
  //       </div>`;
  //     },
  //   };
  //
  //   return getOptions[this.type];
  // }

  get template() {
    return `<p class="game__task">${this.data.title}</p>
    <form class="game__content ${this.data.extraClass}">
      ${this.gameOptions[this.type]}
    </form>`;
  }

  onAnswer() {
  }

  render() {
    return createCustomElement(this.template, `div`, `game`);
  }

  bind() {
    // const central = this.element.querySelector(`.central`);
    const gameContent = this.element.querySelector(`.game__content`);

    if (this.type === `triple`) {
      const gameOptions = gameContent.querySelectorAll(`.game__option`);
      gameOptions.forEach((elem) => elem.addEventListener(`click`, this.onAnswer));
    } else {
      gameContent.addEventListener(`change`, this.onAnswer);
    }
  }
}
