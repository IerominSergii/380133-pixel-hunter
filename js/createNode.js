// основной контейнер, в который загружаются экраны игры
// const nodeCentral = document.querySelector(`.central`);

// fillNodeFromString - переписывает содержимое .central ноды
// на переданное в template
export const fillNodeFromString = (template) => {
  // основной контейнер, в который загружаются экраны игры
  const element = document.querySelector(`.central`);
  element.innerHTML = ``;
  element.innerHTML = template;
};

export const createElement = (template) => {
  const outer = document.createElement(`div`);
  outer.innerHTML = template;
  return outer;
};

// addElementFromTemplate - добавляет в container template
export const addFragmentFromTemplate = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template;
  return container;
};

export const addAfterBeginCentral = (template) => {
  const elementCentral = document.querySelector(`.central`);
  elementCentral.insertAdjacentHTML(`afterBegin`, template);
};

export const addBeforeEndCentral = (template) => {
  const central = document.querySelector(`.central`);
  central.insertAdjacentHTML(`beforeEnd`, template);
};

export const appendNode = (template) => {
  // основной контейнер, в который загружаются экраны игры
  const element = document.querySelector(`.central`);
  element.appendChild(template);
};

// =================== @fix новые - все что выше - удали!!! ===================
export const addAfterBegin = (element, template) => {
  const elementCentral = document.querySelector(`.central`);
  elementCentral.insertAdjacentHTML(`afterBegin`, template);
};
