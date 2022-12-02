import { Sprite, Texture } from "pixi.js";

import { Coordinates } from "./types/coordinates";

export class FountainSprite {
  private _finalPosition: Coordinates;
  private _sprite: Sprite;

  constructor(
    screenCenter: Coordinates,
    startsOn: Coordinates,
    colour: number,
    duration: number
  ) {
    const TEXTURE = Texture.from("public/fountain.png");

    const speed = duration / 100;

    this._sprite = Sprite.from(TEXTURE);
    this._sprite.tint = colour;
    this._sprite.anchor.set(0.5);
    this._sprite.scale.set(2);
    this._sprite.position.x = screenCenter.x + startsOn.x;
    this._sprite.position.y = screenCenter.y + startsOn.y * -1;

    this._finalPosition = {
      x: this._sprite.position.x,
      y: this._sprite.position.y + speed * -1,
    };
  }

  get finalPosition(): Coordinates {
    return this._finalPosition;
  }

  get sprite(): Sprite {
    return this._sprite;
  }
}
