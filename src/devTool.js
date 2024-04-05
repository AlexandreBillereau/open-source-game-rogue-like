import Draggabilly from "draggabilly";

export class DevTool {
  entitiesArray = [];
  #devtool;
  #devtoolHandle;
  #debugContent;

  constructor() {
    this.#devtool = document.getElementById("DevTool");
    this.#devtoolHandle = document.getElementById("dev-tool-header");
    this.#debugContent = document.getElementById("debug-content");

    this.#createView();
  }

  #createView() {
    // find the dev tools elements
    new Draggabilly(this.#devtool, {
      containment: document.body,
      handle: this.#devtoolHandle,
    });
  }

  pushEntity(entity) {
    this.entitiesArray.push(entity);
    this.#entitiesChange();
  }

  #entitiesChange() {
    this.#debugContent.innerHTML = "";
    this.entitiesArray.forEach((entity, index) => {
      const div = document.createElement("div", { class: "entity" });
      div.innerHTML = this.#createEntityHtml(entity.name, index);
      console.log(entity);
      this.#debugContent.appendChild(div);

      const collide = document.getElementById(`collide-${index}`);
      collide.addEventListener("click", () => {
        entity.entity.debugShowBody = !entity.entity.debugShowBody;
      });
    });
  }

  #createEntityHtml(name, index) {
    return `
        <div class="entity">
        <div class="entity-label">
          <span class="entity-name">${name}</span>
          <button>logo</button>
        </div>
        <div class="entity-body">
          <div class="parameter">
            <span>body colision</span>
            <button id="collide-${index}" type="checkbox"></button>
          </div>
          <div class="parameter">
            <span>body velocity</span>
            <button type="checkbox"></button>
          </div>
        </div>
      </div>
    `;
  }
}
