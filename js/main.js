// import {renderIntroScreen} from './layouts/intro.js';
import {IntroView} from './game/intro-view';
import {renderGreetingNode} from './layouts/greeting.js';
// import {fillNodeFromString} from './createNode';
import {changeView} from './util';

const intro = new IntroView();

changeView(intro.element);

intro.onAsteriskClick = () => {
  renderGreetingNode();
};


// renderIntroScreen();
