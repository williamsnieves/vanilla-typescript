class ListBuilder {
  list: HTMLUListElement;
  constructor() {
    this.list = document.createElement("ul");
  }

  getElement() {
    return this.list;
  }

  renderList(): HTMLUListElement {
    return this.list;
  }

  addItem(ele: HTMLElement): void {
    this.list.appendChild(ele);
  }
}

export default ListBuilder;
