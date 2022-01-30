class LayoutBuilder {
  layout: HTMLDivElement;
  constructor() {
    this.layout = document.createElement("div");
  }

  renderContent(element: HTMLUListElement): void {
    this.layout.appendChild(element);
  }

  renderLayout(id: string): void {
    const body: HTMLElement | null = document.getElementById("root");
    this.layout.setAttribute("id", id);
    body?.appendChild(this.layout);
  }

  addClass(classesEl: string[]): void {
    classesEl.forEach((classEl: string) => {
      this.layout.classList.add(classEl);
    });
  }
}

export default LayoutBuilder;
