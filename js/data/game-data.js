export const INITIAL_GAME = Object.freeze({
  results: [],
  level: 0,
  life: 3,
  timer: 30,
});

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
