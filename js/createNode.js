/*
  Список констант
*/
// основной контейнер, в который загружаются экраны игры
const nodeCentral = document.querySelector(`.central`);

// fillNodeFromString - переписывает содержимое .central ноды
// на переданное в innerContent
const fillNodeFromString = (innerContent) => {
  nodeCentral.innerHTML = innerContent;
};

/*
  Набор экспортированных значений
*/

// экспортирую функцию
export default fillNodeFromString;
