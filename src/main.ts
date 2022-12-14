import { Application } from "pixi.js";

import { FireworksScene } from "./scenes/FireworksScene";
import { fetchXmlFireworks } from "./server/fetchXmlFireworks";

import "./styles/global.css";

const app = new Application({
  height: 768,
  width: 1024,
});

const appElement = document.getElementById("app") as HTMLDivElement;
appElement.appendChild(app.view as HTMLCanvasElement);

fetchXmlFireworks((xmlFireworks: Element[]): void => {
  const scene = new FireworksScene(
    app.screen.height,
    app.screen.width,
    xmlFireworks
  );

  app.stage.addChild(scene);
});
