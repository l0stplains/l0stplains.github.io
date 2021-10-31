var textArray = [
  "你好!",
  "Bonjour!",
  "!السلام عليكم",
  "Hola!",
  "こんにちは!",
  "Halo!",
  "안녕!",
];
var index = 1;
textArray.unshift($("#halo").text());
setInterval(function () {
  $("#halo").animate(
    {
      opacity: 0,
    },
    function () {
      if (textArray.length > index) {
        $(this).text(textArray[index]).animate({ opacity: 1 });
        index++;
      } else {
        $(this).text(textArray[0]).animate({ opacity: 1 });
        index = 1;
      }
    }
  );
}, 3000);
