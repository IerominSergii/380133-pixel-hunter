import IntroView from './game/intro-view';
import GreetingView from './game/greeting-view';
import RulesView from './game/rules-view';
import HeaderView from './game/header-view';
import FooterView from './game/footer-view';
import gameFragment from './game/game-screen';

import {changeView} from './util';


const intro = new IntroView();
const greeting = new GreetingView();
const rules = new RulesView();
const header = new HeaderView();
const footer = new FooterView();

const gameContainer = document.querySelector(`.central`);

rules.startGame = () => {
  rules.removeRules();
  gameContainer.insertBefore(gameFragment, gameContainer.firstChild);
};

header.onBackArrowClick = () => {
  changeView(greeting.element);
  gameContainer.appendChild(footer.element);
};

intro.onAsteriskClick = () => {
  changeView(greeting.element);
  gameContainer.appendChild(footer.element);
};

greeting.onContinueClick = () => {
  changeView(rules.element);

  // автофокус
  const input = document.querySelector(`.rules__input`);
  input.focus();

  gameContainer.prepend(header.element);
  gameContainer.append(footer.element);
};

changeView(intro.element);
