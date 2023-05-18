const input = document.getElementById("font-size-control");

const text = document.getElementById("text");

input.addEventListener("input", () => {
  text.style.fontSize = `${input.value}px`;
  console.log(input.value);
});
