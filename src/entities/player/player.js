import { Entity } from "../entity/Entity";

/**
 * @class Player - Represente a player in the game.
 * @extends Entity
 */
export class Player extends Entity {
  /** @type {Phaser.Scene} give by the parent */
  constructor(scene, x, y) {
    super(scene, x, y);
    this.cute = 0;
  }

  /**
   * Set up the animation of the player
   * @override
   */
  setUpAnimation() {
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNames("gameSprites", {
        prefix: "walk",
        end: 3,
        zeroPad: 3,
      }),
      frameRate: 4,
      repeat: Number.POSITIVE_INFINITY,
    });

    this.scene.anims.create({
      key: "stand",
      frames: this.scene.anims.generateFrameNames("gameSprites", {
        prefix: "stand",
        end: 3,
        zeroPad: 3,
      }),
      frameRate: 4,
      repeat: Number.POSITIVE_INFINITY,
    });
  }

  /**
   * Set up the entity of the player
   * @override
   */
  setUpEntity() {
    this.entity = this.scene.physics.add.sprite(this.x, this.y, "gameSprites");
  }

  /**
   * @param {Phaser.Scene} scene
   * This function supposed to load atlas assosiated with player
   */
  static load(scene) {
    scene.load.atlas(
      "gameSprites",
      "assets/spritesPlayer.png",
      "assets/mapPlayer.json"
    );
  }
}
