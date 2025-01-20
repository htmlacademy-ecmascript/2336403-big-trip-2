import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

const getRandomArrayEl = (elements) => elements[Math.floor(Math.random() * elements.length)];
const getRandomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
const humanizePointDate = (date, formatDate) => date ? dayjs(date).format(formatDate) : '';
const formatString = (string) => string.at(0).toUpperCase() + string.slice(1);

dayjs.extend(duration);

function getTimeInterval(dateFrom, dateTo) {
  const start = dayjs(dateFrom);
  const end = dayjs(dateTo);
  const diffInMs = end.diff(start);

  const eventDuration = dayjs.duration(diffInMs);

  const days = eventDuration.days();
  const hours = eventDuration.hours();
  const minutes = eventDuration.minutes();

  if (days > 0) {
    return `${days}D ${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M`;
  } else if (hours > 0) {
    return `${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M`;
  } else {
    return `${minutes}M`;
  }
}

export { getRandomArrayEl, getRandomRange, getRandomDate, humanizePointDate, formatString, getTimeInterval };
