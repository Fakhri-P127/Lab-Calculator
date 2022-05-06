const input = document.querySelector("#input");
const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    switch (e.target.innerText) {
      case "AC":
        input.innerText = "";
        break;
      case "back":
        input.innerText = input.innerText.slice(0, -1);
        break;
      case "=":
        input.innerText = eval(input.innerText);
        break;
      default:
        input.innerText += e.target.innerText;
    }
  });
});
