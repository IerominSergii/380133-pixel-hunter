import {answerStatus} from './constant';

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

export const reloadResultSingle = (state, inputElement, currentOption) => {
  let results = state.results;
  if (inputElement.value === currentOption.options[0].answer) {
    results.push(answerStatus.correct);
  } else {
    results.push(answerStatus.wrong);
  }

  return Object.assign({}, state, results);
};

export const reloadResultTwice = (state, inputElements, currentOption) => {
  let results = state.results;
  const firstAnswer = currentOption.options[0].answer;
  const secondAnswer = currentOption.options[1].answer;
  const firstInputValue = inputElements[0].value;
  const secondInputValue = inputElements[1].value;

  if (firstInputValue === firstAnswer && secondInputValue && secondAnswer) {
    results.push(answerStatus.correct);
  } else {
    results.push(answerStatus.wrong);
  }

  return Object.assign({}, state, results);
};

export const reloadResultTriple = (state, gameOptions, currentOption, chosenElement) => {
  let results = state.results;

  for (let i = 0; i < gameOptions.length; i++) {
    gameOptions[i].dataset.answer = currentOption.options[i].answer;
  }

  if (chosenElement.dataset.answer === `paint`) {
    results.push(answerStatus.correct);
  } else {
    results.push(answerStatus.wrong);
  }

  return Object.assign({}, state, results);
};
