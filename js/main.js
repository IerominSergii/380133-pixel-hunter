(() => {
  // коды клавиш
  const BUTTON_ARROW_LEFT = 37;
  const BUTTON_ARROW_RIGHT = 39;

  // номер первого (приветственного) экрана
  // в массиве экранов
  const startScreen = 0;

  // номер текущего экрана
  // в массиве экранов
  let currentScreen = startScreen;

  // экран загрузки
  const centralScreen = document.querySelector(`.central`);

  // функция добавления экрана на страницу по классу
  let addScreen = (screenName) => {
    let templateScreen = document.createElement(`div`);
    let templateContent = document.getElementById(screenName).content;

    templateScreen.appendChild(templateContent);
    return templateScreen.cloneNode(true);
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
    let screen = screens[screenNumber];
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
    let keyCode = evt.keyCode;

    // номера первого и последнего экранов
    let firstScreen = 0;
    let lastScreen = screens.length - 1;

    // если Alt + →, то переходим к след экрану
    if (keyCode === BUTTON_ARROW_RIGHT && evt.altKey) {

      if (currentScreen >= firstScreen && currentScreen < lastScreen) {
        currentScreen++;
        showScreen(currentScreen);
      }
    }

    // если Alt + ←, то переходим к предыдущ экрану
    if (keyCode === BUTTON_ARROW_LEFT && evt.altKey) {
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
})();
