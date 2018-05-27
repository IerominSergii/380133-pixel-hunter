import AbstractView from '../abstract-view';
import {createCustomElement} from '../util';

class TripleQuestionView extends AbstractView {
  constructor(options) {
    super();
    this.options = options;
  }

  getOptions(option) {
    return `<div class="game__option">
      <img src="${option.src}" alt="${option.alt}" width="304" height="455">
    </div>`;
  }

  get template() {
    return `<p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content game__content--triple">
      ${this.options.map(this.getOptions).join(``)}
    </form>`;
  }

  render() {
    return createCustomElement(this.template, `div`, `game`);
  }

  bind(element) {
    const gameOptions = element.querySelectorAll(`.game__option`);
    gameOptions.forEach((elem, i) => {
      elem.dataset.index = i;
      elem.addEventListener(`click`, (evt) => {
        const index = evt.target.dataset.index;

        this.onAnswer(this.options[index].answer === `paint`);
      });
    });
  }
}

export default TripleQuestionView;
