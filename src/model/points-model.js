import { getRandomPoint } from '../mock/points.js';

const POINTS_COUNT = 10;

export default class PointsModel {
  #points;

  constructor() {
    this.#points = [];
  }

  init() {
    this.#points = Array.from({ length: POINTS_COUNT }, getRandomPoint);
  }

  get points() {
    return this.#points;
  }
}

