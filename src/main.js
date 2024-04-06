import { Scene, Game, WEBGL } from "phaser";
import { Player } from "./entities/player/player";
import { Square } from "./entities/player/square";

const canvas = document.getElementById("game");

class GameScene extends Scene {
  /** @type {Player} */
  #player2;

  constructor() {
    super("scene-game");
  }

  preload() {
    Player.preLoad(this);
  }

  create() {
    this.#player2 = new Player(this, 400, 300);
    this.square = new Square(this, 400, 500);
    this.cursor = this.input.keyboard.createCursorKeys();
    this.#player2.entity.anims.play("stand");
  }

  update(_time, _delta) {
    this.#player2.update(this.cursor);
    this.square.update(this.cursor);
  }
}

const config = {
  type: WEBGL,
  width: window.innerWidth * 0.8,
  height: window.innerHeight * 0.8,
  canvas,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [GameScene],
  antialias: false,
};

new Game(config);
