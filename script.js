const burger = document.querySelector(".menu-toggle");
const activeElement = document.querySelectorAll(".active");
const activeNav = document.querySelector(".activeNav");

burger.addEventListener("click", function () {
    for (let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle("show");
    }
    activeNav.classList.toggle("on");
})

const headerElement = document.querySelector('header');
const headerContainer = document.querySelector('.header-container');
const navigation = document.querySelector('.activeNav');
// const images = document.querySelectorAll('.imgBox img');
const logoImage = document.querySelector('.logo');

window.addEventListener("scroll",
    function () {
        headerElement.classList.add("fixed");
        headerContainer.classList.add("fixed");
        navigation.classList.add("fixed");
        logoImage.classList.add("fixed");
    }
)

// burger.addEventListener("click", function () {
//     images.forEach(function (img) {
//         img.classList.toggle("fixed");
//     })
// })