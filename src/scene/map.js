import { Scene } from "phaser";
import { Player } from "../entities/player/player";
import { Square } from "../entities/player/square";

export class GameScene extends Scene {
  /** @type {Player} */
  #player2;
  #player;

  constructor() {
    super("scene-game");
  }

  preload() {
    Player.preLoad(this);
  }

  create() {
    this.square = new Square(this, 400, 500);
    this.#player2 = new Player(this, 400, 300);
    this.#player = new Player(this, 500, 600);
    this.cursor = this.input.keyboard.createCursorKeys();
    this.#player2.entity.anims.play("stand");
    this.#player.entity.anims.play("stand");
  }

  update(_time, _delta) {
    this.#player2.update(this.cursor);
    this.#player.update(this.cursor);
    this.square.update(this.cursor);
  }
}
