// import {fillNodeFromString} from './../createNode.js';
// import {renderGreetingNode} from './greeting.js';
// import {footerTemplate} from './footer.js';
//
// // шаблон экрана загрузки
// const addIntroTemplate = `<div id="main" class="central__content">
//     <div id="intro" class="intro">
//       <h1 class="intro__asterisk">*</h1>
//       <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
//     </div>
//   </div>`;
//
// // удаление экрана загрузки
// const deleteIntroScreen = () => {
//   const intro = document.getElementById(`main`);
//   intro.remove();
// };
//
// const formIntroToGreeting = () => {
//   deleteIntroScreen();
//   renderGreetingNode();
// };
//
// // вешаю Intro обработчики => переход на greeting
// const addIntroHandlers = () => {
//   // переход на страницу приветствия по клику на `звездочку`
//   const introAsterisk = document.querySelector(`.intro__asterisk`);
//   introAsterisk.addEventListener(`click`, formIntroToGreeting);
// };
//
// // добавление экрана загрузки
// export const renderIntroScreen = () => {
//   fillNodeFromString(`
//     ${addIntroTemplate}
//     ${footerTemplate}
//     `);
//
//   addIntroHandlers();
// };
