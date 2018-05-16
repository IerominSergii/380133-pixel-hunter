import AbstractView from '../abstract-view';
import {createCustomElement} from '../util';
import {resultStatus} from '../constant';

export default class CurrentStats extends AbstractView {
  constructor(results, gameQuestionAmount) {
    super();
    this.results = results;
    this.questionAmount = gameQuestionAmount;
    this.showenResults = this.resultsForView();
  }

  resultsForView() {
    // сколько неизвестных результатов
    const unknownResultsAmount = this.questionAmount - this.results.length;

    // копирую массив
    const showenResults = this.results.map((it) => it);

    for (let i = 0; i < unknownResultsAmount; i++) {
      showenResults.push(resultStatus.unknown);
    }

    return showenResults;
  }

  get template() {
    return `<div class="stats">
      <ul class="stats">
        ${this.showenResults.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
      </ul>
    </div>`;
  }

  get shortTemplate() {
    return `<ul class="stats">
        ${this.showenResults.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
      </ul>`;
  }

  render() {
    return createCustomElement(this.template, `div`, `stats`);
  }
}
