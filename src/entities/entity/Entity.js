/**
 * @class Enity - Represente an entitiy in the game.
 * @extends Phaser.GameObjects.Sprite
 */
export class Entity extends Phaser.GameObjects.Sprite {
  /** @type {Phaser.Scene} give by the parent*/

  entity;

  constructor(scene, x, y) {
    super(scene, x, y);
    this.create();
  }

  //todo: try with just this.anims
  createAnimation() {
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNames("gameSprites", {
        prefix: "walk",
        end: 3,
        zeroPad: 3,
      }),
      // frameRate: 10,
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

  create() {
    this.entity = this.scene.physics.add.sprite(this.x, this.y, "gameSprites");
    this.createAnimation();
  }

  /**
   * @param {Phaser.Scene} scene
   * this function supposed to load atlas assosiated with player
   */
  static load(scene) {
    scene.load.atlas(
      "gameSprites",
      "assets/spritesPlayer.png",
      "assets/mapPlayer.json"
    );
  }
}
