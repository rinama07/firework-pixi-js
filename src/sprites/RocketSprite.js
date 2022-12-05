import { Sprite, Texture } from "pixi.js";

import { ROCKET_TEXTURE_PATH } from "../constants/files";

export class RocketSprite extends Sprite {
  constructor(position, colour) {
    super();

    this.anchor.set(0.5);
    this.rotation = position.x === 0 ? 0 : position.x < 0 ? 90 : 180;
    this.texture = Texture.from(ROCKET_TEXTURE_PATH);
    this.tint = colour;
  }
}
