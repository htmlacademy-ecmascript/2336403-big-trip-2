const getRandomArrayEl = (elements) => elements[Math.floor(Math.random() * elements.length)];
const getRandomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const formatString = (string) => string.at(0).toUpperCase() + string.slice(1);

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

export { getRandomArrayEl, getRandomRange, formatString, updateItem};
