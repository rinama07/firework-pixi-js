import { Coordinates } from "../types/coordinates";
import { FireworkType } from "../types/firework-type";
import { IFountain } from "../types/fountain";
import { IRocket } from "../types/rocket";

const getCoordinates = (element: Element) => ({
  x: Number(element.getAttribute("x")),
  y: Number(element.getAttribute("y")),
});

const getBegin = (firework: Element): number =>
  Number(firework.getAttribute("begin"));

const getColour = (firework: Element): number =>
  Number(firework.getAttribute("colour"));

const getDuration = (firework: Element): number =>
  Number(firework.getAttribute("duration"));

function getPosition(firework: Element): Coordinates {
  const PositionTag = firework.getElementsByTagName("Position")[0];

  return getCoordinates(PositionTag);
}

function getVelocity(firework: Element): Coordinates {
  const VelocityTag = firework.getElementsByTagName("Velocity")[0];

  return getCoordinates(VelocityTag);
}

export const getType = (firework: Element): FireworkType =>
  firework.getAttribute("type") as FireworkType;

export function getFountainProperties(firework: Element): IFountain {
  return {
    beginAt: getBegin(firework),
    colour: getColour(firework),
    durationInMs: getDuration(firework),
    startPosition: getPosition(firework),
  };
}

export function getRocketProperties(firework: Element): IRocket {
  return {
    beginAt: getBegin(firework),
    colour: getColour(firework),
    durationInMs: getDuration(firework),
    startPosition: getPosition(firework),
    velocity: getVelocity(firework),
  };
}
