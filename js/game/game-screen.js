import GameView from './game-view';
import {INITIAL_GAME} from '../data/game-data';
import {changeView} from './util';

let state = Object.assign({}, INITIAL_GAME);

const game = new GameView(state);

const container = document.querySelector(`.central`);
// const end =

export default changeView(game.element);
