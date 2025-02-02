import { MAX_WAYPOINTS_IN_TITLE } from '../utils/const.js';
import AbstractView from '../framework/view/abstract-view.js';
import { getDestNameList } from '../mock/destinations.js';

function createTripInfoTemplate(points) {
  if (points.length !== 0) {
    return (
      `<section class="trip-main__trip-info  trip-info">
        <div class="trip-info__main">
          <h1 class="trip-info__title">${createTitle(points)}</h1>
          <p class="trip-info__dates">${'getMinDate(points)'}&nbsp;&mdash;&nbsp;${'getMaxDate(points)'}</p>
        </div>
        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">${'getFullPrice(points, offers)'}</span>
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
  if (points.length > MAX_WAYPOINTS_IN_TITLE) {
    return `${getDestNameList(points).at(0)} &mdash;...&mdash; ${getDestNameList(points).at(-1)}`;
  }
  return getDestNameList(points).join(' &mdash; ');
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

// return (
//   ` <section class="trip-main__trip-info  trip-info">
//     <div class="trip-info__main">
//       <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

//       <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>
//     </div>

//     <p class="trip-info__cost">
//       Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
//     </p>
//   </section>`
// );
