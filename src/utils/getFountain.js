import {
  getBegin,
  getColour,
  getDuration,
  getPosition,
} from "./getElementProperty";

export function getFountain(firework) {
  return {
    beginAt: getBegin(firework),
    colour: getColour(firework),
    durationInMs: getDuration(firework),
    startPosition: getPosition(firework),
  };
}
