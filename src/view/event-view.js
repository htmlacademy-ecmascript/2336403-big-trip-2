import AbstractView from '../framework/view/abstract-view.js';
import { humanizePointDate, getTimeInterval } from '../utils/date-utils.js';
import { FormatDate } from '../utils/const.js';
import { getDestKeyValueById } from '../mock/destinations.js';

function createOfferTemplate(offer) {
  return (
    `<li class="event__offer">
          <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
    </li>`
  );
}

function createEventTemplate(event) {

  const { basePrice, dateFrom, dateTo, destination, isFavorite, offers, type } = event;
  const datetime = humanizePointDate(dateFrom, FormatDate.DATE_TIME);
  const eventDate = humanizePointDate(dateFrom, FormatDate.DATE_EVENT);
  const eventStart = humanizePointDate(dateFrom, FormatDate.DATE_SCHEDULE);
  const eventEnd = humanizePointDate(dateTo, FormatDate.DATE_SCHEDULE);
  const favoriteClassName = isFavorite ? 'event__favorite-btn--active' : '';

  return (
    `<div class="event">
      <time class="event__date" datetime="${datetime}">${eventDate}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${getDestKeyValueById(destination,'name')}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${datetime}T${eventStart}">${eventStart}</time>
          &mdash;
          <time class="event__end-time" datetime="${datetime}T${eventEnd}">${eventEnd}</time>
        </p>
        <p class="event__duration">${getTimeInterval(dateFrom, dateTo)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${offers.map((offer) => createOfferTemplate(offer)).join('')}
      </ul>
      <button class="event__favorite-btn ${favoriteClassName}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>ке
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>`
  );
}

export default class EventView extends AbstractView {
  #handleEditClick = null;

  constructor ({event, onEditClick}) {
    super();
    this.event = event;
    this.#handleEditClick = onEditClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHadler);
  }

  get template() {
    return createEventTemplate(this.event);
  }

  #editClickHadler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };
}
