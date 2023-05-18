const form = document.querySelector(".login-form");
const inputs = form.querySelectorAll("input");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Для доступу до елементів форми використовуй властивість elements.
  //Сподіваюсь я правильно поняв цю умову
  const btns = [];
  for (const e of form.elements) {
    if (e.tagName === "INPUT") btns.push(e);
  }
  let bool = true;
  //використовув цикл ФОР щоб моджна було брейкнути і не виводити алерт декільки разів
  for (let index = 0; index < btns.length; index++) {
    if (btns[index].value === "") {
      alert("Всі поля моють бути заповненими !");
      bool = false;
      break;
    }
  }
  if (bool) {
    let user = new Object();
    btns.forEach((element) => {
      user[element.name] = element.value;
    });
    console.log(user);
    form.reset();
  }
});
