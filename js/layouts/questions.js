import {renderStats} from './statsTemplate';
import {reloadResult} from '../util';

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

const data = {
  single(questionData) {
    return {
      type: `single`,
      title: `Угадай, фото или рисунок?`,
      optionsRendered: `${getOptions.single(questionData.options[0])}`,
      gameContentClass: `game__content--wide`,
    };
  },
  twice(questionData) {
    return {
      type: `twice`,
      title: `Угадайте для каждого изображения фото или рисунок?`,
      optionsRendered: `${questionData.options.map(getOptions.twice).join(``)}`,
    };
  },
  triple(questionData) {
    return {
      type: `triple`,
      title: `Найдите рисунок среди изображений`,
      optionsRendered: `${questionData.options.map(getOptions.triple).join(``)}`,
      gameContentClass: `game__content--triple`,
    };
  },
};


export const questionsTemplate = {
  single(option, state) {
    return `<div class="game">
    <p class="game__task">${data.single(option).title}</p>
    <form class="game__content ${data.single(option).gameContentClass}">
      ${data.single(option).optionsRendered}
    </form>
    ${renderStats(state)}
    </div>`;
  },
  twice(option, state) {
    return `<div class="game">
    <p class="game__task">${data.twice(option).title}</p>
    <form class="game__content">
      ${data.twice(option).optionsRendered}
    </form>
    ${renderStats(state)}
    </div>`;
  },
  triple(option, state) {
    return `<div class="game">
    <p class="game__task">${data.triple(option).title}</p>
    <form class="game__content ${data.triple(option).gameContentClass}">
      ${data.triple(option).optionsRendered}
    </form>
    ${renderStats(state)}
    </div>`;
  },
};

export const questionsHandlers = {
  single(callback, game, option, type) {
    const central = document.querySelector(`.central`);
    const gameContent = central.querySelector(`.game__content`);

    const nextQuestion = () => {
      const inputElement = central.querySelector(`input:checked`);
      if (inputElement) {
        game = reloadResult[type](game, inputElement, option);
        callback();
      }
    };

    gameContent.addEventListener(`change`, nextQuestion);
  },
  twice(callback, game, option, type) {
    const central = document.querySelector(`.central`);
    const gameContent = central.querySelector(`.game__content`);

    // перехожу к следующему вопросу, если выбраны оба варианта ответа
    const nextQuestion = () => {
      if (central.querySelectorAll(`input:checked`).length === 2) {
        const inputElements = central.querySelectorAll(`input:checked`);
        game = reloadResult[type](game, inputElements, option);
        callback();
      }
    };

    gameContent.addEventListener(`change`, nextQuestion);
  },
  triple(callback, game, option, type) {
    const form = document.querySelector(`.game__content`);
    const gameOptions = form.querySelectorAll(`.game__option`);

    // по клику на любое из изображений - на след игру
    gameOptions.forEach((elem) => elem.addEventListener(`click`, (evt) => {
      const chosenElement = evt.target;
      game = reloadResult[type](game, gameOptions, option, chosenElement);
      callback();
    }));
  },
};
