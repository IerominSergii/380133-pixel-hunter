import {questionTemplate} from './getQuestionTemplate.js';
import {headerTemplate} from './header.js';
import {addAfterBeginCentral, addFragmentFromTemplate} from './../createNode.js';
import {INITIAL_GAME} from './../data/game-data.js';
import {questions} from './../data/questions-data.js';

// const provideNextScreen = {
//   single() {
//     const gameContentNode = document.querySelector(`.game__content`);
//
//     if (document.querySelectorAll(`input:checked`)) {
//       addQuestionNode(questionsArray, state);
//     }
//
//     // const addNextNode = addQuestionNode(questionsArray, state);
//     gameContentNode.addEventListener(`change`, addQuestionNode(questionsArray, state));
//   },
//   twice(callback) {
//     const gameContentNode = document.querySelector(`.game__content`);
//
//     if (document.querySelectorAll(`input:checked`).length === 2) {
//       callback();
//     }
//     gameContentNode.addEventListener(`change`, callback);
//   },
//   triple(callback) {
//     const gameOption = document.querySelectorAll(`.game__option`);
//
//     // на каждый элемент коллекции вешаю обработчик
//     // перехода на страницу с результатами игры
//     gameOption.forEach((elem) => elem.addEventListener(`click`, callback));
//   },
// };

export const addQuestionNode = (questionsArray, state) => {

  if (document.querySelector(`.game`)) {
    // document.querySelector(`.game__task`).remove();
    // document.querySelector(`.game__content`).remove();
    // document.querySelector(`.stats`).remove();
    document.querySelector(`.game`).remove();
  }

  if (!document.querySelector(`.header`)) {
    addAfterBeginCentral(headerTemplate(INITIAL_GAME));
  }

  const newQuestionScreen = questions.shift();
  const headerElement = document.querySelector(`.header`);
  headerElement.after(addFragmentFromTemplate(questionTemplate(state, newQuestionScreen)));


  const type = newQuestionScreen.type;

  switch (type) {
    case `single`:
      const gameContentNode = document.querySelector(`.game__content`);

      if (document.querySelectorAll(`input:checked`)) {
        addQuestionNode(questionsArray, state);
      }

      const addNextNode = addQuestionNode(questionsArray, state);
      gameContentNode.addEventListener(`change`, addNextNode);
      break;
    case `twice`:
      const contentNode = document.querySelector(`.game__content`);

      if (document.querySelectorAll(`input:checked`).length === 2) {
        addQuestionNode(questionsArray, state);
      }

      const nextNode = addQuestionNode(questionsArray, state);
      contentNode.addEventListener(`change`, nextNode);
      break;
    case `triple`:
      const gameOption = document.querySelectorAll(`.game__option`);

      gameOption.forEach((elem) => elem.addEventListener(`click`, addQuestionNode(questionsArray, state)));
      break;
    default:
      // тут добавь проверку значения переменной type и переход на итоговую статистику
      throw new Error(`Wrong templete type`);
  }

  // const provideNextNode = provideNextScreen[type];
  // const addNextNode = addQuestionNode(state, questionsArray[0]);
  // provideNextNode(addNextNode);

  // if (type === `single`) {
  //   const gameContentNode = document.querySelector(`.game__content`);
  //
  //   if (document.querySelectorAll(`input:checked`)) {
  //     addQuestionNode(questionsArray, state);
  //   }
  //
  //   // const addNextNode = addQuestionNode(questionsArray, state);
  //   gameContentNode.addEventListener(`change`, addQuestionNode(questionsArray, state));
  // } else {
  //   if (type === `twice`) {
  //     const gameContentNode = document.querySelector(`.game__content`);
  //
  //     if (document.querySelectorAll(`input:checked`).length === 2) {
  //       addQuestionNode(questionsArray, state);
  //     }
  //
  //     gameContentNode.addEventListener(`change`, addQuestionNode(questionsArray, state));
  //   } else {
  //     if (type === `triple`) {
  //       const gameOption = document.querySelectorAll(`.game__option`);
  //
  //       gameOption.forEach((elem) => elem.addEventListener(`click`, addQuestionNode(questionsArray, state)));
  //     }
  //   }
  // }
};
