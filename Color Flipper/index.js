$("button").click(function () {
  $("body").css("background-color", randomColor);
});

function randomColor() {
  let hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hexColor = "#";
  let hexDigits = 6;
  for (let i = 0; i < hexDigits; i++) {
    hexColor += hexValues[Math.floor(Math.random() * hexValues.length)];
  }
  $("#hex-value").text("Background Color: " + hexColor);
  return hexColor;
}
