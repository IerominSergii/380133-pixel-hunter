const getOption = (option) => {
  return `<div class="game__option">
    <img src="${option.src}" alt="${option.alt}" width="304" height="455">
  </div>`;
};

export const triple = (questionData) => {
  return {
    type: `triple`,
    title: `Найдите рисунок среди изображений`,
    optionsRendered: `<form class="game__content  game__content--triple">
      ${questionData.options.map(getOption).join(``)}
    </form>`,
  };
};

export const tripleTemplate = () => {
  return `<div class="game">
  <p class="game__task">${triple.title}</p>
  <form class="game__content  game__content--wide">
    ${triple.optionsRendered}
  </form>
  </div>`;
};

export const tripleHandlers = (option, callback) => {
  const form = document.querySelector(`.game__content`);
  const gameOption = form.querySelectorAll(`.game__option`);

  // по клику на любое из изображений - на след игру
  gameOption.forEach((elem) => elem.addEventListener(`click`, callback));
};
