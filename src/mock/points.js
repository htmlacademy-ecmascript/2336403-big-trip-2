import { getRandomArrayEl, getRandomRange, getRandomDate } from '../utils.js';

const mockPoints = [
  {
    id: '00000000-0000-0000-0000-point0000000', //f4b62099-293f-4c3d-a702-94eec4a2808c
    basePrice: getRandomRange(10, 10000),
    dateFrom: getRandomDate(new Date(2024, 0, 1), new Date(2024, 0, 2)),
    dateTo: getRandomDate(new Date(2024, 0, 3), new Date(2024, 0, 4)),
    destination: '00000000-0000-0000-0000-dest00000000', //bfa5cb75-a1fe-4b77-a83c-0e528e910e04
    isFavorite: !!getRandomRange(0,1),
    offers: [
      '00000000-0000-0000-0000-offer0000003' //'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    type: 'taxi' //POINTS_TYPES[0]
  },
  {
    id: '00000000-0000-0000-0000-point0000001',
    basePrice: getRandomRange(10, 10000),
    dateFrom: getRandomDate(new Date(2024, 0, 1), new Date(2024, 0, 2)),
    dateTo: getRandomDate(new Date(2024, 0, 3), new Date(2024, 0, 4)),
    destination: '00000000-0000-0000-0000-dest00000001',
    isFavorite: !!getRandomRange(0,1),
    offers: [
      '00000000-0000-0000-0000-offer0000006',
      '00000000-0000-0000-0000-offer0000007'
    ],
    type: 'bus' ////POINTS_TYPES[1]
  },
  {
    id: '00000000-0000-0000-0000-point0000002',
    basePrice: getRandomRange(10, 10000),
    dateFrom: getRandomDate(new Date(2024, 0, 1), new Date(2024, 0, 2)),
    dateTo: getRandomDate(new Date(2024, 0, 3), new Date(2024, 0, 4)),
    destination: '00000000-0000-0000-0000-dest00000002',
    isFavorite: !!getRandomRange(0,1),
    offers: [
      '00000000-0000-0000-0000-offer0000000',
      '00000000-0000-0000-0000-offer0000001',
      '00000000-0000-0000-0000-offer0000002',
    ],
    type: 'ship' ////POINTS_TYPES[4]
  },
  {
    id: '00000000-0000-0000-0000-point0000003',
    basePrice: getRandomRange(10, 10000),
    dateFrom: getRandomDate(new Date(2024, 0, 1), new Date(2024, 0, 2)),
    dateTo: getRandomDate(new Date(2024, 0, 3), new Date(2024, 0, 4)),
    destination: '00000000-0000-0000-0000-dest00000002', //
    isFavorite: !!getRandomRange(0,1),
    offers: [],
    type: 'sightseeing' ////POINTS_TYPES[8]
  }
];

function getRandomPoint() {
  return getRandomArrayEl(mockPoints);
}

export { getRandomPoint };
