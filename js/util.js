const createElement = (template = ``) => {
  const outer = document.createElement(`div`);
  outer.innerHTML = template;
  return outer.firstChild;
};

const createCustomElement = (template = ``, tagName = `div`, elementClass = false) => {
  const outer = document.createElement(tagName);
  outer.innerHTML = template;

  if (elementClass) {
    outer.classList.add(elementClass);
  }

  return outer;
};

const changeView = (element) => {
  const container = document.querySelector(`.central`);
  container.innerHTML = ``;
  container.appendChild(element);
};

const updateView = (parent, view) => {
  parent.innerHTML = ``;
  parent.appendChild(view.element);
};

const cloneDeeply = (obj) => {
  const output = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      let v = obj[key];
      output[key] = (typeof v === `object`) ? cloneDeeply(v) : v;
    }
  }

  return output;
};

export {createElement};
export {createCustomElement};
export {changeView};
export {updateView};
export {cloneDeeply};
