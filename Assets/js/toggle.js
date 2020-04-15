var n1 = document.getElementById("nav1");
var n2 = document.getElementById("nav2");

function togglenavbar() {
  if (n1.style.display == "none" || n2.style.display == "none") {
    n1.style.display = "inline-flex";
    n2.style.display = "inline-flex";
  } else {
    n1.style.display = "none";
    n2.style.display = "none";
  }
}
