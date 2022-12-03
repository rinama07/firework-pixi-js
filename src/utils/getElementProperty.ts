import { Coordinates } from "../types/coordinates";
import { FireworkType } from "../types/firework-type";

export function getBegin(firework: Element): number {
  return Number(firework.getAttribute("begin"));
}

export function getColour(firework: Element): number {
  return Number(firework.getAttribute("colour"));
}

export function getCoordinates(element: Element): Coordinates {
  return {
    x: Number(element.getAttribute("x")),
    y: Number(element.getAttribute("y")),
  };
}

export function getDuration(firework: Element): number {
  return Number(firework.getAttribute("duration"));
}

export function getPosition(firework: Element): Coordinates {
  const PositionTag = firework.getElementsByTagName("Position")[0];

  return getCoordinates(PositionTag);
}

export function getVelocity(firework: Element): Coordinates {
  const VelocityTag = firework.getElementsByTagName("Velocity")[0];

  return getCoordinates(VelocityTag);
}

export function getType(firework: Element): FireworkType {
  return firework.getAttribute("type") as FireworkType;
}
