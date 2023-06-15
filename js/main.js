const loadingElement = document.querySelector('.loading-ele');
let mywebsite=document.getElementById('website');
loadingElement.style.display = 'block';
mywebsite.style.display = 'none';
setTimeout(function () {
  mywebsite.style.display = 'block';
  loadingElement.style.display = 'none';
}, 2500);
window.addEventListener('load', function () {
  this.document.documentElement.scrollTop = 0;
});

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  var goTopBtn = document.getElementById("TopButton");
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
}
function goToTop() {
  document.documentElement.scrollTop = 0;
}
document.getElementById("TopButton").onclick = goToTop;

let items = document.querySelectorAll(".navbar-nav li a");
items.forEach((e) => {
  e.addEventListener("click", (item) => {
    items.forEach((el) => {
      el.classList.remove("activeLink");
    })
    item.currentTarget.classList.add("activeLink");
  });
});