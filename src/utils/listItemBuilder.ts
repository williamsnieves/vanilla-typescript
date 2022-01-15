import JSONValue from "./types/types";
class ListItemBuilder {
  item: HTMLElement;
  constructor() {
    this.item = document.createElement("li");
  }

  renderListItem(): HTMLElement {
    return this.item;
  }

  renderItemContent(content: string): void {
    this.item.textContent = content;
  }

  addButton(element: HTMLButtonElement): void {
    this.item.appendChild(element);
  }
}

export default ListItemBuilder;
