const MAX_WAYPOINTS_IN_TITLE = 9; //Максимальное количество пунктов путешествия без сокращения в заголовке

const POINTS_TYPES = [
  'taxi', //0
  'bus', //1
  'train', //2
  'ship', //3
  'drive', //4
  'flight', //5
  'check-in', //6
  'sightseeing', //7
  'restaurant' //8
];

const FormatDate = {
  DATE_TIME: 'YYYY-MM-DD',
  DATE_EVENT: 'MMM D',
  DATE_SCHEDULE: 'HH:mm',
  DATE_SLASHED: 'YY/MM/DD'
};

const getDefaultPoint = () => ({
  id: '00000000-0000-0000-0000-pointdefault0',
  basePrice: 0,
  dateFrom: new Date().toISOString(),
  dateTo: new Date().toISOString(),
  destination: 0,
  isFavorite: false,
  offers: [],
  type: POINTS_TYPES[0],
});

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

export { POINTS_TYPES, FormatDate, getDefaultPoint, FilterType, MAX_WAYPOINTS_IN_TITLE };
