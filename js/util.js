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
