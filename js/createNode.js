/*
  Список констант
*/
// основной контейнер, в который загружаются экраны игры
export const nodeCentral = document.querySelector(`.central`);

// fillNodeFromString - переписывает содержимое .central ноды
// на переданное в template
export const fillNodeFromString = (template, element = nodeCentral) => {
  element.innerHTML = ``;
  element.innerHTML = template;
};

// addElementFromTemplate - добавляет в container template
export const addFragmentFromTemplate = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template;
  return container.firstChild;
};

export const addAfterBeginCentral = (template) => nodeCentral.insertAdjacentHTML(`afterBegin`, template);
export const addBeforeEndCentral = (template) => nodeCentral.insertAdjacentHTML(`beforeEnd`, template);

// загрузка шаблоны экрана игры
// export const getGameTemplate = (gameLevel) => `<div class="game">
//   <p class="game__task">${gameLevel.task}</p>
//   <form class="game__content">${gameLevel.gameСontent}</form>
//   <div class="stats">${gameLevel.stats}</div>
// </div>`;
