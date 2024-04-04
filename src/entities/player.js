import * as Phaser from "phaser";

/**
 * @class Player - Représente un joueur dans le jeu.
 * @extends Phaser.GameObjects.Sprite
 */
export class Entity extends Phaser.GameObjects.Sprite {
  /**
   * @constructor
   * @param {Phaser.Scene} scene - La scène à laquelle le joueur appartient.
   * @param {number} x - La position horizontale initiale du joueur.
   * @param {number} y - La position verticale initiale du joueur.
   */
  constructor(scene, x, y) {
    //load Sprite
    super(scene, x, y);
    scene.load.atlas(
      "player",
      "assets/spritesPlayer.png",
      "assets/mapPlayer.json"
    );
  }

  /**
   * Charge le sprite du joueur.
   * @param {Phaser.Scene} scene - La scénne dans laquelle le sprite est charge.
   */
  createSprite() {
    this.scene.physics.add.sprite(this.x, this.y, "player");
  }

  /**
   * Crée les animations du joueur.
   */
  createAnimation() {
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNames("player", {
        prefix: "standing",
        end: 4,
        zeroPad: 3,
      }),
      // frameRate: 10,
      repeat: "infinity",
    });
  }

  create() {
    this.createSprite();
    this.createAnimation();
  }
}
