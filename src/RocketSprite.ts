import { Sprite, Texture } from "pixi.js";

import { Coordinates } from "./types/coordinates";

export class RocketSprite {
  private _finalPosition: Coordinates;
  private _sprite: Sprite;

  constructor(
    screenCenter: Coordinates,
    startsOn: Coordinates,
    colour: number,
    velocity: Coordinates,
    speed: number
  ) {
    const TEXTURE = Texture.from("public/rocket.png");

    this._sprite = Sprite.from(TEXTURE);
    this._sprite.tint = colour;
    this._sprite.anchor.set(0.5);
    this._sprite.rotation = startsOn.x === 0 ? 0 : startsOn.x < 0 ? 90 : 180;

    this._sprite.position.x = screenCenter.x + startsOn.x;
    this._sprite.position.y = screenCenter.y + startsOn.y * -1;

    this._finalPosition = {
      x: this._sprite.position.x + velocity.x * speed,
      y: this._sprite.position.y + velocity.y * -1 * speed,
    };
  }

  get finalPosition(): Coordinates {
    return this._finalPosition;
  }

  get sprite(): Sprite {
    return this._sprite;
  }
}
