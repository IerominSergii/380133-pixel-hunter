import {createElement} from './../createNode.js';

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

const getSingleTemplate = (option) => {
  return `<div class="game">
  <p class="game__task">Угадай, фото или рисунок?</p>
  <form class="game__content  game__content--wide">
    ${gameOption(option)}
  </form>
  </div>`;
};

export const getSingle = (option, nextQuestion) => {
  const template = createElement(getSingleTemplate(option));

  const switchNextScreen = () => {
    if (template.querySelectorAll(`input:checked`)) {
      nextQuestion();
    }
  };

  const gameContent = template.querySelector(`.game__content`);
  gameContent.addEventListener(`change`, switchNextScreen);

  return template;
};
