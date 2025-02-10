import { render, replace } from '../framework/render.js';
import EventEditView from '../view/event-edit-view.js';
import EventView from '../view/event-view.js';

export default class EventViewPresenter {
  #boardContainer = null;

  #eventView = null;
  #eventEditView = null;
  #point = null;

  constructor({boardContainer}) {
    this.#boardContainer = boardContainer;
  }

  init(point) {
    this.#point = point;

    this.#eventView = new EventView ({
      event: point,
      onEditClick: () => {
        this.#replaceEventToForm();
        document.addEventListener('keydown', this.#escKeyDownHandler);
      },
    });

    this.#eventEditView = new EventEditView ({
      event: point,
      onFormSubmit: () => {
        this.#replaceFormToEvent();
        document.removeEventListener('keydown', this.#escKeyDownHandler);
      },
      onFormClick: () => {
        this.#replaceFormToEvent();
        document.removeEventListener('keydown', this.#escKeyDownHandler);
      },
    });

    render(this.#eventView, this.#boardContainer);
  }

  #replaceEventToForm() {
    replace(this.#eventEditView, this.#eventView);
  }

  #replaceFormToEvent() {
    replace(this.#eventView, this.#eventEditView);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToEvent();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };
}
