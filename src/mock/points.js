import { getRandomArrayEl, getRandomRange, getRandomDate } from '../utils.js';
import { POINTS_TYPES } from '../const.js';
import { getOffersKeyValueByType } from './offers.js';


const mockPoints = [
  {
    id: '00000000-0000-0000-0000-point0000000', //f4b62099-293f-4c3d-a702-94eec4a2808c
    basePrice: getRandomRange(10, 10000),
    dateFrom: getRandomDate(new Date(2024, 0, 1), new Date(2024, 11, 2)),
    dateTo: getRandomDate(new Date(2024, 0, 3), new Date(2024, 11, 4)),
    destination: '00000000-0000-0000-0000-dest00000000', //bfa5cb75-a1fe-4b77-a83c-0e528e910e04
    isFavorite: !!getRandomRange(0,1),
    offers: [
      getOffersKeyValueByType(POINTS_TYPES[0], 'id')
    ],
    type: POINTS_TYPES[0] // 'taxi'
  },
  {
    id: '00000000-0000-0000-0000-point0000001',
    basePrice: getRandomRange(10, 10000),
    dateFrom: getRandomDate(new Date(2024, 0, 1), new Date(2024, 11, 2)),
    dateTo: getRandomDate(new Date(2024, 0, 3), new Date(2024, 11, 4)),
    destination: '00000000-0000-0000-0000-dest00000001',
    isFavorite: !!getRandomRange(0,1),
    offers: [
      getOffersKeyValueByType(POINTS_TYPES[1], 'id')
    ],
    type: POINTS_TYPES[1] // 'bus'
  },
  {
    id: '00000000-0000-0000-0000-point0000002',
    basePrice: getRandomRange(10, 10000),
    dateFrom: getRandomDate(new Date(2024, 0, 1), new Date(2024, 11, 2)),
    dateTo: getRandomDate(new Date(2024, 0, 3), new Date(2024, 11, 4)),
    destination: '00000000-0000-0000-0000-dest00000002',
    isFavorite: !!getRandomRange(0,1),
    offers: [
      getOffersKeyValueByType(POINTS_TYPES[4], 'id')
    ],
    type: POINTS_TYPES[4] //'ship'
  },
  {
    id: '00000000-0000-0000-0000-point0000003',
    basePrice: getRandomRange(10, 10000),
    dateFrom: getRandomDate(new Date(2024, 0, 1), new Date(2024, 11, 2)),
    dateTo: getRandomDate(new Date(2024, 0, 3), new Date(2024, 11, 4)),
    destination: '00000000-0000-0000-0000-dest00000003',
    isFavorite: !!getRandomRange(0,1),
    offers: [
      getOffersKeyValueByType(POINTS_TYPES[7], 'id')
    ],
    type: POINTS_TYPES[7] //'sightseeing'
  },
  {
    id: '00000000-0000-0000-0000-point0000004',
    basePrice: getRandomRange(10, 10000),
    dateFrom: getRandomDate(new Date(2024, 0, 1), new Date(2024, 11, 2)),
    dateTo: getRandomDate(new Date(2024, 0, 3), new Date(2024, 11, 4)),
    destination: '00000000-0000-0000-0000-dest00000004',
    isFavorite: !!getRandomRange(0,1),
    offers: [
      getOffersKeyValueByType(POINTS_TYPES[3], 'id')
    ],
    type: POINTS_TYPES[3] //'sightseeing'
  },
  {
    id: '00000000-0000-0000-0000-point0000005',
    basePrice: getRandomRange(10, 10000),
    dateFrom: getRandomDate(new Date(2024, 0, 1), new Date(2024, 11, 2)),
    dateTo: getRandomDate(new Date(2024, 0, 3), new Date(2024, 11, 4)),
    destination: '00000000-0000-0000-0000-dest00000005',
    isFavorite: !!getRandomRange(0,1),
    offers: [
      getOffersKeyValueByType(POINTS_TYPES[2], 'id')
    ],
    type: POINTS_TYPES[2] //' 'drive'
  }
];

function getRandomPoint() {
  return getRandomArrayEl(mockPoints);
}

export { getRandomPoint };
