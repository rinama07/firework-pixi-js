import { Container, Ticker } from "pixi.js";
import { Group, Tween } from "tweedle.js";

import { FountainSprite } from "./FountainSprite";
import { Coordinates } from "./types/coordinates";

export class Fountain extends Container {
  private _sprite: any;
  private _duration: number;
  private _finalPosition: Coordinates;

  constructor(
    center: Coordinates,
    start: Coordinates,
    duration: number,
    colour: number
  ) {
    super();
    console.log("aa");

    this._duration = duration;

    const fountain = new FountainSprite(center, start, colour, duration);
    this._sprite = fountain.sprite;
    this._finalPosition = fountain.finalPosition;

    Ticker.shared.add(this.update, this);
  }

  moveFirework(): void {
    this.addChild(this._sprite);

    new Tween(this._sprite.position)
      .to(this._finalPosition, this._duration)
      .onComplete(() => {
        this.removeChild(this._sprite);
      })
      .start();
  }

  update(): void {
    Group.shared.update();
  }
}
