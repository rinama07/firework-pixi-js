import { Application, Container } from "pixi.js";

import { fetchXmlFireworks } from "./server/fetchXmlFireworks";
import { Coordinates } from "./types/coordinates";
import { launchFireworks } from "./utils/launchFireworks";

import "./styles/global.css";

const app = new Application({
  height: 768,
  width: 1024,
});

const appElement = document.getElementById("app") as HTMLDivElement;
appElement.appendChild(app.view as HTMLCanvasElement);

const scene = new Container();
app.stage.addChild(scene);

const screenCenter: Coordinates = {
  x: Math.floor(app.screen.width / 2),
  y: Math.floor(app.screen.height / 2),
};

fetchXmlFireworks((xmlFireworks: Element[]): void => {
  launchFireworks(xmlFireworks, scene, screenCenter);
});
