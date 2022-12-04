import { Sprite, Texture, Ticker } from "pixi.js";

import { FOUNTAIN_TEXTURE_PATH } from "../constants/files";

export class FountainSprite extends Sprite {
  private _speed: number;

  constructor(colour: number) {
    super();

    this.texture = Texture.from(FOUNTAIN_TEXTURE_PATH);
    this.tint = colour;
    this.anchor.set(0.5);
    this.scale.set(2.5);
    this.position.x = 0;
    this.position.y = 0;

    this._speed = 0.01;

    Ticker.shared.add(this.moveUp, this);
  }

  moveUp(): void {
    if (this.alpha > 0) {
      this.alpha -= this._speed;
      this.position.y -= 2;
    }
  }
}
