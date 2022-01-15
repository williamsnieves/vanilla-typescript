import LayoutBuilder from "./utils/layoutBuilder";
import ListBuilder from "./utils/listBuilder";
import ListItemBuilder from "./utils/listItemBuilder";
import data from "./data/items.json";

const wishList: Array<object> = [];
let wishListElement: ListBuilder = new ListBuilder();

function handleAddProductToList(e: Event, id: string, mainLayout: any): void {
  const result: any = data.products.find(
    (product: any): Boolean => product.itemId === id
  );

  wishList.push(result);

  renderWishlist(wishListElement, mainLayout, result);

  console.log("wishList---", wishList);
}

function handleRemoveItemOnWishList(
  e: Event,
  id: number,
  wishListElement: any
) {
  const el = document.getElementById(`${id.toString()}`);
  wishListElement.removeChild(el);
}

function renderWishlist(wishListElement: any, mainLayout: any, result: any) {
  const removeButton = document.createElement("button");
  removeButton.innerText = "X";

  const itemElement = new ListItemBuilder();
  itemElement.renderItemContent(result.title);
  const el = itemElement.renderListItem();
  el.setAttribute("id", result.itemId);
  wishListElement.addItem(el);

  removeButton.addEventListener("click", (e) =>
    handleRemoveItemOnWishList(e, result.itemId, wishListElement.getElement())
  );

  itemElement.addButton(removeButton);

  const ulElement: HTMLUListElement = wishListElement.renderList();
  mainLayout.renderContent(ulElement);
}

function init(): void {
  const mainLayout = new LayoutBuilder();
  mainLayout.renderLayout();

  let itemsList: ListBuilder = new ListBuilder();

  data.products.forEach((product: any, id: number) => {
    const button = document.createElement("button");
    button.innerText = "Add to wish list";

    button.addEventListener("click", (e) =>
      handleAddProductToList(e, product.itemId, mainLayout)
    );
    const itemElement = new ListItemBuilder();
    itemElement.renderItemContent(product.title);
    itemElement.addButton(button);
    const el = itemElement.renderListItem();
    itemsList.addItem(el);

    const ulElement: HTMLUListElement = itemsList.renderList();
    mainLayout.renderContent(ulElement);
  });
}

init();
