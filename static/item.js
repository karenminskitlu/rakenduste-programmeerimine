const x = window.location;
console.log(x);
const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
const cost = urlParams.get("cost");
const src = urlParams.get("src");
console.log(title, cost, src);
//alert(`${title}\n${cost}€\n${src}`)

const container = document.createElement("div");
container.className = "itemContainer";

const leftContainer = document.createElement("div");
leftContainer.className = "itemLeftContainer";

const rightContainer = document.createElement("div");
rightContainer.className = "itemRightContainer";

const image = document.createElement("img");
image.src = src;
image.className = "item__image";

const titleElement = document.createElement("h2");
titleElement.textContent = title;
titleElement.className = "item__title";

const textElement= document.createElement("p");
textElement.textContent = "A beautiful authentic hand-made high-quality dreamcatcher";
textElement.className = "item__description";

const costElement = document.createElement("p");
costElement.textContent = cost + "€";
costElement.className = "item__price";

container.append(leftContainer);
container.append(rightContainer);
rightContainer.append(titleElement);
leftContainer.append(image);
rightContainer.append(textElement);
rightContainer.append(costElement);

window.addEventListener("load", () => {
    const app = document.getElementById("item-body");
    app.append(container);
})