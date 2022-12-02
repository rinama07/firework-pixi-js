import { Container, Ticker } from "pixi.js";
import { Group, Tween } from "tweedle.js";

import { ParticleSprite } from "./sprites/ParticleSprite";
import { RocketSprite } from "./sprites/RocketSprite";
import { Coordinates } from "./types/coordinates";

export class Rocket extends Container {
  // private _particles: Sprite[];
  private _sprite: any;
  private _duration: number;
  private _finalPosition: Coordinates;

  constructor(
    center: Coordinates,
    start: Coordinates,
    duration: number,
    colour: number,
    velocity: Coordinates
  ) {
    super();

    // this._particles = [];
    this._duration = duration;

    const rocket = new RocketSprite(center, start, colour, velocity);
    this._finalPosition = rocket.finalPosition;
    this._sprite = rocket.sprite;

    Ticker.shared.add(this.update, this);
  }

  explodeRocket() {
    const particle = new ParticleSprite(this._finalPosition, this._sprite.tint);
    this.addChild(particle.sprite);

    /*
    I don't know how to move this correctly but
    I know I need to create some particles and
    move them around the finalPosition.
    
    this._particles.push(particle.sprite);
    */

    setTimeout(() => {
      this.removeChild(particle.sprite);
    }, 1000);
  }

  moveFirework(): void {
    this.addChild(this._sprite);

    new Tween(this._sprite.position)
      .to(this._finalPosition, this._duration)
      .onComplete(() => {
        this.removeChild(this._sprite);

        this.explodeRocket();
      })
      .start();
  }

  private update(): void {
    Group.shared.update();
  }
}
