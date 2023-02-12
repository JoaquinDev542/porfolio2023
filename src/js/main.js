// Scroll Reveal
const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    delay: 100
    });
    
    sr.reveal('.header', { origin: 'top' });
    sr.reveal('.heroMoveText', { origin: 'top', delay: 200 });
    sr.reveal('.heroContainer');
    sr.reveal('.subtitle', { origin: 'left' });
    sr.reveal('.aboutBox');
    sr.reveal('.skillContainers');
    sr.reveal('.project--first', { origin: 'left', delay: 200 });
    sr.reveal('.project--second', { origin: 'right', delay: 300 });
    sr.reveal('.project--third', { origin: 'left', delay: 400 });
    sr.reveal('.contactContainer');

// Menu Section
let hamburger = document.querySelector(".hamburger");
let menuOpen = document.querySelector(".menuOpen");
let menuLinks = document.querySelectorAll(".menuOpenList__link");
let heroMoveText = document.querySelector(".heroMoveText");
let main = document.querySelector(".main");
let footer = document.querySelector(".footer");

hamburger.addEventListener("click", toggleActiveClass);
menuLinks.forEach(link => link.addEventListener("click", toggleActiveClass));

function toggleActiveClass() {
  menuOpen.classList.toggle("active");
  heroMoveText.classList.toggle("active");
  main.classList.toggle("active");
  footer.classList.toggle("active");
}

// Header Bg Section
let header = document.querySelector(".header");

const functionChangeBgHeader = () => {
  header.classList.toggle("addColor", document.documentElement.scrollTop >= 15);
};
window.addEventListener("scroll", functionChangeBgHeader);

// Menu Links when active state
let headerLink = document.querySelector(".headerLink");
let headerLinkFooter = document.querySelector(".headerLink--footer");
let navLinks = document.querySelectorAll('.navList__link');
let ArrowLink = document.querySelector(".ArrowLink");

headerLink.addEventListener('click', removeActiveClass);
headerLinkFooter.addEventListener('click', removeActiveClass);
ArrowLink.addEventListener('click', removeActiveClass);

navLinks.forEach(link => link.addEventListener('click', addActiveClass));

function removeActiveClass() {
  navLinks.forEach(link => link.classList.remove("active"));
}

function addActiveClass() {
  removeActiveClass();
  this.classList.add("active");
}

// About Section Changes Time
let aboutContainerInfoContentShort = document.querySelector(".aboutContainerInfoContent--short");
let aboutContainerInfoContentLong = document.querySelector(".aboutContainerInfoContent--long");
let aboutContainerInfoSubtitles__spanSecond = document.querySelector(".aboutContainerInfoSubtitles__span--seconds");
let aboutContainerInfoSubtitles__spanMinutes = document.querySelector(".aboutContainerInfoSubtitles__span--minutes");

function toggleAboutInfo() {
  aboutContainerInfoContentLong.classList.toggle("active");
  aboutContainerInfoContentShort.classList.toggle("active");
  aboutContainerInfoSubtitles__spanSecond.classList.toggle("active");
  aboutContainerInfoSubtitles__spanMinutes.classList.toggle("active");
}

aboutContainerInfoSubtitles__spanMinutes.addEventListener("click", toggleAboutInfo);
aboutContainerInfoSubtitles__spanSecond.addEventListener("click", toggleAboutInfo);

// Work Hover Projects
  const projectImgTexts = [
    document.querySelector(".projectImgText--first"),
    document.querySelector(".projectImgText--second"),
    document.querySelector(".projectImgText--third"),
  ];
  
  const projectImgImgs = [
    document.querySelector(".projectImg__img--first"),
    document.querySelector(".projectImg__img--second"),
    document.querySelector(".projectImg__img--third"),
  ];
  
  const projectContentLinks = [
    document.querySelector(".projectContentLink--first"),
    document.querySelector(".projectContentLink--second"),
    document.querySelector(".projectContentLink--third"),
  ];
  
  const toggleActive = (index, isAdd) => {
    projectImgTexts[index].classList[isAdd ? "add" : "remove"]("active");
    projectImgImgs[index].classList[isAdd ? "add" : "remove"]("active");
  };
  
  for (let i = 0; i < projectContentLinks.length; i++) {
    const projectContentLink = projectContentLinks[i];
  
    projectContentLink.addEventListener("mouseover", () => {
      toggleActive(i, true);
    });
  
    projectContentLink.addEventListener("mouseout", () => {
      toggleActive(i, false);
    });
  }

// DarkMode
let darkModeContainer = document.querySelector(".darkModeContainer");
let menuOpenDarkMode__link = document.querySelector(".menuOpenDarkMode__link");
let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

const toggleColorScheme = () => {
    document.documentElement.classList.toggle(colorSchemeQueryList.matches ? "whiteMode" : "darkMode");
};

darkModeContainer.addEventListener("click", toggleColorScheme);
menuOpenDarkMode__link.addEventListener("click", toggleColorScheme);

colorSchemeQueryList.addEventListener('change', toggleColorScheme);
