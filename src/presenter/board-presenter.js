import { render } from '../framework/render.js';
import EventListView from '../view/event-list-view.js';
import EventViewPresenter from './event-view-presenter.js';
import EventItemView from '../view/event-item-view.js';
import BoardView from '../view/board-view.js';
import EventEmptyView from '../view/event-empty-view.js';
import SortView from '../view/sort-view.js';

export default class BoardPresenter {
  #boardContainer = null;
  #boardPoints = null;
  #pointsModel = null;

  #boardComponent = new BoardView();
  #eventListComponent = new EventListView();
  #eventItem = new EventItemView();

  #boardSortComponent = new SortView(); //Переменная для хранения отображения сортировки;
  #eventEmpmtyComponent = new EventEmptyView(); //Переменная для хранения отображения сообщения пустого списка точек маршрута;

  #eventPresentersList = new Map(); //Создает пустую коллекцию презенторов событий маршрута

  constructor({boardContainer, pointsModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
  }

  init () {
    this.#boardContainer.innerHTML = '';
    this.#boardPoints = [...this.#pointsModel.points];
    render(this.#boardComponent, this.#boardContainer);
    if (this.#boardPoints.length !== 0) {
      this.#renderSort();
      render(this.#eventListComponent, this.#boardComponent.element);
      for (let i = 0; i < this.#boardPoints.length; i++) {
        this.#renderEventComponent(this.#boardPoints[i]);
      }
    } else {
      this.#renderEmptyView();
    }
  }

  //Отрисовывает отображение сортировки
  #renderSort() {
    render(this.#boardSortComponent, this.#boardComponent.element);
  }

  //Отрисовывает отображение пустого списка точек маршрута
  #renderEmptyView() {
    render(this.#eventEmpmtyComponent, this.#boardComponent.element);
  }

  //Отрисовывает событие маршрута
  #renderEventComponent(point) {
    const eventViewPresenter = new EventViewPresenter({boardContainer: this.#boardComponent.element});
    eventViewPresenter.init(point);

    this.#eventPresentersList.set(point.id, eventViewPresenter);
  }

  #clearEventPresenter() {
    this.#eventPresentersList.forEach((presenter) => presenter.destroy());
    this.#eventPresentersList.clear();
  }
}
