// export default {
//   single: {
//     type: `single`,
//     title: `Угадай, фото или рисунок?`,
//     extraClass: `game__content--wide`,
//   },
//   twice: {
//     type: `twice`,
//     title: `Угадайте для каждого изображения фото или рисунок?`,
//     extraClass: ``,
//   },
//   triple: {
//     type: `triple`,
//     title: `Найдите рисунок среди изображений`,
//     extraClass: `game__content--triple`,
//   },
// };

const getOptions = {
  single(option) {
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
  },
  twice(option) {
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
  },
  triple(option) {
    return `<div class="game__option">
      <img src="${option.src}" alt="${option.alt}" width="304" height="455">
    </div>`;
  },
};


export const data = {
  single(options) {
    return {
      type: `single`,
      title: `Угадай, фото или рисунок?`,
      optionsRendered: `${getOptions.single(options[0])}`,
      gameContentClass: `game__content--wide`,
    };
  },
  twice(options) {
    return {
      type: `twice`,
      title: `Угадайте для каждого изображения фото или рисунок?`,
      optionsRendered: `${options.map(getOptions.twice).join(``)}`,
    };
  },
  triple(options) {
    return {
      type: `triple`,
      title: `Найдите рисунок среди изображений`,
      optionsRendered: `${options.map(getOptions.triple).join(``)}`,
      gameContentClass: `game__content--triple`,
    };
  },
};
