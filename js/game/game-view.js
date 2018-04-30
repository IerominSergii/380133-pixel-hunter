import {AbstractView} from '../abstract-view';
import {data} from '../data/questions-type-data';

export default class GameView extends AbstractView {
  constructor(currentQuestion) {
    super();
    this.type = currentQuestion.type;
    this.option = currentQuestion.options;
    this.data = data[this.type];
  }

  get gameOptions() {
    const label = (value, spanInner) => {
      return `<label class="game__answer game__answer--photo">
        <input name="${this.option.name}" type="radio" value="${value}">
        <span>${spanInner}</span>
      </label>`;
    };

    const labelPhoto = label(`photo`, `Фото`);
    const labelPaint = label(`paint`, `Рисунок`);
    const labels = this.type === (`single` || `twice`) ? (labelPhoto + labelPaint) : ``;

    const option = `
    <div class="game__option">
      <img src="${this.option.src}" alt="${this.option.alt}" width="304" height="455">
      ${labels}
    </div>`;

    const gameOptions = this.type === (`twice` || `triple`) ? this.option.map(option.trim()).join(``) : option[0].trim();
    return gameOptions;
  }

  get gameTemplate() {
    return `
    <div class="game">
    <p class="game__task">${this.data.title}</p>
    <form class="game__content ${this.data.extraClass}">
      ${this.gameOptions}
    </form>
    </div>`;
  }
}
