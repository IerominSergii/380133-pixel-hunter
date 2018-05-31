const INITIAL_GAME = Object.freeze({
  results: [],
  level: 0,
  life: 3,
  timer: 30,
});

const changeLevel = (game, level) => {
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

const addResult = (game, result) => {
  const results = game.results;
  results.push(result);

  return Object.assign({}, game, {
    results
  });
};

const canContinue = (game) => game.life > 0;

const die = (game) => {
  const life = game.life - 1;

  return Object.assign({}, game, {
    life
  });
};

const resetGame = () => {
  return Object.assign({}, INITIAL_GAME);
};

export {INITIAL_GAME};
export {changeLevel};
export {addResult};
export {canContinue};
export {die};
export {resetGame};
