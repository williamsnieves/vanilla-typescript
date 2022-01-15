class LayoutBuilder {
  layout: HTMLDivElement;
  constructor() {
    this.layout = document.createElement("div");
  }

  addClassToLayout(arg: string): void {
    console.log("arg---", arg);
  }

  renderContent(element: HTMLUListElement): void {
    this.layout.appendChild(element);
  }

  renderLayout(): void {
    const body: HTMLElement | null = document.querySelector("body");
    body?.appendChild(this.layout);
  }
}

export default LayoutBuilder;
