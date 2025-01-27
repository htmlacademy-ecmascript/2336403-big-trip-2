import { render } from '../framework/render.js';
import EventListView from '../view/event-list-view.js';
import EventEditView from '../view/event-edit-view.js';
import EventAddView from '../view/event-add-view.js';
import EventItemView from '../view/event-item-view.js';
import EventView from '../view/event-view.js';
import BoardView from '../view/board-view.js';
import SortView from '../view/sort-view.js';
import { getDefaultPoint } from '../const.js';


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
    render(new SortView(), this.#boardComponent.element);
    render(this.#eventListComponent, this.#boardComponent.element);
    render(this.#eventItem, this.#eventListComponent.element);

    this.#renderEditEventPoint(this.#boardPoints[0]);
    for (let i = 0; i < this.#boardPoints.length; i++) {
      this.#renderEventPoint(this.#boardPoints[i]);
    }
  }

  #renderEventPoint(point) {
    const eventView = new EventView ({
      event: point,
      onEditClick: () => {
        window.console.log('test');
      },
    });

    render (this.#eventItem, this.#eventListComponent.element);
    render (eventView, this.#eventItem.element);
  }

  #renderEditEventPoint(point) {
    const eventEditView = new EventEditView ({
      event: point,
      onFormSubmit: () => {
        window.console.log('test');
      },
    });
    render(this.#eventItem, this.#eventListComponent.element);
    render(eventEditView, this.#eventItem.element);
  }

  // #renderAddEventPoint(point) {
  //   render(this.#eventItem, this.#eventListComponent.element);
  //   render(new EventEditView(point), this.#eventItem.element);
  // }
}


