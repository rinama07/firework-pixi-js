import { Container } from "pixi.js";

import { Coordinates } from "../types/coordinates";
import { getType } from "../utils/getElementProperty";
import { getFountain } from "../utils/getFountain";
import { getRocket } from "../utils/getRocket";

import { Fountain } from "../Fountain";
import { Rocket } from "../Rocket";

export class FireworksScene extends Container {
  private _screenCenter: Coordinates;
  private _xmlFireworks: Element[];

  constructor(
    screenHeight: number,
    screenWidth: number,
    xmlFireworks: Element[]
  ) {
    super();

    this._xmlFireworks = xmlFireworks;
    this._screenCenter = {
      x: Math.floor(screenWidth / 2),
      y: Math.floor(screenHeight / 2),
    };

    this.position.set(0, 0);

    this.launchFireworks();
  }

  launchFireworks(): void {
    this._xmlFireworks.forEach((xmlFirework: Element) => {
      const type = getType(xmlFirework);

      switch (type) {
        case "Fountain":
          this.launchFountain(xmlFirework);
          break;

        case "Rocket":
          this.launchRocket(xmlFirework);
          break;

        default:
          throw new Error("Firework type not supported");
      }
    });
  }

  launchFountain(xmlFirework: Element): void {
    const fountain = getFountain(xmlFirework);

    setTimeout(() => {
      const fountainFirework = new Fountain(
        this._screenCenter,
        fountain.startPosition,
        fountain.durationInMs,
        fountain.colour
      );

      this.addChild(fountainFirework);
    }, fountain.beginAt);
  }

  launchRocket(xmlFirework: Element): void {
    const rocket = getRocket(xmlFirework);

    setTimeout(() => {
      const rocketFirework = new Rocket(
        this._screenCenter,
        rocket.colour,
        rocket.durationInMs,
        rocket.startPosition,
        rocket.velocity
      );

      this.addChild(rocketFirework);
    }, rocket.beginAt);
  }
}
