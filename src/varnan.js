// When any menu item is clicked, the menu will rotate to bring the clicked item to the right horizontally.
// The codepen link for the same is: https://codepen.io/Krounosity/pen/xxBLpvV

// Event listener for the "web" menu item
document.getElementById("web").addEventListener("click", function () {
  document.querySelector(".menu ul").style.transform =
    "rotate(67.5deg) translateX(0.5rem) translateY(-1.2rem)";
});

// Event listener for the "elec" menu item
document.getElementById("elec").addEventListener("click", function () {
  document.querySelector(".menu ul").style.transform =
    "rotate(22.5deg) translateY(-1em) translateX(0.3em)";
});

// Event listener for the "systems" menu item
document.getElementById("systems").addEventListener("click", function () {
  document.querySelector(".menu ul").style.transform =
    "rotate(-22.5deg) translateX(-0.3rem) translateY(-1rem)";
});

// Event listener for the "3d" menu item
document.getElementById("3d").addEventListener("click", function () {
  document.querySelector(".menu ul").style.transform =
    "rotate(-67.5deg) translateX(-0.6rem) translateY(-1.3rem)";
});
