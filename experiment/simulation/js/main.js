//Your JavaScript goes in here
const needle = document.querySelector("#needle");
needle.addEventListener("click", function () {
  needle.setAttribute("transform", "translate(0,-125)");
  needle.style.transition = "transform 2s";

  document.getElementById("ammeter1").disabled = false;
});

const needle2 = document.querySelector("#needle2");
needle2.addEventListener("click", function () {
  needle2.setAttribute("transform", "translate(0,-125)");
  needle2.style.transition = "transform 2s";

  document.getElementById("ammeter1").disabled = false;
});

const switchon = document.querySelector("#switchon");
switchon.addEventListener("click", function () {
  switchon.setAttribute("transform", "translate(0,30)");
  switchon.style.transition = "transform 2s";
  document.getElementById("color").style.fill = "green";
  document.getElementById("color").style.transition = "transform 2s";
  console.log("switchon");
  // document.getElementById("ammeter1").disabled = false;
});
function switchoff() {
  const switchoff = document.querySelector("#switchon");
  switchoff.setAttribute("transform", "translate(0,-5)");
  switchoff.style.transition = "transform 2s";
  document.getElementById("color").style.fill = "white";
  document.getElementById("color").style.transition = "transform 2s";
}
function changecolor() {
  document.getElementById("circle1").style.fill = "green";
  document.getElementById("circle2").style.fill = "green"; console.log("circle");
}
