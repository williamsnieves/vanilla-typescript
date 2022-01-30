import LayoutBuilder from "./utils/layoutBuilder";
import ListBuilder from "./utils/listBuilder";
import ListItemBuilder from "./utils/listItemBuilder";
import ButtonBuilder from "./utils/buttonBuilder";
import { productObject } from "./utils/types/types";
import data from "./data/items.json";

function handleAddProductToList(
  e: Event,
  id: string,
  wishlistLayout: LayoutBuilder,
  wishListElement: ListBuilder
): void {
  const result: any = data.products.find(
    (product: productObject): Boolean => product.itemId === id
  );

  renderWishlist(wishListElement, result, wishlistLayout);
}

function handleRemoveItemOnWishList(
  e: Event,
  id: string,
  wishListElement: any
) {
  const el = document.getElementById(`${id.toString()}`);

  wishListElement.removeChild(el);
}

function renderRemoveButton(
  product: productObject,
  wishListElement: LayoutBuilder,
  wishlistLayout: LayoutBuilder
): HTMLButtonElement {
  const removeButton = new ButtonBuilder();
  removeButton.addClass(["bg-red-500", "text-white", "p-2"]);
  removeButton.addName("X");
  removeButton.handleClickEvent("click", (e: Event) =>
    handleRemoveItemOnWishList(e, product.itemId, wishListElement)
  );

  return removeButton.renderButton();
}

function renderWishListItem(
  removeButton: HTMLButtonElement,
  product: productObject,
  wishListElement: ListBuilder
) {
  const itemElement = new ListItemBuilder();
  itemElement.addClass(["flex", "justify-between", "items-center"]);
  itemElement.renderItemContent(product.title);
  const el = itemElement.renderListItem();
  el.setAttribute("id", product.itemId);
  wishListElement.addClass(["divide-y-2", "divide-gray-100"]);
  wishListElement.addItem(el);
  itemElement.addButton(removeButton);
}

function renderWishlist(
  wishListElement: any,
  result: any,
  wishlistLayout: LayoutBuilder
) {
  wishlistLayout.renderLayout("wishlist");
  wishlistLayout.addClass([
    "w-1/3",
    "bg-white",
    "rounded-lg",
    "shadow",
    "p-4",
    "h-auto",
    "opacity-100",
  ]);
  const removeButton = renderRemoveButton(
    result,
    wishListElement.getElement(),
    wishlistLayout
  );

  renderWishListItem(removeButton, result, wishListElement);
  const ulElement: HTMLUListElement = wishListElement.renderList();

  wishlistLayout.renderContent(ulElement);
}

function renderAddButton(
  product: any,
  wishlistLayout: LayoutBuilder,
  wishListElement: ListBuilder
): HTMLButtonElement {
  const addButton = new ButtonBuilder();
  addButton.addClass(["bg-indigo-500", "text-white", "p-2"]);
  addButton.addName("Add");
  addButton.handleClickEvent("click", (e: Event) =>
    handleAddProductToList(e, product.itemId, wishlistLayout, wishListElement)
  );

  return addButton.renderButton();
}

function renderListItem(product: any, addBtn: any) {
  const itemElement = new ListItemBuilder();
  itemElement.renderItemContent(product.title);
  itemElement.addButton(addBtn);
  itemElement.addClass(["flex", "justify-between", "items-center"]);

  return itemElement.renderListItem();
}

function showProducts(
  mainLayout: LayoutBuilder,
  wishlistLayout: LayoutBuilder,
  itemsList: ListBuilder,
  wishListElement: ListBuilder
) {
  data.products.forEach((product: any, id: number) => {
    const addBtn = renderAddButton(product, wishlistLayout, wishListElement);
    const listItemEl = renderListItem(product, addBtn);
    itemsList.addItem(listItemEl);
    const ulElement: HTMLUListElement = itemsList.renderList();
    mainLayout.renderContent(ulElement);
  });
}

function init(): void {
  const wishListElement: ListBuilder = new ListBuilder();
  const mainLayout = new LayoutBuilder();
  const wishlistLayout = new LayoutBuilder();

  wishlistLayout.addClass(["opacity-0"]);
  mainLayout.renderLayout("products");
  mainLayout.addClass(["w-1/3", "bg-white", "rounded-lg", "shadow", "p-4"]);

  let itemsList: ListBuilder = new ListBuilder();
  itemsList.addClass(["divide-y-2", "divide-gray-100"]);

  showProducts(mainLayout, wishlistLayout, itemsList, wishListElement);
}

init();
