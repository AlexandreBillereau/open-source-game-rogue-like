/**
 * @class Enity - Represente an entitiy in the game.
 * @extends Phaser.GameObjects.Sprite
 */
export class Entity extends Phaser.GameObjects.Sprite {
  /** @type {Phaser.Scene} give by the parent*/

  /** @type {Phaser.Physics.Arcade.Sprite} */
  entity;

  /**
   * @param {Phaser.Scene} scene
   * @param {number} x position x in the scene
   * @param {number} y position y in the scene
   */
  constructor(scene, x, y) {
    super(scene, x, y);
    if (this.constructor === Entity) {
      throw new Error(
        "Entity is an abstract class and cannot be instantiated directly."
      );
    }
    this.setUpAnimation();
    this.setUpEntity();
    this.#debugInit();
  }

  setUpAnimation() {
    throw new Error("Method createAnimation() not implemented.");
  }

  setUpEntity() {
    throw new Error("Method create() not implemented.");
  }

  #debugInit() {
    this.entity.debugShowBody = false;
    this.entity.debugShowVelocity = false;
  }

  /**
   * @param {Phaser.Scene} scene
   * this function supposed to load atlas assosiated with player
   */
  static preLoad(scene) {
    throw new Error(`Method static load() not implemented. ${scene}`);
  }
}
