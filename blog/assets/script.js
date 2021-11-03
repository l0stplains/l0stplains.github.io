var textArray = [
  "Halo!",
  "你好!",
  "Bonjour!",
  "!السلام عليكم",
  "Hola!",
  "こんにちは!",
  "Hello!",
  "안녕!",
];

const button = document.querySelector(".easteregg");
let index = 1;

button.addEventListener("click", function (event) {
  document.querySelector("#halo").innerText = textArray[index];
  index++;
  if (index >= textArray.length) {
    index = 0;
  }
});
