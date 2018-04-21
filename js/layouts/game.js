import headerTemplate from './header.js';
import {INITIAL_GAME} from './../data/game-data.js';
import {fillNodeFromString} from './../createNode.js';

export const nextScreen = () => {
  const screen = `
    ${headerTemplate(INITIAL_GAME)}
  `;
  fillNodeFromString(screen);
};
