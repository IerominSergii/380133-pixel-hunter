const renderStats = function (state) {
  return `<div class="stats">
    <ul class="stats">
      ${state.answers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
    </ul>
  </div>`;
};

export {renderStats};
