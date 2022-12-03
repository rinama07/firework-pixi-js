import { IFountain } from "../types/fountain";

import {
  getBegin,
  getColour,
  getDuration,
  getPosition,
} from "./getElementProperty";

export function getFountain(firework: Element): IFountain {
  return {
    beginAt: getBegin(firework),
    colour: getColour(firework),
    durationInMs: getDuration(firework),
    startPosition: getPosition(firework),
  };
}
