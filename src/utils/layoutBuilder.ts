class LayoutBuilder {
  layout: HTMLDivElement;
  constructor() {
    this.layout = document.createElement("div");
  }

  addClassToLayout(arg: string): void {
    this.layout.classList.add(arg);
  }

  renderContent(element: HTMLUListElement): void {
    this.layout.appendChild(element);
  }

  renderLayout(): void {
    const body: HTMLElement | null = document.getElementById("root");
    body?.appendChild(this.layout);
  }

  addClass(classesEl: string[]): void {
    classesEl.forEach((classEl: string) => {
      this.layout.classList.add(classEl);
    });
  }
}

export default LayoutBuilder;
