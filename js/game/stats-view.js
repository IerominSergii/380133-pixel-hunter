import AbstractView from '../abstract-view';
import {countPoints, countLifes, checkGameResult} from '../checkResults';
import CurrentStats from './current-results-view';
import {questions} from '../data/questions-data';


export default class StatsView extends AbstractView {
  constructor(results, life, title) {
    super();
    this.results = results;
    this.life = life;
    this.title = title;
    this.resultsTemplate = new CurrentStats(this.results, questions.length).shortTemplate;
  }

  get template() {
    return `<div class="result">
      <h1>${this.title.toUpperCase()}</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
            ${this.resultsTemplate}
            </ul>
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">${countPoints(this.results)}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">0&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">0</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${countLifes(this.life)}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">0&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">0</td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">${checkGameResult(this.results, this.life)}</td>
        </tr>
      </table>
      <table class="result__table">
        <tr>
          <td class="result__number">2.</td>
          <td>
            <ul class="stats">
              ${this.resultsTemplate}
            </ul>
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">fail</td>
        </tr>
      </table>
      <table class="result__table">
        <tr>
          <td class="result__number">3.</td>
          <td colspan="2">
            <ul class="stats">
              ${this.resultsTemplate}
            </ul>
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">900</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">100</td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">950</td>
        </tr>
      </table>
    </div>`;
  }
}
