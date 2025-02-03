import { MAX_WAYPOINTS_IN_TITLE } from '../utils/const.js';
import AbstractView from '../framework/view/abstract-view.js';
import { getDestKeyValueById } from '../mock/destinations.js';
import { getStartDate, getFinishDate } from '../utils/date-utils.js';

function createTripInfoTemplate(points) {
  if (points.length !== 0) {
    return (
      `<section class="trip-main__trip-info  trip-info">
        <div class="trip-info__main">
          <h1 class="trip-info__title">${createTitle(points)}</h1>
          <p class="trip-info__dates">${getStartDate(points)}&nbsp;&mdash;&nbsp;${getFinishDate(points)}</p>
        </div>
        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">${getFullPrice(points)}</span>
        </p>
      </section>`
    );
  } else {
    return (
      ` <div>
			</div>`);
  }
}

function createTitle(points) {
  const distNameList = points.map((item) => getDestKeyValueById(item.destination,'name'));
  if (points.length > MAX_WAYPOINTS_IN_TITLE) {
    return `${getDestKeyValueById(points.at(0).destination, 'name')} &mdash;  ...  &mdash; ${getDestKeyValueById(points.at(-1).destination, 'name')}`;
  }
  return distNameList.join(' &mdash; ');
}

function getFullPrice(points) {
  let offersPriceSum = 0;
  let basePriceSum = 0;
  for (let i = 0; i < points.length; i++) {
    offersPriceSum = offersPriceSum + (points[i].offers.map((item) => item.price)).reduce((accumulator, currenValue) => accumulator + currenValue, 0);
    basePriceSum = basePriceSum + (points[i].basePrice);
  }
  return(offersPriceSum + basePriceSum);
}


export default class TripInfoView extends AbstractView {
  #points = null;

  constructor(points) {
    super();
    this.#points = points;
  }

  get template() {
    return createTripInfoTemplate(this.#points);
  }
}
