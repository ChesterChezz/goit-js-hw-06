const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById("ingredients");
const fragment = document.createDocumentFragment();
const mes = document.createElement("h2");
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  fragment.appendChild(li);
});

ul.appendChild(fragment);
mes.textContent = "Варіант номер 2 (різний код)";
ul.appendChild(mes);

// Або інший варіант без використання ФРАГМЕНТ

let arr = [];
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  arr.push(li);
});

ul.append(...arr);
