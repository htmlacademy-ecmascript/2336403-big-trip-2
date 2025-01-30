import { FilterType } from './const.js';
import { humanizePointDate } from './utils.js';
const today = humanizePointDate(new Date());

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => humanizePointDate(point.dateFrom) > today),
  [FilterType.PRESENT]: (points) => points.filter((point) => humanizePointDate(point.dateFrom) === today),
  [FilterType.PAST]: (points) => points.filter((point) => humanizePointDate(point.dateFrom) < today),
};

function sortPointByFilter(points) {
  return Object.entries(filter).map(
    ([filterType, filterPoints]) => ({
      type: filterType,
      count: filterPoints(points).length,
    }),
  );
}


export { filter, sortPointByFilter };
