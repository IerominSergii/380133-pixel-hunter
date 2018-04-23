const gameOption = (option) => {
  const singleOption = option.options[0];
  return `<div class="game__option">
    <img src="${singleOption.src}" alt="${singleOption.alt}" width="705" height="455">
    <label class="game__answer  game__answer--photo">
      <input name="${singleOption.name}" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--wide  game__answer--paint">
      <input name="${singleOption.name}" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>`;
};

export const single = (questionData) => {
  return {
    type: `single`,
    title: `Угадай, фото или рисунок?`,
    optionsRendered: `${gameOption(questionData)}`,
    gameContentClass: `game__content--wide`,
  };
};

export const singleTemplate = (option) => {
  let extraClass;

  if (single(option).gameContentClass) {
    extraClass = single(option).gameContentClass;
  } else {
    extraClass = ``;
  }

  return `<div class="game">
  <p class="game__task">${single(option).title}</p>
  <form class="game__content ${extraClass}">
    ${single(option).optionsRendered}
  </form>
  </div>`;
};

export const singleHandlers = (callback) => {
  const central = document.querySelector(`.central`);

  const nextQuestion = () => {
    if (central.querySelectorAll(`input:checked`)) {
      callback();
    }
  };

  const gameContent = central.querySelector(`.game__content`);
  gameContent.addEventListener(`change`, nextQuestion);
};
