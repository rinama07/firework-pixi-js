import { Container } from "pixi.js";

import { Coordinates } from "./types/coordinates";
import {
  getFountainProperties,
  getRocketProperties,
  getType,
} from "./utils/getElementAttribute";

import { Fountain } from "./Fountain";
import { Rocket } from "./Rocket";

export function launchFireworks(
  xmlFireworks: Element[],
  scene: Container,
  screenCenter: Coordinates
): void {
  xmlFireworks.forEach((xmlFirework: Element) => {
    const type = getType(xmlFirework);

    if (type === "Fountain") {
      const fountain = getFountainProperties(xmlFirework);

      setTimeout(() => {
        const fountainFirework = new Fountain(
          screenCenter,
          fountain.startPosition,
          fountain.durationInMs,
          fountain.colour
        );

        scene.addChild(fountainFirework);
        fountainFirework.moveFirework();
      }, fountain.beginAt);
    } else if (type === "Rocket") {
      const rocket = getRocketProperties(xmlFirework);

      setTimeout(() => {
        const rocketFirework = new Rocket(
          screenCenter,
          rocket.startPosition,
          rocket.durationInMs,
          rocket.colour,
          rocket.velocity
        );

        scene.addChild(rocketFirework);
        rocketFirework.moveFirework();
      }, rocket.beginAt);
    } else {
      throw new Error("Firework type not supported");
    }
  });
}
