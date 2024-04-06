import { Entity } from "../entity/Entity";
import { InputManager } from "../../system/InputManager";

/**
 * @class Player - Represente a player in the game.
 * @extends Entity
 */
export class Player extends Entity {
  /** @type {Phaser.Scene} give by the parent */
  constructor(scene, x, y) {
    super(scene, x, y);
    this.cute = 0;
    this.speed = 200;

    this.inputManager = new InputManager(scene, (direction, isDown) => {
      this.handleMovement(direction, isDown);
    });
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
    this.entity.scale = 3;
  }

  /*

  input manager
  */

  handleMovement(direction, isDown) {
    const velocity = isDown ? this.speed : 0; // Move if key is down, stop if key is up
    switch (direction) {
      case "left":
        this.entity.setVelocityX(-velocity);
        break;
      case "right":
        this.entity.setVelocityX(velocity);
        break;
      case "up":
        this.entity.setVelocityY(-velocity);
        break;
      case "down":
        this.entity.setVelocityY(velocity);
        break;
    }

    // Optionally, update the animation based on movement
    if (isDown) {
      this.entity.play("walk", true);
    } else {
      // This assumes all keys are released. You may need a more complex check.
      this.entity.play("stand", true);
    }
  }

  update() {
    this.handleMovement();
  }

  /**
   * @param {Phaser.Scene} scene
   * This function supposed to load atlas assosiated with player
   */
  static preLoad(scene) {
    scene.load.atlas(
      "gameSprites",
      "assets/spritesPlayer.png",
      "assets/mapPlayer.json"
    );
  }
}
