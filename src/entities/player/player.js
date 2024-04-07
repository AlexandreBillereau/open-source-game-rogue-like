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

    this.inputManager = new InputManager(scene, (direction) => {
      this.handleMovement(direction);
    });

    this.inputManager.setLayout("WASD");
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
    this.entity.scale = 2;
  }

  /*

  input manager
  */

  handleMovement() {
    let moving = false; // flag for animation
    if (this.inputManager.keyStates.left) {
      this.entity.setVelocityX(-this.speed);
      moving = true;
    } else if (this.inputManager.keyStates.right) {
      this.entity.setVelocityX(this.speed);
      moving = true;
    } else {
      this.entity.setVelocityX(0);
    }

    if (this.inputManager.keyStates.up) {
      this.entity.setVelocityY(-this.speed);
      moving = true;
    } else if (this.inputManager.keyStates.down) {
      this.entity.setVelocityY(this.speed);
      moving = true;
    } else {
      this.entity.setVelocityY(0);
    }

    // Update the animation based on the movement
    if (moving) {
      this.entity.anims.play("walk", true);
    } else {
      this.entity.anims.play("stand", true);
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
