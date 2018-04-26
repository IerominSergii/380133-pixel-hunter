export const renderStats = function (state) {
  const defaultResults = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];

  const resultsAmount = state.results.length;
  defaultResults.splice(0, resultsAmount);
  const showenResults = state.results.concat(defaultResults);

  return `<div class="stats">
    <ul class="stats">
      ${showenResults.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
    </ul>
  </div>`;
};
