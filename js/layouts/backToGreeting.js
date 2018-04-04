/*
  Набор импортированных значений
*/
import addGreetingNode from './greeting.js';

/*
  Список констант
*/

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
export default backToGreeting;
