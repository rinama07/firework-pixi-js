import { Container, Ticker } from "pixi.js";

import { ParticleSprite } from "./sprites/ParticleSprite";
import { RocketSprite } from "./sprites/RocketSprite";

export class Rocket extends Container {
  _colour;
  _finalPosition;
  _startPosition;
  _velocity;

  _isExploded;
  _shouldExplode;

  constructor(
    center,
    colour,
    duration,
    start,
    velocity
  ) {
    super();

    this._colour = colour;
    this._velocity = velocity;
    this._isExploded = false;
    this._shouldExplode = false;
    this._startPosition = this.getStartPosition(center, start);
    this._finalPosition = this.getFinalPosition(duration, velocity);

    Ticker.shared.add(this.update, this);
  }

  getStartPosition(
    center,
    start
  ) {
    return {
      x: center.x + start.x,
      y: center.y + start.y * -1,
    };
  }

  getFinalPosition(
    duration,
    velocity
  ) {
    const position = this._startPosition;
    const speed = duration / 1000;

    return {
      x: velocity.x === 0 ? position.x : position.x + velocity.x * speed,
      y: velocity.y === 0 ? position.x : position.y + velocity.y * speed * -1,
    };
  }

  initRocket() {
    this._isExploded = false;
    this._shouldExplode = false;

    this.position.x = this._startPosition.x;
    this.position.y = this._startPosition.y;

    const rocket = new RocketSprite(this._startPosition, this._colour);
    this.addChild(rocket);
  }

  moveRocket() {
    // rockets from left does not explode, why?
    const xInFinalPosition = this._finalPosition.x >= this.position.x;
    const yInFinalPosition = this._finalPosition.y >= this.position.y;

    if (xInFinalPosition && yInFinalPosition) {
      this.removeChildAt(0);
      this._shouldExplode = true;
    } else {
      if (this._velocity.x) {
        this.position.x -= this._velocity.x > 0 ? -5 : 5;
      }

      if (this._velocity.y) {
        this.position.y -= 5;
      }
    }
  }

  explodeParticles() {
    if (!this._isExploded) {
      for (let particleIndex = 0; particleIndex < 10; particleIndex++) {
        const particle = new ParticleSprite(this._colour, particleIndex);

        this.addChild(particle);
      }

      this._isExploded = true;
    }
  }

  update() {
    if (!this.children.length && !this._shouldExplode) {
      this.initRocket();
      return;
    }

    if (this._shouldExplode) {
      this.explodeParticles();
    } else {
      this.moveRocket();
    }
  }
}
