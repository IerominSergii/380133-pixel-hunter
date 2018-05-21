import AbstractView from '../abstract-view';
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

  isAnswerCorrect(type, userAnswer, rightAnswer = null) {
    let result;
    switch (type) {
      case `single`:
        result = (userAnswer === rightAnswer);
        return result;
      case `twice`:
        result = (userAnswer[0] === rightAnswer[0] && userAnswer[1] === rightAnswer[1]);
        return result;
      case `triple`:
        result = (userAnswer === `paint`);
        return result;
      default:
        throw new Error(`Wrong question type: ${type}`);
    }
  }

  onAnswer() {
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

          const result = this.isAnswerCorrect(this.type, checkedInput.value, this.option[0].answer);
          this.onAnswer(result);
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

            const result = this.isAnswerCorrect(this.type, checkedInputsValue, rightAnswerArray);
            this.onAnswer(result);
          }
        });
        break;
      case `triple`:
        const gameOptions = gameContent.querySelectorAll(`.game__option`);
        gameOptions.forEach((elem, i) => {
          elem.dataset.index = i;
          elem.addEventListener(`click`, (evt) => {
            const index = evt.target.dataset.index;

            const result = this.isAnswerCorrect(this.type, this.option[index].answer);
            this.onAnswer(result);
          });
        });
        break;
      default:
        throw new Error(`Wrong question type: ${this.type}`);
    }
  }
}
