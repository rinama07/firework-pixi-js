import { Container, Sprite, Texture, Ticker } from "pixi.js";

import { Coordinates } from "./types/coordinates";

export class Fountain extends Container {
  private _sprite: any;
  private _speed: number;
  private _finalPosition: Coordinates;

  constructor(
    scene: Container,
    center: Coordinates,
    start: Coordinates,
    duration: number,
    colour: number
    // velocity: Coordinates
  ) {
    super();

    this._speed = duration / 1000;
    this._finalPosition = { x: 0, y: 0 };

    const TEXTURE = Texture.from("public/fountain.png");
    const fountain = Sprite.from(TEXTURE);
    fountain.tint = colour;
    fountain.position.set(center.x, center.y);
    fountain.anchor.set(0.5);

    this._sprite = fountain;

    Ticker.shared.add(this.updateFirework, this);

    // this.addChild(this._sprite);
    // scene.addChild(this);
  }

  updateFirework(): void {
    this._sprite.position.x -= this._speed;
    this._sprite.position.y -= this._speed;
    this._sprite.alpha -= 0.01;

    const xFinalAchieved = this._sprite.position.x <= this._finalPosition.x;
    const yFinalAchieved = this._sprite.position.y <= this._finalPosition.y;

    if (xFinalAchieved && yFinalAchieved) {
      this.removeChild(this._sprite);
    }
  }
}
