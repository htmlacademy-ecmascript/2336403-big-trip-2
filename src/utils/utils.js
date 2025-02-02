const getRandomArrayEl = (elements) => elements[Math.floor(Math.random() * elements.length)];
const getRandomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const formatString = (string) => string.at(0).toUpperCase() + string.slice(1);

export { getRandomArrayEl, getRandomRange, formatString};
