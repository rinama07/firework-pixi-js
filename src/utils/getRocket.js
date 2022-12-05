import {
  getBegin,
  getColour,
  getDuration,
  getPosition,
  getVelocity,
} from "./getElementProperty";

export function getRocket(firework) {
  return {
    beginAt: getBegin(firework),
    colour: getColour(firework),
    durationInMs: getDuration(firework),
    startPosition: getPosition(firework),
    velocity: getVelocity(firework),
  };
}
