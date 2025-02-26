import { render, replace, remove } from '../framework/render.js';
import EventEditView from '../view/event-edit-view.js';
import EventView from '../view/event-view.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};
export default class EventViewPresenter {
  #boardContainer = null;
  #eventView = null;
  #eventEditView = null;
  #handleDataChange = null;
  #handleModeChange = null;
  #point = null;
  #mode = Mode.DEFAULT;


  constructor({boardContainer, onDataChange, onModeChange}) {
    this.#boardContainer = boardContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;

    const prevEventView = this.#eventView;
    const prevEventEditView = this.#eventEditView;

    this.#eventView = new EventView ({
      event: point,
      onEditClick: () => {
        this.#replaceEventToForm();
        document.addEventListener('keydown', this.#escKeyDownHandler);
      },
      onFavoriteClick: this.#handleFavoriteClick,
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

    if (prevEventView === null || prevEventEditView === null) {
      render(this.#eventView, this.#boardContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#eventView, prevEventView);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#eventEditView, prevEventEditView);
    }

    remove(prevEventView);
    remove(prevEventEditView);
  }

  destroy() {
    remove(this.#eventView);
    remove(this.#eventEditView);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToEvent();
    }
  }

  #replaceEventToForm() {
    replace(this.#eventEditView, this.#eventView);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToEvent() {
    replace(this.#eventView, this.#eventEditView);
    this.#mode = Mode.DEFAULT;
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToEvent();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };
}
