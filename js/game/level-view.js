import AbstractView from '../abstract-view';
import CurrentStats from './current-results-view';
import {data} from '../data/questions-type-data';
import {createCustomElement} from '../util';


export default class LevelView extends AbstractView {
  constructor(currentQuestion, questionAmount, results) {
    super();
    this.type = currentQuestion.type;
    this.option = currentQuestion.options;
    this.data = data[this.type];
    this.currentStats = new CurrentStats(results, questionAmount).template;
  }

  get template() {
    switch (this.type) {
      case `single`:
        return `<p class="game__task">${data.single(this.option).title}</p>
        <form class="game__content ${data.single(this.option).gameContentClass}">
          ${data.single(this.option).optionsRendered}
        </form>
        ${this.currentStats}`;
      case `twice`:
        return `<p class="game__task">${data.twice(this.option).title}</p>
        <form class="game__content">
          ${data.twice(this.option).optionsRendered}
        </form>
        ${this.currentStats}`;
      case `triple`:
        return `<p class="game__task">${data.triple(this.option).title}</p>
        <form class="game__content ${data.triple(this.option).gameContentClass}">
          ${data.triple(this.option).optionsRendered}
        </form>
        ${this.currentStats}`;
      default:
        throw new Error(`Unknown question type: ${this.type}`);
    }
  }

  onSingleAnswer() {
  }

  onTwiceAnswer() {
  }

  onTripleAnswer() {
  }

  render() {
    return createCustomElement(this.template, `div`, `game`);
  }

  bind() {
    const gameContent = this.element.querySelector(`.game__content`);

    switch (this.type) {
      case `single`:
        gameContent.addEventListener(`change`, () => {
          const checkedInput = gameContent.querySelector(`input:checked`);

          this.onSingleAnswer(checkedInput.value, this.option[0].answer);
        });
        break;
      case `twice`:
        gameContent.addEventListener(`change`, () => {
          const checkedInputs = gameContent.querySelectorAll(`input:checked`);

          // если есть оба ответа игрока
          if (checkedInputs.length === 2) {
            // userAnswerArray
            const checkedInputsValue = [];
            [].forEach.call(checkedInputs, (it) => {
              checkedInputsValue.push(it.value);
            });

            // rightAnswerArray
            const rightAnswerArray = this.option.map((it) => {
              return it.answer;
            });

            this.onTwiceAnswer(checkedInputsValue, rightAnswerArray);
          }
        });
        break;
      case `triple`:
        const gameOptions = gameContent.querySelectorAll(`.game__option`);
        gameOptions.forEach((elem, i) => {
          elem.dataset.index = i;
          elem.addEventListener(`click`, (evt) => {
            const index = evt.target.dataset.index;

            this.onTripleAnswer(this.option[index].answer);
          });
        });
        break;
      default:
        throw new Error(`Wrong question type: ${this.type}`);
    }
  }
}
