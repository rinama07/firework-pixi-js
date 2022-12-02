import { Container } from "pixi.js";

import { Fountain } from "./Fountain";
import { Rocket } from "./Rocket";
import { Coordinates } from "./types/coordinates";
import {
  getFountainProperties,
  getRocketProperties,
  getType,
} from "./utils/getElementAttribute";

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
        new Fountain(
          scene,
          screenCenter,
          fountain.startPosition,
          fountain.durationInMs,
          fountain.colour
        );
      }, fountain.beginAt);
    } else if (type === "Rocket") {
      const rocket = getRocketProperties(xmlFirework);

      setTimeout(() => {
        new Rocket(
          scene,
          screenCenter,
          rocket.startPosition,
          rocket.durationInMs,
          rocket.colour,
          rocket.velocity
        );
      }, rocket.beginAt);
    } else {
      throw new Error("Firework type not supported");
    }
  });
}
