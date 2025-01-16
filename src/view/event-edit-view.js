import { createElement } from '../render.js';
import { humanizePointDate, formatString } from '../utils.js';
import { FormatDate,  POINTS_TYPES } from '../const.js';
import { getDestKeyValueById, getDestNameList } from '../mock/destinations.js';
import { getOffersByType } from '../mock/offers.js';


function createPointTypeItemTemplate(type, id) {
  return (
  `<div class="event__type-item">
    <input 
      id="event-type-${type}-${id}" 
      class="event__type-input  visually-hidden" 
      type="radio" 
      name="event-type" 
      value="${type}"
    >
    <label 
      class="event__type-label  
      event__type-label--${type}" 
      for="event-type-${type}-${id}">${formatString(type)}
    </label>
  </div>`
  );
}

function createDestinationListTemplate(name) {
  return (
    `<option value="${name}"></option>`
  )
}

function createGroupTime(dateFrom, dateTo, id) {

  const dateFromSlashed = humanizePointDate(dateFrom, FormatDate.DATE_SLASHED);
  const dateFromShedule = humanizePointDate(dateFrom, FormatDate.DATE_SCHEDULE);
  const dateToSlashed = humanizePointDate(dateTo, FormatDate.DATE_SLASHED);
  const dateToShedule = humanizePointDate(dateTo, FormatDate.DATE_SCHEDULE);

  return (
    `
    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-${id}">From</label>
      <input 
        class="event__input  event__input--time" 
        id="event-start-time-${id}" 
        type="text" 
        name="event-start-time" 
        value="${dateFromSlashed} ${dateFromShedule}"
      >
      &mdash;
      <label class="visually-hidden" for="event-end-time-${id}">To</label>
      <input 
        class="event__input  event__input--time" 
        id="event-end-time-${id}" 
        type="text" 
        name="event-end-time" 
        value="${dateToSlashed} ${dateToShedule}"
      >
    </div>
    `
  );
}

function createOfferItemTemplate (offers, type, id) {
  window.console.log(offers);
  getOffersByType(type).map(({id, title, price}) => {
   const isChecked = offers.map((id) => offers.id).includes(id) ? 'checked' : '';
   window.console.log(isChecked)});
  // offers.map(({id, title, price}) => {
  //   const isChecked = addedOffers.map((addedOffer) => addedOffer.id).includes(id) ? 'checked' : '';
    return (`
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${'id'}" type="checkbox" name="event-offer-${type}-${id}"  ${'isChecked'} />
        <label class="event__offer-label" for="event-offer-${'id'}">
          <span class="event__offer-title">${'title'} ${'id'}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${'price'}</span>
        </label>
      </div>`);
  }
  // .join('')};

function createOffersContainerTemplate(offers, type) {
  if (!offers.length) {
    return '';
  }
  return (
  `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${createOfferItemTemplate(offers, type)}
      </div>
    </section>`);
};

function createEventEditTemplate(event) {

  const { id, basePrice, dateFrom, dateTo, destination, isFavorite, offers, type } = event;
  
  const datetime = humanizePointDate(dateFrom, FormatDate.DATE_TIME);
  const eventDate = humanizePointDate(dateFrom, FormatDate.DATE_EVENT);
  const eventStart = humanizePointDate(dateFrom, FormatDate.DATE_SCHEDULE);
  const eventEnd = humanizePointDate(dateTo, FormatDate.DATE_SCHEDULE);
  const favoriteClassName = isFavorite ? 'event__favorite-btn--active' : '';

  return (
    `<form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>        
                ${POINTS_TYPES.map((item) => createPointTypeItemTemplate(item, id)).join('')}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-${id}">
            ${type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${getDestKeyValueById(destination, 'name')}" list="destination-list-${id}">
          <datalist id="destination-list-${id}">
            ${getDestNameList().map(name => createDestinationListTemplate(name)).join('')}
          </datalist>
        </div>

        ${createGroupTime(dateFrom, dateTo, id)}
        

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-${id}">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-${id}" type="text" name="event-price" value="${basePrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
      ${createOffersContainerTemplate(offers, type)}
        
      </section>
    </form>`
  );
}

export default class EventEditView {
    constructor (event) {
      this.event = event;
    }
  getTemplate() {
    return createEventEditTemplate(this.event);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
