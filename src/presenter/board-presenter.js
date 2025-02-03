import { render, replace } from '../framework/render.js';
import EventListView from '../view/event-list-view.js';
import EventEditView from '../view/event-edit-view.js';
//import EventAddView from '../view/event-add-view.js';
import EventItemView from '../view/event-item-view.js';
import EventView from '../view/event-view.js';
import BoardView from '../view/board-view.js';
import EventEmptyView from '../view/event-empty-view.js';
import SortView from '../view/sort-view.js';
//import { getDefaultPoint } from '../const.js';


export default class BoardPresenter {
  #boardContainer = null;
  #boardPoints = null;
  #pointsModel = null;

  #boardComponent = new BoardView();
  #eventListComponent = new EventListView();
  #eventItem = new EventItemView();
  constructor({boardContainer, pointsModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
  }

  init () {
    this.#boardContainer.innerHTML = '';
    this.#boardPoints = [...this.#pointsModel.points];
    render(this.#boardComponent, this.#boardContainer);
    if (this.#boardPoints.length !== 0) {
      render (new SortView(), this.#boardComponent.element);
      render(this.#eventListComponent, this.#boardComponent.element);
      for (let i = 0; i < this.#boardPoints.length; i++) {
        this.#renderEventComponent(this.#boardPoints[i]);
      }
    } else {
      render(new EventEmptyView(), this.#boardComponent.element);
    }
  }

  #renderEventComponent(point) {

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const eventView = new EventView ({
      event: point,
      onEditClick: () => {
        replaceEventToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      },
    });

    const eventEditView = new EventEditView ({
      event: point,
      onFormSubmit: () => {
        replaceFormToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onFormClick: () => {
        replaceFormToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
    });

    function replaceEventToForm() {
      replace(eventEditView, eventView);
    }

    function replaceFormToEvent() {
      replace(eventView, eventEditView);
    }

    render(this.#eventItem, this.#eventListComponent.element);
    render(eventView, this.#eventItem.element);
  }
}
