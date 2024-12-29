//import NewEventButtonView from './view/new-event-button-view.js';
import FilterView from './view/filters-view.js';
import SortView from './view/sort-view.js';
import { render } from './render.js';

//const pageHeader = document.querySelector('.page-header');
//const siteTripMainElement = pageHeader.querySelector('.trip-main');
const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteTripEventsElement = document.querySelector('.trip-events');

//render(new NewEventButtonView(), siteTripMainElement);
render(new FilterView(), siteFiltersElement);
render(new SortView(), siteTripEventsElement);
