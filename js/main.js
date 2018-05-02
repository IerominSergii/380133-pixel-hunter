import IntroView from './game/intro-view';
import GreetingView from './game/greeting-view';
import RulesView from './game/rules-view';
import HeaderView from './game/header-view';

import {changeView} from './util';


const intro = new IntroView();
const greeting = new GreetingView();
const rules = new RulesView();
const header = new HeaderView();

header.onBackArrowClick = () => {
  changeView(greeting.element);
};

intro.onAsteriskClick = () => {
  changeView(greeting.element);
};

greeting.onContinueClick = () => {
  changeView(rules.element);

  const container = document.querySelector(`.central`);
  container.prepend(header.element);
};

changeView(intro.element);
