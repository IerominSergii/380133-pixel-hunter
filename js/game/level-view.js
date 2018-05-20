import AbstractView from '../abstract-view';
// import CurrentStats from './current-results-view';
import {getQuestionTemplate} from '../data/questions-type-data';
import {createCustomElement} from '../util';


export default class LevelView extends AbstractView {
  constructor(type, options) {
    super();
    this.type = type;
    this.option = options;
  }

  get template() {
    return getQuestionTemplate(this.type, this.option);
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
