import IntroView from './intro-view';
import GreetingView from './greeting-view';
import RulesView from './rules-view';
import HeaderView from './header-view';
import FooterView from './footer-view';


import LevelView from './level-view';
import StatsView from './stats-view';


import {INITIAL_GAME, changeLevel, addResult, canContinue, die} from '../data/game-data';
import {createCustomElement, updateView, changeView, cloneDeeply} from './../util';
import {questions} from '../data/questions-data';
import {resultStatus} from '../constant';


// создаю вьюшки
const intro = new IntroView();
const greeting = new GreetingView();
const rules = new RulesView();
const shortHeader = new HeaderView();
const footer = new FooterView();

const gameContainer = document.querySelector(`.central`);
let gameState = cloneDeeply(INITIAL_GAME);
//
const gameFragment = document.createDocumentFragment();
const headerContainer = createCustomElement(``, `header`, `header`);
const levelContainer = createCustomElement(``, `div`, `game`);

// ===== переопределяю функции-исполнители во вьюшках =====
rules.startGame = () => {
  rules.removeRules();
  gameContainer.insertBefore(gameFragment, gameContainer.firstChild);

  playGame();
};

shortHeader.onBackArrowClick = () => {
  gameState = cloneDeeply(INITIAL_GAME);

  changeView(greeting.element);
  gameContainer.appendChild(footer.element);
};

intro.onAsteriskClick = () => {
  changeView(greeting.element);
  gameContainer.appendChild(footer.element);
};

greeting.onContinueClick = () => {
  changeView(rules.element);

  // автофокус и очистка value input
  const input = document.querySelector(`.rules__input`);
  input.value = ``;
  input.focus();

  gameContainer.prepend(shortHeader.element);
  gameContainer.append(footer.element);
};

// ===== game logic ======
const continueOrDie = () => {
  gameState = changeLevel(gameState, gameState.level + 1);

  if (canContinue(gameState)) {
    playGame();
  } else {
    const end = new StatsView(gameState.results, gameState.life).element;
    levelContainer.replaceWith(end);

    updateView(headerContainer, shortHeader);
  }
};


// ===== переопределяю функции-исполнители в LevelView =====
const onSingleUserAnswer = (userAnswer, rightAnswer) => {
  if (userAnswer === rightAnswer) {
    gameState = addResult(gameState, resultStatus.correct);
  } else {
    if (userAnswer !== rightAnswer) {
      gameState = addResult(gameState, resultStatus.wrong);
      gameState = die(gameState);
    }
  }

  continueOrDie();
};

const onTwiceUserAnswer = (userAnswerArray, rightAnswerArray) => {
  if (userAnswerArray[0] === rightAnswerArray[0] && userAnswerArray[1] === rightAnswerArray[1]) {
    gameState = addResult(gameState, resultStatus.correct);
  } else {
    gameState = addResult(gameState, resultStatus.wrong);
    gameState = die(gameState);
  }

  continueOrDie();
};

const onTripleUserAnswer = (answer) => {
  if (answer === `paint`) {
    gameState = addResult(gameState, resultStatus.correct);
  } else {
    gameState = addResult(gameState, resultStatus.wrong);
    gameState = die(gameState);
  }

  continueOrDie();
};

const updateGame = (state) => {
  const fullHeader = new HeaderView(state.life, state.timer);

  fullHeader.onBackArrowClick = () => {
    gameState = cloneDeeply(INITIAL_GAME);

    changeView(greeting.element);
    gameContainer.appendChild(footer.element);
  };

  updateView(headerContainer, fullHeader);

  let levelNumber = state.level;
  const currentQuestion = questions[levelNumber];
  const level = new LevelView(currentQuestion, questions.length, state.results);
  updateView(levelContainer, level);

  level.onSingleAnswer = onSingleUserAnswer;
  level.onTwiceAnswer = onTwiceUserAnswer;
  level.onTripleAnswer = onTripleUserAnswer;
};

const completeGame = () => {
  const end = new StatsView(gameState.results, gameState.life).element;
  levelContainer.replaceWith(end);

  updateView(headerContainer, new HeaderView());
};

const playGame = () => {
  if (gameState.level >= questions.length) {
    completeGame();
  } else {
    gameContainer.insertBefore(levelContainer, gameContainer.firstChild);
    gameContainer.insertBefore(headerContainer, gameContainer.firstChild);

    updateGame(gameState);
  }
};

playGame();

export {intro};
