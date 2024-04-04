import { Scene, Game, WEBGL } from "phaser";
import { Entity } from "./entities/entity/Entity";

const canvas = document.getElementById("game");

class GameScene extends Scene {
  /** @type {Phaser.Physics.Arcade.Sprite} */
  #player;

  /** @type {Entity} */
  #player2;

  constructor() {
    super("scene-game");
  }

  preload() {
    Entity.load(this);
  }

  create() {
    this.#player2 = new Entity(this, 400, 200);

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
