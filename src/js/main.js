let hamburger = document.querySelector(".hamburger");
let menuOpen = document.querySelector(".menuOpen");

hamburger.addEventListener("click" , ()=> {
    menuOpen.classList.toggle("active");
})
