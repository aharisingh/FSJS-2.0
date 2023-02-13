//Task 1
let sec = document.querySelector(".col-lg-4");
sec.style.border = "5px solid red";

//Task 2
document.body.style.backgroundImage = "url('')";

//Task 3
function openNav() {
  hamburger.classList.add("is-active");
  document.querySelector(".navbar-toggler-icon").style.display = "block";
}

function closeNav() {
  hamburger.classList.remove("is-active");
  document.querySelector(".navbar-toggler-icon").style.display = "none";
}

// Hamburger Menu Spin
var hamburger = document.querySelector(".navbar-toggler-icon");

hamburger.addEventListener('click', () => hamburger.classList.contains('is-active') ? closeNav() : openNav());

closeNav();