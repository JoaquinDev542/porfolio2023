// Menu Section
let hamburger = document.querySelector(".hamburger");
let menuOpen = document.querySelector(".menuOpen");
let menuOpenList__linkAbout = document.querySelector(".menuOpenList__link--about");
let menuOpenList__linkSkills = document.querySelector(".menuOpenList__link--skills");
let menuOpenList__linkProjects = document.querySelector(".menuOpenList__link--projects");
let menuOpenList__linkContact = document.querySelector(".menuOpenList__link--contact");

hamburger.addEventListener("click" , ()=> {
    menuOpen.classList.toggle("active");
    menuOpen.classList.add("remove");
});

menuOpenList__linkAbout.addEventListener("click" , () => {
    menuOpen.classList.remove("active");
});

menuOpenList__linkSkills.addEventListener("click" , () => {
    menuOpen.classList.remove("active");
});

menuOpenList__linkProjects.addEventListener("click" , () => {
    menuOpen.classList.remove("active");
});

menuOpenList__linkContact.addEventListener("click" , () => {
    menuOpen.classList.remove("active");
});

