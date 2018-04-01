/*
  Список констант
*/

// fillNodeFromString - переписывает содержимое .central ноды
// на переданное в innerContent
const fillNodeFromString = (innerContent) => {
  const nodeCentral = document.querySelector(`.central`);

  nodeCentral.innerHTML = innerContent;
};

/*
  Набор экспортированных значений
*/

// экспортирую функцию
export default fillNodeFromString;
