import { Container, Sprite, Ticker } from "pixi.js";

import { Coordinates } from "./types/coordinates";

import { ParticleSprite } from "./ParticleSprite";
import { RocketSprite } from "./RocketSprite";

export class Rocket extends Container {
  private _particles: Sprite[];
  private _sprite: any;
  private _speed: number;
  private _finalPosition: Coordinates;

  constructor(
    scene: Container,
    center: Coordinates,
    start: Coordinates,
    duration: number,
    colour: number,
    velocity: Coordinates
  ) {
    super();

    this._particles = [];
    this._speed = duration / 1000;

    const rocket = new RocketSprite(
      center,
      start,
      colour,
      velocity,
      this._speed
    );
    this._finalPosition = rocket.finalPosition;
    this._sprite = rocket.sprite;

    this.addChild(this._sprite);

    Ticker.shared.add(this.updateRocketFirework, this);

    scene.addChild(this);
  }

  moveRocket() {
    this._sprite.position.x -= this._speed;
    this._sprite.position.y -= this._speed;
  }

  explodeRocket() {
    this.removeChild(this._sprite);

    if (this._particles.length < 10) {
      const particle = new ParticleSprite({
        x: this._finalPosition.x,
        y: this._finalPosition.y,
      });

      this._particles.push(particle.sprite);
    }

    console.log(this._particles);

    // if (this._shouldExplode) {
    //   this._sprites.splice(0, 1);

    //   for (let i = -5; i < 11; i++) {
    //     const particle = new ParticleSprite({
    //       x: this._finalPosition.x + i * 10,
    //       y: this._finalPosition.y + i * 10,
    //     });

    //     this._sprites.push(particle.sprite);
    //     console.log(this._sprites);
    //     this.addChild(particle.sprite);
    //   }
    // } else {
  }

  updateRocketFirework(): void {
    const xFinalAchieved = this._sprite.position.x <= this._finalPosition.x;
    const yFinalAchieved = this._sprite.position.y <= this._finalPosition.y;

    if (xFinalAchieved && yFinalAchieved) {
      if (this._particles.length < 10) {
        this.explodeRocket();
      }
    } else {
      this.moveRocket();
    }
  }
}
