import { Coordinates } from "./coordinates";

export interface IRocket {
  beginAt: number;
  colour: number;
  durationInMs: number;
  startPosition: Coordinates;
  velocity: Coordinates;
}
