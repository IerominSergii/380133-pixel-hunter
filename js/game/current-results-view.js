import AbstractView from '../abstract-view';
import {MAX_QUESTION_AMOUNT} from '../constant';
import {createCustomElement} from '../util';

export default class CurrentStats extends AbstractView {
  constructor(results) {
    super();
    this.results = results;
    this.showenResults = this.resultsForView();
  }

  resultsForView() {
    const unknownResultsAmount = MAX_QUESTION_AMOUNT - this.results.length;
    const defaultResults = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];
    defaultResults.length = unknownResultsAmount;
    const showenResults = this.results.concat(defaultResults);

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
