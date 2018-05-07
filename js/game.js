// import {headerTemplate} from './layouts/header.js';
// import {changeLevel} from './data/game-data.js';
//
// import {questions} from './data/questions-data.js';
// import {footerTemplate} from './layouts/footer.js';
//
// import {questionsTemplate, questionsHandlers} from './layouts/questions.js';
// import {addStatsNode} from './layouts/statsFinal.js';
// import {MAX_QUESTION_AMOUNT} from './constant.js';
// import {reloadGameScreen, removeGame} from './util.js';
// import {renderGreetingNode} from './layouts/greeting';
// import {INITIAL_GAME} from './data/game-data';
//
// // startGame
// export const startGame = () => {
//   const central = document.querySelector(`.central`);
//   let state = Object.assign({}, INITIAL_GAME);
//
//   central.innerHTML = `
//   ${headerTemplate(state)}
//   ${footerTemplate}
//   `;
//
//   nextGame(state);
// };
//
// // nextGame
// export const nextGame = (state) => {
//   if (state.level === MAX_QUESTION_AMOUNT) {
//     removeGame();
//     addStatsNode(state);
//     return state;
//   }
//
//   const central = document.querySelector(`.central`);
//   const currentOption = questions[state.level];
//   const type = currentOption.type;
//
//   const gameTemplate = questionsTemplate[type];
//
//   const next = state.level + 1;
//
//   state = changeLevel(state, next);
//
//   reloadGameScreen(central, `
//     ${headerTemplate(state)}
//     ${gameTemplate(currentOption, state)}`);
//
//   const addHandler = questionsHandlers[type];
//
//   const toNextGame = () => {
//     nextGame(state);
//   };
//
//   const backButton = document.querySelector(`.back`);
//   backButton.addEventListener(`click`, () => {
//     state = Object.assign({}, INITIAL_GAME);
//     renderGreetingNode();
//   });
//
//   addHandler(toNextGame, state, currentOption, type);
//
//   return state;
// };
