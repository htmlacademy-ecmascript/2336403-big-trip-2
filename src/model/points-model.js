import { getShufflePoints } from '../mock/points.js';

const POINTS_COUNT = 5;

export default class PointsModel {
  #points;

  constructor() {
    this.#points = [];
  }

  init() {
    this.#points = getShufflePoints(POINTS_COUNT);
  }

  get points() {
    return this.#points;
  }
}

