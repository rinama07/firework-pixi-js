import { Container } from "pixi.js";

import { FountainSprite } from "./sprites/FountainSprite";
import { Coordinates } from "./types/coordinates";

export class Fountain extends Container {
  constructor(
    center: Coordinates,
    start: Coordinates,
    duration: number, // I don't know how to use this yet
    colour: number
  ) {
    super();

    this.position.x = center.x + start.x;
    this.position.y = center.y + start.y * -1;

    for (let i = 0; i < 10; i++) {
      const fountain = new FountainSprite(colour);

      this.addChild(fountain);
    }
  }
}
