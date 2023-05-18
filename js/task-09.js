function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector("button.change-color");
const span = document.querySelector("span.color");
console.log(span);
btn.addEventListener("click", () => {
  const value = getRandomHexColor();
  body.style.backgroundColor = value;
  span.textContent = value;
});
