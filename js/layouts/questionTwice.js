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

export const question1 = (questionData) => {
  return {
    title: `Угадайте для каждого изображения фото или рисунок?`,
    optionsRendered: `<form class="game__content">
      ${questionData.options.map(gameOption).join(``)}
    </form>`,
  };
};
