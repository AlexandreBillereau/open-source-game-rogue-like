import { Scene, Game, WEBGL } from "phaser";
import { Player } from "./entities/player/player";

const canvas = document.getElementById("game");

class GameScene extends Scene {
  /** @type {Player} */
  #player2;

  constructor() {
    super("scene-game");
  }

  preload() {
    Player.load(this);
  }

  create() {
    this.#player2 = new Player(this, 400, 300);

    this.cursor = this.input.keyboard.createCursorKeys();
    this.#player2.entity.anims.play("stand");
  }

  update(_time, _delta) {}
}

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
};

new Game(config);
