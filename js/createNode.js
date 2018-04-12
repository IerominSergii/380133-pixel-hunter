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
