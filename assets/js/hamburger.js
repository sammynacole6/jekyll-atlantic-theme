const body = document.querySelector("body");
const menuOpenTrigger = document.querySelector("#menu-trigger");
const menuCloseTrigger = document.querySelector("#menu-close");
const menuContainer = document.querySelector("#menu-container");
const hamburgerIcon = document.querySelector(".hamburger");

if (menuOpenTrigger !== null) {
  menuOpenTrigger.addEventListener("click", function (e) {
    console.log("asldj");
    menuContainer.classList.toggle("hidden");
    menuContainer.classList.toggle("flex");
    hamburgerIcon.classList.toggle("is-active");
    body.classList.toggle("lock-scroll");
  });
  menuCloseTrigger.addEventListener("click", function (e) {
    console.log("asldj");
    menuContainer.classList.toggle("hidden");
    menuContainer.classList.toggle("flex");
    hamburgerIcon.classList.toggle("is-active");
    body.classList.toggle("lock-scroll");
  });
}
