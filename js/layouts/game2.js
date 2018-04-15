import {addFragmentFromTemplate} from './../createNode.js';
import addGame3Node from './game3.js';
import {questionTemplate} from './questionsTemplate.js';
import {questions} from './../data/questions-data.js';

// добавление экрана со второй игрой
// и добавляю функционал для перехода на след экран
const game2Node = () => {
  const game = document.querySelector(`.game`);
  game.remove();

  const header = document.querySelector(`.header`);
  // добавление экрана со второй игрой
  const nextQuestionScreen = questions.shift();
  header.after(addFragmentFromTemplate(questionTemplate(nextQuestionScreen)));

  // функция возврата на экран приветствия по клику на кнопку "Назад"
  // backToGreeting();

  // нахожу форму и вопрос
  const form = document.querySelector(`.game__content`);

  // перехожу на страницу с третьей игрой
  const switchGame3Screen = () => {
    if (form.querySelector(`input:checked`)) {
      addGame3Node();
    }
  };

  // по окончании изменения значения одного из элементов формы
  // перехожу на следующий экран
  form.addEventListener(`change`, switchGame3Screen);
};

// экспортирую функцию
// добавления экрана со второй игрой
export default game2Node;
