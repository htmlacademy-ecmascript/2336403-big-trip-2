import {createElement} from '../render.js';
import { humanizePointDate } from '../utils.js';
import { FormatDate } from '../const.js';
import { getDestKeyValueById } from '../mock/destinations.js';


const createEventItemTemplate = (types, checkedType) =>
  types.map((type) => `
    <div class="event__type-item">
      <input id="event-type-${type}-1" class="event__type-input  visually-hidden"  type="radio" name="event-type" value="${type}" ${checkedType === type ? 'checked' : ''}>
      <label class="event__type-label  event__type-label--${type}"  for="event-type-${type}-1">${type}</label>
    </div>`)
    .join('');

const createDestinationItemTemplate = (destinations) =>
  destinations.map(({name}) => `
    <option value="${name}"></option>`)
    .join('');

// const createOfferItemTemplate = (offers, addedOffers, type) =>
//   offers.offers.map(({id, title, price}) => {
//     const isChecked = addedOffers.map((addedOffer) => addedOffer.id)
//       .includes(id) ? 'checked' : '';

//     return 
//     `
//       <div class="event__offer-selector">
//         <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}" type="checkbox" name="event-offer-${type}-${id}"  ${isChecked} />
//         <label class="event__offer-label" for="event-offer-${id}">
//           <span class="event__offer-title">${title} ${id}</span>
//           &plus;&euro;&nbsp;
//           <span class="event__offer-price">${price}</span>
//         </label>
//       </div>`;
//   }).join('');

// const createOffersContainerTemplate = (offers, addedOffers, type) => {
//   if (!offers.offers.length) {
//     return '';
//   }

//   return `
//     <section class="event__section  event__section--offers">
//       <h3 class="event__section-title  event__section-title--offers">Offers</h3>
//       <div class="event__available-offers">
//         ${createOfferItemTemplate(offers, addedOffers, type)}
//       </div>
//     </section>`;
// };

// const createDescriptionItemTemplate = (description, name) => {
//   if (!description) {
//     return '';
//   }

//   return `
//     <h3 class="event__section-title  event__section-title--destination">${name}</h3>
//     <p class="event__destination-description">${description}</p>`;
// };

// const createImageItemTemplate = (images) => {
//   if (!images.length) {
//     return '';
//   }

//   return`
//   <div class="event__photos-container">
//     <div class="event__photos-tape">
//       ${images.map(({src}) =>`
//       <img class="event__photo" src="${src}" alt="Event photo">`)
//     .join('')}
//     </div>
//   </div>`;
// };

// const createDestinationContainerTemplate = (description, name, pictures) => {
//   if (!description && !pictures.length) {
//     return '';
//   }

//   return `
//     <section class="event__section  event__section--destination">
//       ${createDescriptionItemTemplate(description, name)}
//       ${createImageItemTemplate(pictures)}
//     </section>`;
// };

// const createRollupButtonTemplate = (id) => {
//   if (id === DEFAULT_POINT_ID) {
//     return '';
//   }

//   return `
//     <button class="event__rollup-btn" type="button">
//       <span class="visually-hidden">Open event</span>
//     </button>`;
// };

// const getResetButtonText = (id) =>
//   id === DEFAULT_POINT_ID
//     ? NEW_POINT_BUTTON_TEXT
//     : EDIT_POINT_BUTTON_TEXT;

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
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>

              <div class="event__type-item">
                <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
                <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
              </div>
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            Flight
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">
          <datalist id="destination-list-1">
            <option value="Amsterdam"></option>
            <option value="Geneva"></option>
            <option value="Chamonix"></option>
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
              <label class="event__offer-label" for="event-offer-luggage-1">
                <span class="event__offer-title">Add luggage</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">50</span>
              </label>
            </div>

            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>
              <label class="event__offer-label" for="event-offer-comfort-1">
                <span class="event__offer-title">Switch to comfort</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">80</span>
              </label>
            </div>

            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">
              <label class="event__offer-label" for="event-offer-meal-1">
                <span class="event__offer-title">Add meal</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">15</span>
              </label>
            </div>

            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">
              <label class="event__offer-label" for="event-offer-seats-1">
                <span class="event__offer-title">Choose seats</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">5</span>
              </label>
            </div>

            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">
              <label class="event__offer-label" for="event-offer-train-1">
                <span class="event__offer-title">Travel by train</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">40</span>
              </label>
            </div>
          </div>
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing.</p>
        </section>
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
