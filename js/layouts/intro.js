import {addBeforeEndCentral, fillNodeFromString} from './../createNode.js';
import {addGreetingNode} from './greeting.js';
import {footerTemplate} from './footer.js';

// шаблон экрана загрузки
const introTemplate = `<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`;

// добавление экрана загрузки
export const addIntroNode = () => {
  fillNodeFromString(introTemplate);
  // добавляю footer
  addBeforeEndCentral(footerTemplate);

  const asterisk = document.querySelector(`.intro__asterisk`);

  // вешаю обработчик перехода на страницу приветствия
  // по клику на `звездочку`
  asterisk.addEventListener(`click`, addGreetingNode);
};
