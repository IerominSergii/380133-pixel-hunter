import {addAfterBeginCentral} from './../createNode.js';
import {checkGameResult, countPoints, countLifes} from './../checkResults.js';

// шаблон экрана с результатами
export const statsTemplate = (state) => {
  return `<div class="result">
    <h1>Победа!</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
          ${state.results.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
          </ul>
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${countPoints(state)}</td>
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
        <td class="result__total">${countLifes(state)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">0&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">0</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${checkGameResult(state)}</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">2.</td>
        <td>
          <ul class="stats">
            ${state.results.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
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
            ${state.results.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
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
};

// добавление экрана с результатами
export const addStatsNode = (game) => {
  const header = document.querySelector(`.header`);
  header.remove();
  // добавление экрана с результатами игры
  addAfterBeginCentral(statsTemplate(game));

  // функция возврата на экран приветствия по клику на кнопку "Назад"
  // backToGreeting();
};
