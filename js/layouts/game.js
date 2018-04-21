import headerTemplate from './header';
import {INITIAL_GAME} from './../data/game-data.js';
import {appendNode} from './../createNode.js';

export const nextScreen = () => {
  const screen = `
    ${headerTemplate(INITIAL_GAME)}
  `;
  appendNode(screen);
};
