import LayoutBuilder from "./utils/layoutBuilder";
import ListBuilder from "./utils/listBuilder";
import ListItemBuilder from "./utils/listItemBuilder";
import data from "./data/items.json";

const wishList: Array<object> = [];
let wishListElement: ListBuilder = new ListBuilder();

function handleAddProductToList(
  e: Event,
  id: string,
  mainLayout: any,
  wishlistLayout: any
): void {
  const result: any = data.products.find(
    (product: any): Boolean => product.itemId === id
  );

  wishList.push(result);

  renderWishlist(wishListElement, mainLayout, result, wishlistLayout);
}

function handleRemoveItemOnWishList(
  e: Event,
  id: number,
  wishListElement: any
) {
  const el = document.getElementById(`${id.toString()}`);
  wishListElement.removeChild(el);
}

function renderWishlist(
  wishListElement: any,
  mainLayout: any,
  result: any,
  wishlistLayout: any
) {
  wishlistLayout.renderLayout();
  wishlistLayout.addClass([
    "w-1/3",
    "bg-white",
    "rounded-lg",
    "shadow",
    "p-4",
    "h-auto",
  ]);
  const removeButton = document.createElement("button");
  removeButton.classList.add("bg-red-500", "text-white", "p-2");
  removeButton.innerText = "X";

  const itemElement = new ListItemBuilder();
  itemElement.addClass(["flex", "justify-between", "items-center"]);
  itemElement.renderItemContent(result.title);
  const el = itemElement.renderListItem();
  el.setAttribute("id", result.itemId);
  wishListElement.addClass(["divide-y-2", "divide-gray-100"]);
  wishListElement.addItem(el);

  removeButton.addEventListener("click", (e) =>
    handleRemoveItemOnWishList(e, result.itemId, wishListElement.getElement())
  );

  itemElement.addButton(removeButton);

  const ulElement: HTMLUListElement = wishListElement.renderList();
  wishlistLayout.renderContent(ulElement);
}

function init(): void {
  const mainLayout = new LayoutBuilder();
  const wishlistLayout = new LayoutBuilder();
  let elem = mainLayout.renderLayout();
  mainLayout.addClass(["w-1/3", "bg-white", "rounded-lg", "shadow", "p-4"]);

  let itemsList: ListBuilder = new ListBuilder();

  data.products.forEach((product: any, id: number) => {
    const button = document.createElement("button");
    button.classList.add("bg-indigo-500", "text-white", "p-2");
    button.innerText = "Add";

    button.addEventListener("click", (e) =>
      handleAddProductToList(e, product.itemId, mainLayout, wishlistLayout)
    );
    const itemElement = new ListItemBuilder();
    itemElement.renderItemContent(product.title);
    itemElement.addButton(button);
    itemElement.addClass(["flex", "justify-between", "items-center"]);
    const el = itemElement.renderListItem();
    itemsList.addClass(["divide-y-2", "divide-gray-100"]);
    itemsList.addItem(el);

    const ulElement: HTMLUListElement = itemsList.renderList();
    ulElement.classList.add("test");
    mainLayout.renderContent(ulElement);
  });
}

init();
