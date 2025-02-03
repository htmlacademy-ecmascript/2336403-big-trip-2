import { FormatDate } from './const.js';
import minMax from 'dayjs/plugin/minMax';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);
dayjs.extend(minMax);

const getRandomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
const humanizePointDate = (date, formatDate) => date ? dayjs(date).format(formatDate) : '';

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

//Получить дату старта маршрута
const getStartDate = (items) => humanizePointDate(dayjs.min(items.map((item) => dayjs(item.dateFrom))), FormatDate.DATE_EVENT);

//Получить дату конца маршрута
const getFinishDate = (items) => humanizePointDate(dayjs.max(items.map((item) => dayjs(item.dateTo))), FormatDate.DATE_EVENT);

export { getRandomDate, humanizePointDate, getTimeInterval, getStartDate, getFinishDate };
