import dayjs from 'dayjs';

const getRandomArrayEl = (elements) => elements[Math.floor(Math.random() * elements.length)];
const getRandomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
const humanizePointDate = (date, formatDate) => date ? dayjs(date).format(formatDate) : '';


export { getRandomArrayEl, getRandomRange, getRandomDate, humanizePointDate };
