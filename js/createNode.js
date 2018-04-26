// fillNodeFromString - переписывает содержимое .central ноды
// на переданное в template
export const fillNodeFromString = (template) => {
  // основной контейнер, в который загружаются экраны игры
  const element = document.querySelector(`.central`);
  element.innerHTML = ``;
  element.innerHTML = template;
};

export const addAfterBeginCentral = (template) => {
  const elementCentral = document.querySelector(`.central`);
  elementCentral.insertAdjacentHTML(`afterBegin`, template);
};
