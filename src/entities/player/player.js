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
    this.playerMovement = (direction) => {
      console.log(direction);
      switch (direction) {
        case "up":
          this.player.y -= 10;
          break;
        case "down":
          this.player.y += 10;
          break;
        case "left":
          this.player.x -= 10;
          break;
        case "right":
          this.player.x += 10;
          break;
        default:
          // Handle unexpected direction
          break;
      }
    };
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
    this.inputManager = new InputManager(this, this.playerMovement(direction));
    this.inputManager.setLayout("ARROWS");
  }

  /*

  input manager
  */
  update() {
    // this.inputManager = new InputManager(this.scene,
    // (direction) => {
    // // Logic to move player based on direction
    // console.log(`Moving player ${direction}`);
    // switch (direction) {
    //   case "up":
    //     this.entity.setVelocityY(-this.speed);
    //     break;
    //   case "down":
    //     this.entity.setVelocityY(this.speed);
    //     break;
    //   case "left":
    //     this.entity.setVelocityX(-this.speed);
    //     break;
    //   case "right":
    //     this.entity.setVelocityX(this.speed);
    //     break;
    // }
    // });
    // this.inputManager.setLayout("ARROWS");
    this.playerMovement();
  }

  /**
   *
   * @param {Phaser.Types.Input.Keyboard.CursorKeys} input
   */
  // update(input) {
  //   if (input.left.isDown) {
  //     this.entity.setVelocityX(-this.speed);
  //   } else if (input.right.isDown) {
  //     this.entity.setVelocityX(this.speed);
  //   } else {
  //     this.entity.setVelocityX(0);
  //   }

  //   if (input.up.isDown) {
  //     this.entity.setVelocityY(-this.speed);
  //   } else if (input.down.isDown) {
  //     this.entity.setVelocityY(this.speed);
  //   } else {
  //     this.entity.setVelocityY(0);
  //   }
  // }

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
