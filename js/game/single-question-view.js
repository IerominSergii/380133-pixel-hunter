import AbstractView from '../abstract-view';
import {createCustomElement} from '../util';


class SingleQuestionView extends AbstractView {
  constructor(options) {
    super();
    this.option = options[0];
  }

  get template() {
    return `<p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content game__content--wide">
      <div class="game__option">
        <img src="${this.option.src}" alt="${this.option.alt}" width="705" height="455">
        <label class="game__answer game__answer--photo">
          <input name="${this.option.name}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--wide game__answer--paint">
          <input name="${this.option.name}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>`;
  }

  onAnswer() {
  }

  render() {
    return createCustomElement(this.template, `div`, `game`);
  }

  bind(element) {
    element.addEventListener(`change`, () => {
      const checked = element.querySelector(`input:checked`);
      const isCorrect = checked.value === this.option.answer;
      if (this.onAnswer) {
        this.onAnswer(isCorrect);
      }
    });
  }
}

export default SingleQuestionView;
