import NewEventButtonView from './view/new-event-button-view.js';
import { render } from './render.js';

const siteTripMainElement = document.querySelector('.trip-main');

render(new NewEventButtonView(), siteTripMainElement);
