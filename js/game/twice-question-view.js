import AbstractView from '../abstract-view';
import {createCustomElement} from '../util';

class TwiceQuestionView extends AbstractView {
  constructor(options) {
    super();
    this.options = options;
  }

  get getOptions() {
    return `<div class="game__option">
      <img src="${this.option.src}" alt="${this.option.alt}" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input name="${this.option.name}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="${this.option.name}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>`;
  }

  get template() {
    return `<p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      ${this.options.map(this.getOptions.twice).join(``)}
    </form>`;
  }

  onAnswer() {
  }

  render() {
    return createCustomElement(this.template, `div`, `game`);
  }

  bind(element) {
    element.addEventListener(`change`, () => {
      const checkedInputs = element.querySelectorAll(`input:checked`);

      if (checkedInputs.length === 2) {
        // userAnswers -  recieved answer
        const userAnswers = [];
        // pseudo-array (collection of elements) => array
        [].forEach.call(checkedInputs, (it) => userAnswers.push(it.value));

        // correctAnswers - correct answer
        const correctAnswers = this.options.map((it) => it.answer);

        // isCorrect is boolean
        const isCorrect = (userAnswers[0] === correctAnswers[0] && userAnswers[1] === correctAnswers[1]);

        this.onAnswer(isCorrect);
      }
    });
  }
}

export default TwiceQuestionView;
