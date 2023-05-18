function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlDiv = document.getElementById("controls");

const input = controlDiv.querySelector("input");

const btns = controlDiv.querySelectorAll("button");

const boxesDiv = document.getElementById("boxes");

let createBtn;
let destroyBtn;

btns.forEach((element) => {
  switch (element.innerHTML) {
    case "Create":
      createBtn = element;
      break;
    case "Destroy":
      destroyBtn = element;
      break;
    default:
      break;
  }
});

createBtn.addEventListener("click", () => {
  if (input.value) {
    if (input.value > 100 || input.value < 1) {
      alert("Введіть значення в Інпут від 1 до 100");
    } else createBoxes(input.value);
  } else {
    alert("Введіть значення в Інпут від 1 до 100");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  const size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${size + i * 10}px`;
    div.style.width = `${size + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.append(div);
  }
  boxesDiv.append(fragment);
}

function destroyBoxes() {
  while (boxesDiv.firstChild) {
    boxesDiv.removeChild(boxesDiv.firstChild);
  }
}
