import Draggabilly from "draggabilly";

// find the dev tools elements
const devtool = document.getElementById("DevTool");
const devtoolHandle = document.getElementById("dev-tool-header");
new Draggabilly(devtool, {
  containment: document.body,
  handle: devtoolHandle,
});

export class DevTool {
  entityArray = [];

  constructor() {
    this.devtool = devtool;
  }
}
