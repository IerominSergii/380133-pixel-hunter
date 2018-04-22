// import {createElement} from './../createNode.js';

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

export const singleTemplate = (option) => {
  const opt = gameOption(option);
  return `<div class="game">
  <p class="game__task">Угадай, фото или рисунок?</p>
  <form class="game__content  game__content--wide">
    ${opt}
  </form>
  </div>`;
};

export const singleHandlers = (option, callback) => {
  const central = document.querySelector(`.central`);

  const nextQuestion = () => {
    if (central.querySelectorAll(`input:checked`)) {
      callback();
    }
  };

  const gameContent = central.querySelector(`.game__content`);
  gameContent.addEventListener(`change`, nextQuestion);
};

// export const getSingle = (option, nextQuestion) => {
//   const central = document.querySelector(`.central`);
//
//   // central.insertAdjacentHTML(`afterBegin`, singleTemplate(option));
//   // const template = createElement(singleTemplate(option));
//
//   const switchNextScreen = () => {
//     if (central.querySelectorAll(`input:checked`)) {
//       nextQuestion();
//     }
//   };
//
//   const gameContent = central.querySelector(`.game__content`);
//   gameContent.addEventListener(`change`, switchNextScreen);
// };
