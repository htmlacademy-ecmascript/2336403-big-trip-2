import AbstractView from '../framework/view/abstract-view.js';
import { humanizePointDate, formatString } from '../date-utils.js';
import { FormatDate,POINTS_TYPES } from '../const.js';
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
  );
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

function createOfferItemTemplate (aviableOffer, offers) {
  const {id, title, price} = aviableOffer;
  const isChecked = offers.map((offer) => offer.id).includes(aviableOffer.id) ? 'checked' : '';
  return `
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}" type="checkbox" name="${id}"  ${isChecked} />
      <label class="event__offer-label" for="event-offer-${id}">
        <span class="event__offer-title">${title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
      </label>
    </div>`;
}

function createOffersContainerTemplate(offers, type) {
  const allAviableOffers = getOffersByType(type);
  if (!allAviableOffers.length) {
    return '';
  }
  return (
    `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${allAviableOffers.map((aviableOffer) => createOfferItemTemplate(aviableOffer, offers)).join('')}
      </div>
    </section>`);
}

function createDescriptionItemTemplate(description, name) {
  if (!description) {
    return '';
  }
  return `
    <h3 class="event__section-title  event__section-title--destination">${name}</h3>
    <p class="event__destination-description">${description}</p>`;
}

function createImageItemTemplate(pictures) {
  if (!pictures.length) {
    return '';
  }
  return`
  <div class="event__photos-container">
    <div class="event__photos-tape">
      ${pictures.map(({src}) =>`
      <img class="event__photo" src="${src}" alt="Event photo">`)
    .join('')}
    </div>
  </div>`;
}

function createDestinationContainerTemplate (destination) {
  const description = getDestKeyValueById(destination, 'description');
  const pictures = getDestKeyValueById(destination, 'pictures');
  const name = getDestKeyValueById(destination, 'name');
  if (!description && !pictures.length) {
    return '';
  }

  return `
    <section class="event__section  event__section--destination">
      ${createDescriptionItemTemplate(description, name)}
      ${createImageItemTemplate(pictures)}
    </section>`;
}

function createEventEditTemplate(event) {

  const { id, basePrice, dateFrom, dateTo, destination, offers, type } = event;


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
            ${getDestNameList().map((name) => createDestinationListTemplate(name)).join('')}
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
        <button class="event__reset-btn" type="reset">Cancel</button>
      </header>
      <section class="event__details">
        ${createOffersContainerTemplate(offers, type)}
        ${createDestinationContainerTemplate(destination)}
      </section>
    </form>`
  );
}

export default class EventEditView extends AbstractView {
  constructor (event) {
    super();
    this.event = event;
  }

  get template() {
    return createEventEditTemplate(this.event);
  }
}
