import { GameScene } from "./scene/map";
import { Game, WEBGL } from "phaser";

//find the canvas
const canvas = document.getElementById("game");
//create the game
const config = {
  type: WEBGL,
  width: window.innerWidth,
  height: window.innerHeight,
  canvas,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      // debug: true
    },
  },
  scene: [GameScene],
  antialias: false,
};

new Game(config);
