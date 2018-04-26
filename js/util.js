import {resultStatus} from './constant';

export const changeScreen = (oldScreen, newTemplate) => {
  oldScreen.insertAdjacentHTML(`afterEnd`, newTemplate);
  oldScreen.remove();
};

export const reloadGameScreen = (container, template) => {
  const header = document.querySelector(`.header`);
  const game = document.querySelector(`.game`);

  if (header) {
    header.remove();
  }

  if (game) {
    game.remove();
  }

  container.insertAdjacentHTML(`afterBegin`, template);
};

export const removeGame = () => {
  const game = document.querySelector(`.game`);
  game.remove();
};

export const reloadResult = {
  single(state, inputElement, currentOption) {
    let results = state.results;
    let lifes = {life: state.life};
    if (inputElement.value === currentOption.options[0].answer) {
      results.push(resultStatus.correct);
    } else {
      results.push(resultStatus.wrong);

      lifes.life = state.life - 1;
    }

    return Object.assign({}, state, results, lifes);
  },
  twice(state, inputElements, currentOption) {
    let results = state.results;
    let lifes = {life: state.life};
    const firstAnswer = currentOption.options[0].answer;
    const secondAnswer = currentOption.options[1].answer;
    const firstInputValue = inputElements[0].value;
    const secondInputValue = inputElements[1].value;

    if (firstInputValue === firstAnswer && secondInputValue && secondAnswer) {
      results.push(resultStatus.correct);
    } else {
      results.push(resultStatus.wrong);

      lifes.life = state.life - 1;
    }

    return Object.assign({}, state, results, lifes);
  },
  triple(state, gameOptions, currentOption, chosenElement) {
    let results = state.results;
    let lifes = {life: state.life};

    for (let i = 0; i < gameOptions.length; i++) {
      gameOptions[i].dataset.answer = currentOption.options[i].answer;
    }

    if (chosenElement.dataset.answer === `paint`) {
      results.push(resultStatus.correct);
    } else {
      results.push(resultStatus.wrong);

      lifes.life = state.life - 1;
    }

    return Object.assign({}, state, results, lifes);
  },
};
