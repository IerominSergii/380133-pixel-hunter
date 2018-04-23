const gameOption = (option) => {
  return `<div class="game__option">
    <img src="${option.src}" alt="${option.alt}" width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input name="${option.name}" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input name="${option.name}" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>`;
};

export const twice = (questionData) => {
  return {
    type: `twice`,
    title: `Угадайте для каждого изображения фото или рисунок?`,
    optionsRendered: `<form class="game__content">
      ${questionData.options.map(gameOption).join(``)}
    </form>`,
  };
};

export const twiceTemplate = (option) => {
  return `<div class="game">
  <p class="game__task">${twice(option).title}</p>
  <form class="game__content">
    ${twice(option).optionsRendered}
  </form>
  </div>`;
};

export const twiceHandlers = (callback) => {
  const central = document.querySelector(`.central`);

  // перехожу к следующему вопросу, если выбраны оба варианта ответа
  const nextQuestion = () => {
    if (central.querySelectorAll(`input:checked`).length === 2) {
      callback();
    }
  };

  const gameContent = central.querySelector(`.game__content`);
  gameContent.addEventListener(`change`, nextQuestion);
};
