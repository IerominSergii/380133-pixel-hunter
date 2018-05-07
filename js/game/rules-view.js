import AbstractView from '../abstract-view';

export default class RulesView extends AbstractView {
  get template() {
    return `<div class="rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится 30 секунд.<br>
        Ошибиться можно не более 3 раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>`;
  }

  removeRules() {
    const rules = document.querySelector(`.rules`);
    const header = document.querySelector(`.header`);
    rules.remove();
    header.remove();
  }

  startGame() {
  }

  bind() {
    const disableEmptyButton = () => {
      const form = this.element.querySelector(`.rules__form`);
      const input = this.element.querySelector(`.rules__input`);
      const submitFormBtn = this.element.querySelector(`.rules__button`);

      const isFormBtnEmpty = () => {
        if (input.value) {
          submitFormBtn.removeAttribute(`disabled`);
        } else {
          if (!submitFormBtn.getAttribute(`disabled`)) {
            submitFormBtn.setAttribute(`disabled`, ``);
          }
        }
      };

      // автофокус
      input.focus();
      // кнопка отключена, пока в поле с ничего не введено
      submitFormBtn.setAttribute(`disabled`, ``);
      // если введено имя, то кнопка становится активной
      form.addEventListener(`input`, isFormBtnEmpty);
    };

    disableEmptyButton();

    const form = this.element.querySelector(`.rules__form`);

    form.addEventListener(`submit`, (evt) => {
      evt.preventDefault();

      this.startGame();
    });
  }
}
