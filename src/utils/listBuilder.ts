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

  addClass(classesEl: any): void {
    classesEl.forEach((classEl: string) => {
      this.list.classList.add(classEl);
    });
  }
}

export default ListBuilder;
