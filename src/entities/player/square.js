import { Entity } from "../entity/Entity";

/**
 * @class Square - Represente a square in the game.
 * @extends Entity
 */
export class Square extends Entity {
  /**
   * Set up the entity of the square
   * @override
   */
  setUpEntity() {
    this.square = this.scene.add.rectangle(this.x, this.y, 32, 32, 0xff0000);
    this.scene.physics.world.enable(
      this.square,
      Phaser.Physics.Arcade.DYNAMIC_BODY
    );
    this.entity = this.square.body;
  }

  setUpAnimation() {
    //null
  }

  /**
   *
   * @param {Phaser.Types.Input.Keyboard.CursorKeys} input
   */
  update(input) {
    if (input.left.isDown) {
      this.entity.setVelocityX(-200);
    } else if (input.right.isDown) {
      this.entity.setVelocityX(200);
    } else {
      this.entity.setVelocityX(0);
    }

    if (input.up.isDown) {
      this.entity.setVelocityY(-200);
    } else if (input.down.isDown) {
      this.entity.setVelocityY(200);
    } else {
      this.entity.setVelocityY(0);
    }
  }
}
