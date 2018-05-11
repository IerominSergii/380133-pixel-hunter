import LevelView from './level-view';
import StatsView from './stats-view';
import HeaderView from './header-view';

import {INITIAL_GAME, changeLevel, addResult, canContinue, die} from '../data/game-data';
import {createCustomElement, updateView} from './../util';
import {questions} from '../data/questions-data';
import {resultStatus, MAX_QUESTION_AMOUNT} from '../constant';

let gameState = Object.assign({}, INITIAL_GAME);

const gameFragment = document.createDocumentFragment();
const headerContainer = createCustomElement(``, `header`, `header`);
const levelContainer = createCustomElement(``, `div`, `game`);

gameFragment.appendChild(headerContainer);
gameFragment.appendChild(levelContainer);

export const isGameComplete = () => {
  if (gameState.level >= MAX_QUESTION_AMOUNT) {
    const end = new StatsView(gameState).element;
    levelContainer.replaceWith(end);

    updateView(headerContainer, new HeaderView());
  }
};

const continueOrDie = () => {
  gameState = changeLevel(gameState, gameState.level + 1);

  if (canContinue(gameState)) {
    updateGame(gameState);
  } else {
    const end = new StatsView(gameState).element;
    levelContainer.replaceWith(end);

    updateView(headerContainer, new HeaderView());
  }
};

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
  isGameComplete();
};

const onTwiceUserAnswer = (userAnswerArray, rightAnswerArray) => {
  if (userAnswerArray[0] === rightAnswerArray[0] && userAnswerArray[1] === rightAnswerArray[1]) {
    gameState = addResult(gameState, resultStatus.correct);
  } else {
    gameState = addResult(gameState, resultStatus.wrong);
    gameState = die(gameState);
  }

  continueOrDie();
  isGameComplete();
};

const onTripleUserAnswer = (answer) => {
  if (answer === `paint`) {
    gameState = addResult(gameState, resultStatus.correct);
  } else {
    gameState = addResult(gameState, resultStatus.wrong);
    gameState = die(gameState);
  }

  continueOrDie();
  isGameComplete();
};


const updateGame = (state) => {
  updateView(headerContainer, new HeaderView(state.life, state.timer));

  let levelNumber = state.level;
  const currentQuestion = questions[levelNumber];
  const level = new LevelView(currentQuestion, state.results);
  updateView(levelContainer, level);
  level.onSingleAnswer = onSingleUserAnswer;
  level.onTwiceAnswer = onTwiceUserAnswer;
  level.onTripleAnswer = onTripleUserAnswer;
};

updateGame(gameState);

export default gameFragment;
