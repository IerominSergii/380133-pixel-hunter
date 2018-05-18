import {createCustomElement} from '../util';


export const INITIAL_GAME = Object.freeze({
  results: [],
  level: 0,
  life: 3,
  timer: 30,
});

export const createGameFragment = () => {
  const gameFragment = document.createDocumentFragment();
  const headerContainer = createCustomElement(``, `header`, `header`);
  const levelContainer = createCustomElement(``, `div`, `game`);

  gameFragment.appendChild(headerContainer);
  gameFragment.appendChild(levelContainer);

  return gameFragment;
};

export const changeLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }

  if (level < 0) {
    throw new Error(`Level should not be negative value`);
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

export const resetGame = () => {
  return Object.assign({}, INITIAL_GAME);
};
