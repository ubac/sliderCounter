var slider = document.querySelector(".slider");
var output = document.querySelector("#value");
var text = document.querySelector(".btn");

output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

slider.addEventListener("mousemove", function () {
  var x = slider.value;
  var color =
    "linear-gradient(90deg,rgb(234, 124, 27)" +
    x +
    "%, rgb(214, 214, 214)" +
    x +
    "%)";

  slider.style.background = color;
});

// text.addEventListener("click", () => {
//   document.querySelector("demotext").innerHTML = "";
// });
