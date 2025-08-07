function openNav() {
  var test = window.innerWidth*0.6;
  document.getElementById("mySidenav").style.width = test.toString()+"px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

window.addEventListener("resize", function () {
  const nav = document.getElementById("top");

  if (window.innerWidth >= 961) {
    // Inline-Style entfernen, damit Media Query wieder greift
    nav.style.display = "";
  }
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */







