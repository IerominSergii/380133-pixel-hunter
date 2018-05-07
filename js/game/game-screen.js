import LevelView from './level-view';
import {INITIAL_GAME} from '../data/game-data';
import {createCustomElement, updateView} from './../util';
import HeaderView from './header-view';
// import FooterView from './footer-view';
import {questions} from '../data/questions-data';

let gameState = Object.assign({}, INITIAL_GAME);

const gameFragment = document.createDocumentFragment();
const headerContainer = createCustomElement(``, `header`, `header`);
const levelContainer = createCustomElement(``, `div`, `game`);
// const footer = createCustomElement(``, `footer`, `footer`);

gameFragment.appendChild(headerContainer);
gameFragment.appendChild(levelContainer);
// gameFragment.appendChild(levelContainer);

// const end =

const updateGame = (state) => {
  updateView(headerContainer, new HeaderView(state.life, state.timer));

  let levelNumber = gameState.level;
  const level = new LevelView(questions[levelNumber]);
  updateView(levelContainer, level);
  // updateView(header, new HeaderView(state.life, state.timer))
  // level.onAnswer();
};

updateGame(gameState);

export default gameFragment;
