import { render } from '../render.js';
import EventListView from '../view/event-list-view.js';
import EventAddView from '../view/event-add-view.js';
import EventItemView from '../view/event-item-view.js';
import EventView from '../view/event-view.js';
import BoardView from '../view/board-view.js';
import SortView from '../view/sort-view.js';


export default class BoardPresenter {
  boardComponent = new BoardView();
  eventListComponent = new EventListView();
  eventItem = new EventItemView();
  //componentsList = [new EventAddView(), new EventView(), new EventView(), new EventView()];

  constructor({boardContainer, pointsModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init () {
    this.boardContainer.innerHTML = '';

    this.boardPoints = [...this.pointsModel.getPoints()];

    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.eventListComponent, this.boardComponent.getElement());

    // render(this.eventItem, this.eventListComponent.getElement());
    // render (new EventView({
    //   type: this.boardPoints[0].type,
    //   destination: this.boardPoints[0].destination,
    //   basePrice: this.boardPoints[0].basePrice,
    //   isFavorite: this.boardPoints[0].isFavorite,
    //   dateFrom: this.boardPoints[0].dateFrom,
    //   dateTo: this.boardPoints[0].dateTo,
    // }), this.eventItem.getElement());
  //}
//}

render(this.eventItem, this.eventListComponent.getElement());
render (new EventAddView({
  type: this.boardPoints[0].type,
  destination: this.boardPoints[0].destination,
  basePrice: this.boardPoints[0].basePrice,
  isFavorite: this.boardPoints[0].isFavorite,
  dateFrom: this.boardPoints[0].dateFrom,
  dateTo: this.boardPoints[0].dateTo,
}), this.eventItem.getElement());

for (let i = 1; i < this.boardPoints.length; i++) {
      //const eventItem = new EventItemView();
      render(this.eventItem, this.eventListComponent.getElement());
      render (new EventView({
        type: this.boardPoints[i].type,
        destination: this.boardPoints[i].destination,
        basePrice: this.boardPoints[i].basePrice,
        isFavorite: this.boardPoints[i].isFavorite,
        dateFrom: this.boardPoints[i].dateFrom,
        dateTo: this.boardPoints[i].dateTo,
      }), this.eventItem.getElement());
    }
  }
}