const getResults = (answer) => {
  return `<li class="stats__result stats__result--${answer}"></li>`;
};

export const renderStats = (state) => {
  return `<div class="stats">
    <ul class="stats">
      ${state.answers.map(getResults).join(`\n      `)}
    </ul>
  </div>`;
};
