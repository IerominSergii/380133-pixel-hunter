import {assert} from 'chai';
import {questionTempls, questionTemplate} from './questionsTemplate.js';
import {questionTwice} from './questionTwice.js';

describe(`questionTemplate function`, () => {

  const INITIAL_GAME = {
    answers: [`wrong`, `slow`, `fast`, `correct`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`],
    level: 1,
    life: 3,
    timer: 30,
  };

  const question = {
    type: `twice`,
    options: [
      {
        src: `http://placehold.it/468x458`,
        alt: `Option 1`,
        name: `question1`,
        answer: `photo`,
      },
      {
        src: `http://placehold.it/468x458`,
        alt: `Option 2`,
        name: `question2`,
        answer: `paint`,
      },
    ],
  };

  // const expectedTemplate = `<div class="game">
  // <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
  //   <form class="game__content">
  //     <div class="game__option">
  //       <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
  //       <label class="game__answer game__answer--photo">
  //         <input name="question1" type="radio" value="photo">
  //         <span>Фото</span>
  //         </label>
  //       <label class="game__answer game__answer--paint">
  //         <input name="question1" type="radio" value="paint">
  //         <span>Рисунок</span>
  //       </label>
  //     </div>
  //     <div class="game__option">
  //       <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
  //       <label class="game__answer game__answer--photo">
  //         <input name="question2" type="radio" value="photo">
  //         <span>Фото</span>
  //       </label>
  //       <label class="game__answer game__answer--paint">
  //         <input name="question2" type="radio" value="paint">
  //         <span>Рисунок</span>
  //       </label>
  //     </div>
  //   </form>
  //   <div class="stats">
  //   <ul class="stats">
  //     <li class="stats__result stats__result--wrong"></li><li class="stats__result stats__result--fast"></li><li class="stats__result stats__result--fast"></li><li class="stats__result stats__result--slow"></li><li class="stats__result stats__result--slow"></li><li class="stats__result stats__result--slow"></li><li class="stats__result stats__result--correct"></li><li class="stats__result stats__result--correct"></li><li class="stats__result stats__result--correct"></li><li class="stats__result stats__result--correct"></li>
  //   </ul>
  //   </div>
  // </div>`;

  const expectedTemplate = `<div class="game">
  <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
    <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div><div class="game__option">
    <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input name="question2" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input name="question2" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
    </form>
    <div class="stats">
    <ul class="stats">
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>
  </div>
  </div>`;

  it(`should equal questionTempls Object element`, () => {
    assert.equal(questionTempls.twice, questionTwice);
  });

  it(`should return template from questionTemplate function`, () => {
    assert.equal(questionTemplate(INITIAL_GAME, question), expectedTemplate);
  });
});
