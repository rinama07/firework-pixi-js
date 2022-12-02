import { Sprite, Texture } from "pixi.js";

import { Coordinates } from "./types/coordinates";

export class ParticleSprite {
  private _sprite: Sprite;

  constructor(startsOn: Coordinates, colour: number) {
    const TEXTURE = Texture.from("public/particle.png");

    this._sprite = Sprite.from(TEXTURE);
    this._sprite.anchor.set(0.5);
    this._sprite.tint = colour;
    this._sprite.alpha = 1;
    this._sprite.position.set(startsOn.x, startsOn.y);
  }

  get sprite(): Sprite {
    return this._sprite;
  }
}
