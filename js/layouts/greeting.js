/*
 Набор импортированных значений
*/
import fillNodeFromString from './../createNode.js';
import addRulesNode from './rules.js';

/*
 Список констант
*/

// шаблон приветственного экрана
const greetingTemplate = `<div class="greeting central--blur">
  <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
  <h1 class="greeting__asterisk">*</h1>
  <div class="greeting__challenge">
    <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
    <p>Правила игры просты.<br>
      Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
      Задача кажется тривиальной, но не думай, что все так просто.<br>
      Фотореализм обманчив и коварен.<br>
      Помни, главное — смотреть очень внимательно.</p>
  </div>
  <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
</div>
<footer class="footer">
  <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
  <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
  <div class="footer__social-links">
    <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
    <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
    <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
    <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
  </div>
</footer>`;

// добавление экрана приветствия
const addGreetingNode = () => {
  fillNodeFromString(greetingTemplate);

  const greetingContinue = document.querySelector(`.greeting__continue`);

  // вешаю обработчик перехода на страницу с правилами
  // по клику на `стрелку вправо`
  greetingContinue.addEventListener(`click`, addRulesNode);
};

// фунция возврата на экран приветствия по нажатию на кнопку "Назад"
const backToGreeting = () => {
  // нахожу кнопку "Назад"
  const backButton = document.querySelector(`.back`);

  // переход на страницу приветствия по клику на кнопку "Назад"
  backButton.addEventListener(`click`, addGreetingNode);
};

/*
 Набор экспортированных значений
*/

// экспортирую функцию
// добавления экрана приветствия
export {backToGreeting, addGreetingNode};
