// коды клавиш
const BUTTON_ARROW_LEFT = 37;
const BUTTON_ARROW_RIGHT = 39;

// номер первого (приветственного) экрана
// в массиве экранов
let startScreen = 0;

// номер текущего экрана
// в массиве экранов
let currentScreen = startScreen;

// экран загрузки
const centralScreen = document.querySelector(`.central`);

// функция добавления экрана на страницу по классу
let addScreen = (screenName) => {
  // нахожу template экрана по id
  let template = document.getElementById(screenName);

  // возвращаю document-fragment этого экрана
  return template.content;
};

// массив экранов
const screens = [
  addScreen(`greeting`),
  addScreen(`rules`),
  addScreen(`game-1`),
  addScreen(`game-1`),
  addScreen(`game-1`),
  addScreen(`stats`),
];

// функция добавления экрана на страницу по номеру
const showScreen = (screenNumber) => {
  centralScreen.innerHTML = ``;
  const screen = screens[screenNumber].cloneNode(true);
  centralScreen.appendChild(screen);
};

// функция добавления первого (приветственного)
// экрана на страницу по номеру
const showStartScreen = (startScreenNumber) => {
  showScreen(startScreenNumber);
};

// функция переключения экранов
// по нажатию Alt + → и Alt + ←
// на следующий и предыдущий соответственно
const switchScreens = (evt) => {
  const keyCode = evt.keyCode;

  // номера первого и последнего экранов
  const firstScreen = 0;
  const lastScreen = screens.length - 1;

  // если Alt + →, то переходим к след экрану
  if (keyCode === BUTTON_ARROW_RIGHT && evt.altKey) {
    evt.preventDefault();
    if (currentScreen >= firstScreen && currentScreen < lastScreen) {
      currentScreen++;
      showScreen(currentScreen);
    }
  }

  // если Alt + ←, то переходим к предыдущ экрану
  if (keyCode === BUTTON_ARROW_LEFT && evt.altKey) {
    evt.preventDefault();
    if (currentScreen > firstScreen && currentScreen <= lastScreen) {
      currentScreen--;
      showScreen(currentScreen);
    }
  }
};

// вешаю обработчик событий на нажатия Alt + → и Alt + ←
document.addEventListener(`keydown`, switchScreens);

// перехожу на первый (приветственный) экран
showStartScreen(startScreen);
