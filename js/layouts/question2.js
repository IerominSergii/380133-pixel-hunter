const gameOption = (option) => {
  return `<div class="game__option">
    <img src="${option.src}" alt="${option.alt}" width="705" height="455">
    <label class="game__answer  game__answer--photo">
      <input name="${option.name}" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--wide  game__answer--paint">
      <input name="${option.name}" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>`;
};

export const question2 = (questionData) => {
  return `<div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
    ${gameOption(questionData.options[0])}
    </form>
    <div class="stats">
    <ul class="stats">
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>
    </div>
  </div>`;
};
