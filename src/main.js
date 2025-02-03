import PointsModel from './model/points-model.js';
import FilterView from './view/filter-view.js';
import TripInfoView from './view/trip-info-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import { generateFilter } from './mock/generate-filter.js';
import { render } from './framework/render.js';


const pageHeaderElement = document.querySelector('.page-header');
const tripMainElement = pageHeaderElement.querySelector('.trip-main');
const filtersElement = pageHeaderElement.querySelector('.trip-controls__filters');
const pageMainElement = document.querySelector('.page-main');
const pageBodyContainerElement = pageMainElement.querySelector('.page-body__container');


const pointsModel = new PointsModel();
pointsModel.init();

const filters = generateFilter(pointsModel.points);

const boardPresenter = new BoardPresenter({
  boardContainer: pageBodyContainerElement,
  pointsModel});

render(new FilterView({filters}), filtersElement);
render(new TripInfoView(pointsModel.points), tripMainElement, 'afterbegin');

boardPresenter.init();
