import { getRandomPoint } from '../mock/points.js';

const POINTS_COUNT = 3;

export default class PointsModel {
  constructor() {
    this.points = [];
  }

  init() {
    this.points = Array.from({ length: POINTS_COUNT }, getRandomPoint);
  }

  getPoints() {
    return this.points;
  }
}

