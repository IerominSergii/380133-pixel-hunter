import {resultStatus} from './constant';
// import {renderGreetingNode} from './layouts/greeting';
// import {INITIAL_GAME} from './data/game-data';

export const changeScreen = (oldScreen, newTemplate) => {
  oldScreen.insertAdjacentHTML(`afterEnd`, newTemplate);
  oldScreen.remove();
};

// ====== перезагрузка экрана игры ======
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

// ====== изменение результатов игры ======
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

// возврат на экран приветствия

// вставка шаблона в элемент DOM-дерева (по умолчанию в ``.central`)
export const addElement = (template, containerClass = `.central`) => {
  // основной контейнер, в который загружаются экраны игры
  const container = document.querySelector(containerClass);
  container.innerHTML = ``;
  container.innerHTML = template;
};

export const createElement = (template = ``) => {
  const outer = document.createElement(`div`);
  outer.innerHTML = template;
  return outer.firstChild;
};

export const createCustomElement = (template = ``, tagName = `div`, elementClass = false) => {
  const outer = document.createElement(tagName);
  outer.innerHTML = template;

  if (elementClass) {
    outer.classList.add(elementClass);
  }

  return outer;
};

export const changeView = (element) => {
  const container = document.querySelector(`.central`);
  container.innerHTML = ``;
  container.appendChild(element);
};

export const updateView = (parent, view) => {
  parent.innerHTML = ``;
  parent.appendChild(view.element);
};

// export replaceElement = (oldElement, newElement) => {};


export const changeLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be type of number`);
  }

  if (level < 0) {
    throw new Error(`Level shouldn't be negative value`);
  }

  return Object.assign({}, game, {
    level
  });
};

export const addResult = (game, result) => {
  const results = game.results;
  results.push(result);

  return Object.assign({}, game, {
    results
  });
};

export const canContinue = (game) => game.life > 0;

export const die = (game) => {
  const life = game.life - 1;

  return Object.assign({}, game, {
    life
  });
};
