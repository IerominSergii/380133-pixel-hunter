// функция создания объекта таймер
const createTimer = (time) => {
  if (typeof time !== `number`) {
    throw new Error(`Wrong type Expect number type`);
  }

  if (!Number.isInteger(time)) {
    throw new Error(`Time should be integer`);
  }

  if (time < 0) {
    throw new Error(`Wrong time Expect more then 0`);
  }

  const currentTime = time;

  return {
    timer: currentTime,
    // метод, который уменьшает таймер на 1
    tick() {
      return createTimer(currentTime - 1);
    }
  };
};

export {createTimer};
