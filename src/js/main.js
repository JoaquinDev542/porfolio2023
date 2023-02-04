// Menu Section
let hamburger = document.querySelector(".hamburger");
let menuOpen = document.querySelector(".menuOpen");
let menuOpenList__linkAbout = document.querySelector(".menuOpenList__link--about");
let menuOpenList__linkSkills = document.querySelector(".menuOpenList__link--skills");
let menuOpenList__linkProjects = document.querySelector(".menuOpenList__link--projects");
let menuOpenList__linkContact = document.querySelector(".menuOpenList__link--contact");
let heroMoveText = document.querySelector(".heroMoveText");
let main = document.querySelector(".main");
let footer = document.querySelector(".footer");

hamburger.addEventListener("click" , ()=> {
    menuOpen.classList.toggle("active");
    menuOpen.classList.add("remove");
    heroMoveText.classList.toggle("active");
    main.classList.toggle("active");
    footer.classList.toggle("active");
    heroMoveText.classList.add("remove");
    main.classList.add("remove");
    footer.classList.add("remove");
});

menuOpenList__linkAbout.addEventListener("click" , () => {
    menuOpen.classList.remove("active");
    heroMoveText.classList.remove("active");
    main.classList.remove("active");
    footer.classList.remove("active");
});

menuOpenList__linkSkills.addEventListener("click" , () => {
    menuOpen.classList.remove("active");
    heroMoveText.classList.remove("active");
    main.classList.remove("active");
    footer.classList.remove("active");
});

menuOpenList__linkProjects.addEventListener("click" , () => {
    menuOpen.classList.remove("active");
    heroMoveText.classList.remove("active");
    main.classList.remove("active");
    footer.classList.remove("active");
});

menuOpenList__linkContact.addEventListener("click" , () => {
    menuOpen.classList.remove("active");
    heroMoveText.classList.remove("active");
    main.classList.remove("active");
    footer.classList.remove("active");
});


// Header Bg Section
let header = document.querySelector(".header");

const functionChangeBgHeader = ()=> {
    if(document.documentElement.scrollTop >= 15) {
        header.classList.add("addColor");
    } else {
        header.classList.remove("addColor");
    }
}
window.addEventListener("scroll" , functionChangeBgHeader);

// Menu Links when active state

let headerLink = document.querySelector(".headerLink");
let headerLinkFooter = document.querySelector(".headerLink--footer");
let navList__linkAbout = document.querySelector(".navList__link--about" , "::after");
let navList__linkSkills = document.querySelector(".navList__link--skills"  , "::after");
let navList__linkProjects = document.querySelector(".navList__link--projects"  , "::after");
let navList__linkContact = document.querySelector(".navList__link--contact"  , "::after");
let footerCopyrightArrowLink = document.querySelector(".footerCopyrightArrowLink");

headerLink.addEventListener('click' , ()=> {
    navList__linkAbout.classList.remove("active");
    navList__linkSkills.classList.remove("active");
    navList__linkProjects.classList.remove("active");
    navList__linkContact.classList.remove("active");
});

navList__linkAbout.addEventListener('click' , ()=> {
    navList__linkAbout.classList.add("active");
    navList__linkSkills.classList.remove("active");
    navList__linkProjects.classList.remove("active");
    navList__linkContact.classList.remove("active");
});

navList__linkSkills.addEventListener('click' , ()=> {
    navList__linkSkills.classList.add("active");
    navList__linkAbout.classList.remove("active");
    navList__linkProjects.classList.remove("active");
    navList__linkContact.classList.remove("active");
});

navList__linkProjects.addEventListener('click' , ()=> {
    navList__linkProjects.classList.add("active");
    navList__linkAbout.classList.remove("active");
    navList__linkSkills.classList.remove("active");
    navList__linkContact.classList.remove("active");
});

navList__linkContact.addEventListener('click' , ()=> {
    navList__linkContact.classList.add("active");
    navList__linkAbout.classList.remove("active");
    navList__linkSkills.classList.remove("active");
    navList__linkProjects.classList.remove("active");
});

headerLinkFooter.addEventListener('click' , ()=> {
    navList__linkAbout.classList.remove("active");
    navList__linkSkills.classList.remove("active");
    navList__linkProjects.classList.remove("active");
    navList__linkContact.classList.remove("active");
});

footerCopyrightArrowLink.addEventListener('click' , ()=> {
    navList__linkAbout.classList.remove("active");
    navList__linkSkills.classList.remove("active");
    navList__linkProjects.classList.remove("active");
    navList__linkContact.classList.remove("active");
});

// About Section Changes Time
let aboutContainerInfoContentShort = document.querySelector(".aboutContainerInfoContent--short");
let aboutContainerInfoContentLong = document.querySelector(".aboutContainerInfoContent--long");
let aboutContainerInfoSubtitles__spanSecond = document.querySelector(".aboutContainerInfoSubtitles__span--seconds");
let aboutContainerInfoSubtitles__spanMinutes = document.querySelector(".aboutContainerInfoSubtitles__span--minutes");

aboutContainerInfoSubtitles__spanMinutes.addEventListener("click" , () => {
    aboutContainerInfoContentLong.classList.add("active");
    aboutContainerInfoContentShort.classList.add("active");
    aboutContainerInfoSubtitles__spanSecond.classList.add("active");
    aboutContainerInfoSubtitles__spanMinutes.classList.add("active");
});

aboutContainerInfoSubtitles__spanSecond.addEventListener("click" , () => {
    aboutContainerInfoContentLong.classList.remove("active");
    aboutContainerInfoContentShort.classList.remove("active");
    aboutContainerInfoSubtitles__spanSecond.classList.remove("active");
    aboutContainerInfoSubtitles__spanMinutes.classList.remove("active");
});



// Work Hover Projects
let projectImgTextFirst = document.querySelector(".projectImgText--first");
let projectImgTextSecond = document.querySelector(".projectImgText--second");
let projectImgTextThird = document.querySelector(".projectImgText--third");
let projectImg__imgFirst = document.querySelector(".projectImg__img--first");
let projectImg__imgSecond = document.querySelector(".projectImg__img--second");
let projectImg__imgThird = document.querySelector(".projectImg__img--third");

let projectContentLinkFirst = document.querySelector(".projectContentLink--first");
let projectContentLinkSecond = document.querySelector(".projectContentLink--second");
let projectContentLinkThird = document.querySelector(".projectContentLink--third");


projectContentLinkFirst.addEventListener("mouseover" , ()=> {
    projectImgTextFirst.classList.add("active");
    projectImg__imgFirst.classList.add("active");
});

projectContentLinkFirst.addEventListener("mouseout" , ()=> {
    projectImgTextFirst.classList.remove("active");
    projectImg__imgFirst.classList.remove("active");
});

projectContentLinkSecond.addEventListener("mouseover" , ()=> {
    projectImgTextSecond.classList.add("active");
    projectImg__imgSecond.classList.add("active");
});

projectContentLinkSecond.addEventListener("mouseout" , ()=> {
    projectImgTextSecond.classList.remove("active");
    projectImg__imgSecond.classList.remove("active");
});

projectContentLinkThird.addEventListener("mouseover" , ()=> {
    projectImgTextThird.classList.add("active");
    projectImg__imgThird.classList.add("active");
});

projectContentLinkThird.addEventListener("mouseout" , ()=> {
    projectImgTextThird.classList.remove("active");
    projectImg__imgThird.classList.remove("active");
});