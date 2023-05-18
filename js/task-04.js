let counterValue = 0;
const value = document.getElementById("value");

const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.action === "decrement") counterValue--;
    else counterValue++;
    value.textContent = counterValue;
  });
});
