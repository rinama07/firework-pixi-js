import { Sprite, Texture, Ticker } from "pixi.js";

import { PARTICLE_TEXTURE_PATH } from "../constants/files";

export class ParticleSprite extends Sprite {
  _direction;

  constructor(colour, direction) {
    super();

    this.alpha = 1;
    this.anchor.set(0.5);
    this.position.x = 0;
    this.position.y = 0;
    this.texture = Texture.from(PARTICLE_TEXTURE_PATH);
    this.tint = colour;

    this._direction = direction;

    Ticker.shared.add(this.update, this);
  }

  update() {
    if (this.alpha >= 0) {
      this.alpha -= 0.1;

      // move according to _direction
      this.position.x -= this._direction * 1;
      this.position.y -= this._direction * 1;
    }
  }
}
