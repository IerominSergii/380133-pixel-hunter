const getOption = (option) => {
  return `<div class="game__option">
    <img src="${option.src}" alt="${option.alt}" width="304" height="455">
  </div>`;
};

export const questionTriple = (questionData) => {
  return {
    title: `Найдите рисунок среди изображений`,
    optionsRendered: `<form class="game__content  game__content--triple">
      ${questionData.options.map(getOption).join(``)}
    </form>`,
  };
};
