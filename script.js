const burger = document.querySelector(".menu-toggle");
const activeElement = document.querySelectorAll(".active");
const activeNav = document.querySelector(".activeNav");

burger.addEventListener("click", function () {
    for (let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle("show");
    }
    activeNav.classList.toggle("on");
})