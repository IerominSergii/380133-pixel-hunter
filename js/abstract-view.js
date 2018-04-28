export const createElement = (template = ``, containerClass = `.central`) => {
  // основной контейнер, в который загружаются экраны игры
  const container = document.querySelector(containerClass);
  container.innerHTML = ``;
  container.innerHTML = template.trim();
};

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
  }

  get template() {
    throw new Error(`Template is required`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }

    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }

  render() {
    return createElement(this.template);
  }

  bind() {
    // bind handlers is required
  }
}
