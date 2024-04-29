import Phaser from "phaser";

export class InputManager {
  constructor(scene, onMove) {
    this.scene = scene;
    this.onMove = onMove; // Callback function for movement
    this.keyStates = {};

    // Default to "WASD" layout, can be changed as needed
  }

  /**
   * Sets the keyboard layout for controlling the game
   * @param {string} layout
   *
   */

  setLayout(layout) {
    if (layout === "WASD") {
      this.keys = this.scene.input.keyboard.addKeys({
        up: "W",
        down: "S",
        left: "A",
        right: "D",
      });
    } else if (layout === "ZQSD") {
      this.keys = this.scene.input.keyboard.addKeys({
        up: "Z",
        down: "S",
        left: "Q",
        right: "D",
      });
    } else if (layout === "ARROWS") {
      this.keys = this.scene.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.UP,
        down: Phaser.Input.Keyboard.KeyCodes.DOWN,
        left: Phaser.Input.Keyboard.KeyCodes.LEFT,
        right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
      });
    }

    this.listenForInput();
  }

  listenForInput() {
    // Set up listeners for when keys are pressed down
    this.inputDown();
    // Set up listeners for when keys are released
    this.inputUp();
  }

  inputDown() {
    // Updated to use keydown-UP, keydown-DOWN, etc., for direct mapping
    Object.keys(this.keys).forEach((direction) => {
      this.keys[direction].on("down", () => {
        this.keyStates[direction] = true;
      });
    });
  }
  inputUp() {
    // Updated to use keydown-UP, keydown-DOWN, etc., for direct mapping
    Object.keys(this.keys).forEach((direction) => {
      this.keys[direction].on("up", () => {
        this.keyStates[direction] = false;
      });
    });
  }
  //to remove if necessary
  removeKeyListeners() {
    Object.keys(this.keys).forEach((direction) => {
      this.keys[direction].removeAllListeners("down");
      this.keys[direction].removeAllListeners("up");
    });
  }
}
