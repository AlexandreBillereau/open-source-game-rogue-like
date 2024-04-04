import { Scene, Game, WEBGL } from "phaser";

const canvas = document.getElementById("game");

class GameScene extends Scene {
  /** @type {Phaser.Physics.Arcade.Sprite} */
  #player;

  constructor() {
    super("scene-game");
  }

  preload() {
    this.load.atlas(
      "gameSprites",
      "assets/spritesPlayer.png",
      "assets/mapPlayer.json"
    );
  }

  create() {
    this.#player = this.physics.add.sprite(200, 200, "gameSprites");
    // this.#player.scale = 5;
    this.anims.create({
      key: "stand",
      frames: this.anims.generateFrameNames("gameSprites", {
        prefix: "stand",
        end: 3,
        zeroPad: 3,
      }),
      frameRate: 4,
      repeat: Number.POSITIVE_INFINITY,
    });

    this.cursor = this.input.keyboard.createCursorKeys();
    this.#player.anims.play("stand");
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
