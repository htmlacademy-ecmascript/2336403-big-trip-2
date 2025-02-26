import { render, replace, remove } from '../framework/render.js';
import EventEditView from '../view/event-edit-view.js';
import EventView from '../view/event-view.js';

export default class EventViewPresenter {
  #boardContainer = null;

  #eventView = null;
  #eventEditView = null;
  #handleDataChange = null;
  #point = null;

  constructor({boardContainer, onDataChange}) {
    this.#boardContainer = boardContainer;
    this.#handleDataChange = onDataChange;
  }

  init(point) {
    this.#point = point;

    const prevEventView = this.#eventView;
    const prevEventEditView = this.#eventEditView;

    //window.console.log(point);

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
      //onFavoriteClick: this.#handleFavoriteClick, ??
    });

    if (prevEventView === null || prevEventEditView === null) {
      render(this.#eventView, this.#boardContainer);
      return;
    }

    if (this.#boardContainer.contains(prevEventView.element)) {
      replace(this.#eventView, prevEventView);
    }

    if (this.#boardContainer.contains(prevEventEditView.element)) {
      replace(this.#eventView, prevEventEditView);
    }

    remove(prevEventView);
    remove(prevEventEditView);
  }

  destroy() {
    remove(this.#eventView);
    remove(this.#eventEditView);
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

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };
}
