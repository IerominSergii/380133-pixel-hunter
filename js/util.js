export const createElement = (template = ``) => {
  const outer = document.createElement(`div`);
  outer.innerHTML = template;
  return outer.firstChild;
};

export const createCustomElement = (template = ``, tagName = `div`, elementClass = false) => {
  const outer = document.createElement(tagName);
  outer.innerHTML = template;

  if (elementClass) {
    outer.classList.add(elementClass);
  }

  return outer;
};

export const changeView = (element) => {
  const container = document.querySelector(`.central`);
  container.innerHTML = ``;
  container.appendChild(element);
};

export const updateView = (parent, view) => {
  parent.innerHTML = ``;
  parent.appendChild(view.element);
};
