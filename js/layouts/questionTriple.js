const getOptions = (option) => {
  return `<div class="game__option">
    <img src="${option.src}" alt="${option.alt}" width="304" height="455">
  </div>`;
};

export const triple = (questionData) => {
  return {
    type: `triple`,
    title: `Найдите рисунок среди изображений`,
    optionsRendered: `${questionData.options.map(getOptions).join(``)}`,
    gameContentClass: `game__content--triple`,
  };
};

export const tripleTemplate = (option) => {
  return `<div class="game">
  <p class="game__task">${triple(option).title}</p>
  <form class="game__content ${triple(option).gameContentClass}">
    ${triple(option).optionsRendered}
  </form>
  </div>`;
};

export const tripleHandlers = (callback) => {
  const form = document.querySelector(`.game__content`);
  const gameOptions = form.querySelectorAll(`.game__option`);

  // по клику на любое из изображений - на след игру
  gameOptions.forEach((elem) => elem.addEventListener(`click`, callback));
};
