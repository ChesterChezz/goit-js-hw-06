const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  input.classList.remove(...input.classList);

  if (input.value.length === 6) {
    input.classList.add("valid");
  } else input.classList.add("invalid");
});
