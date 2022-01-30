class ButtonBuilder {
  button: HTMLButtonElement;
  constructor() {
    this.button = document.createElement("button");
  }

  renderButton(): HTMLButtonElement {
    return this.button;
  }

  addName(name: string): void {
    this.button.innerText = name;
  }

  addClass(classNames: string[]): void {
    classNames.forEach((className: string) => {
      this.button.classList.add(className);
    });
  }

  handleClickEvent(type: string, handler: any): void {
    this.button.addEventListener(type, handler);
  }
}

export default ButtonBuilder;
