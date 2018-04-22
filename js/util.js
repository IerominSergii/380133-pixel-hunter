export const changeScreen = (oldScreen, newTemplate) => {
  oldScreen.insertAdjacentHTML(`afterEnd`, newTemplate);
  oldScreen.remove();
};
