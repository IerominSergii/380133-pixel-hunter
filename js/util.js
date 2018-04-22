export const container = document.querySelector(`.central`);

export const changeScreen = (oldScreen, newTemplate) => {
  // const oldScreenElement = document.querySelector(`.${oldScreen}`);
  oldScreen.remove();
  container.insertAdjacentHTML(`afterBegin`, newTemplate);
};
