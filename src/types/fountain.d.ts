import { Coordinates } from "./coordinates";

export interface IFountain {
  beginAt: number;
  colour: number;
  durationInMs: number;
  startPosition: Coordinates;
}
