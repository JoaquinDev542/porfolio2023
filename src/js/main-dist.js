setTimeout((function(){document.querySelector(".spinnerContainer").style.display="none",document.getElementById("content").style.display="block";const e=ScrollReveal({distance:"50px",duration:1e3,delay:100});e.reveal(".header",{origin:"top"}),e.reveal(".heroMoveText",{origin:"top",delay:200}),e.reveal(".heroContainer"),e.reveal(".subtitle",{origin:"left"}),e.reveal(".aboutBox"),e.reveal(".skillContainers"),e.reveal(".project--first",{origin:"left",delay:200}),e.reveal(".project--second",{origin:"right",delay:300}),e.reveal(".project--third",{origin:"left",delay:400}),e.reveal(".contactContainer")}),1e3);let hamburger=document.querySelector(".hamburger"),menuOpen=document.querySelector(".menuOpen"),menuLinks=document.querySelectorAll(".menuOpenList__link"),heroMoveText=document.querySelector(".heroMoveText"),main=document.querySelector(".main"),footer=document.querySelector(".footer");function toggleActiveClass(){menuOpen.classList.toggle("active"),heroMoveText.classList.toggle("active"),main.classList.toggle("active"),footer.classList.toggle("active")}hamburger.addEventListener("click",toggleActiveClass),menuLinks.forEach((e=>e.addEventListener("click",toggleActiveClass)));let header=document.querySelector(".header");const functionChangeBgHeader=()=>{header.classList.toggle("addColor",document.documentElement.scrollTop>=15)};window.addEventListener("scroll",functionChangeBgHeader);let headerLink=document.querySelector(".headerLink"),headerLinkFooter=document.querySelector(".headerLink--footer"),navLinks=document.querySelectorAll(".navList__link"),ArrowLink=document.querySelector(".ArrowLink");function removeActiveClass(){navLinks.forEach((e=>e.classList.remove("active")))}function addActiveClass(){removeActiveClass(),this.classList.add("active")}headerLink.addEventListener("click",removeActiveClass),headerLinkFooter.addEventListener("click",removeActiveClass),ArrowLink.addEventListener("click",removeActiveClass),navLinks.forEach((e=>e.addEventListener("click",addActiveClass)));let aboutContainerInfoContentShort=document.querySelector(".aboutContainerInfoContent--short"),aboutContainerInfoContentLong=document.querySelector(".aboutContainerInfoContent--long"),aboutContainerInfoSubtitles__spanSecond=document.querySelector(".aboutContainerInfoSubtitles__span--seconds"),aboutContainerInfoSubtitles__spanMinutes=document.querySelector(".aboutContainerInfoSubtitles__span--minutes");function toggleAboutInfo(){aboutContainerInfoContentLong.classList.toggle("active"),aboutContainerInfoContentShort.classList.toggle("active"),aboutContainerInfoSubtitles__spanSecond.classList.toggle("active"),aboutContainerInfoSubtitles__spanMinutes.classList.toggle("active")}aboutContainerInfoSubtitles__spanMinutes.addEventListener("click",toggleAboutInfo),aboutContainerInfoSubtitles__spanSecond.addEventListener("click",toggleAboutInfo);const projectImgTexts=[document.querySelector(".projectImgText--first"),document.querySelector(".projectImgText--second"),document.querySelector(".projectImgText--third")],projectImgImgs=[document.querySelector(".projectImg__img--first"),document.querySelector(".projectImg__img--second"),document.querySelector(".projectImg__img--third")],projectContentLinks=[document.querySelector(".projectContentLink--first"),document.querySelector(".projectContentLink--second"),document.querySelector(".projectContentLink--third")],toggleActive=(e,t)=>{projectImgTexts[e].classList[t?"add":"remove"]("active"),projectImgImgs[e].classList[t?"add":"remove"]("active")};for(let e=0;e<projectContentLinks.length;e++){const t=projectContentLinks[e];t.addEventListener("mouseover",(()=>{toggleActive(e,!0)})),t.addEventListener("mouseout",(()=>{toggleActive(e,!1)}))}let darkModeContainer=document.querySelector(".darkModeContainer"),menuOpenDarkMode__link=document.querySelector(".menuOpenDarkMode__link"),colorSchemeQueryList=window.matchMedia("(prefers-color-scheme: dark)");const toggleColorScheme=()=>{document.documentElement.classList.toggle(colorSchemeQueryList.matches?"whiteMode":"darkMode")};darkModeContainer.addEventListener("click",toggleColorScheme),menuOpenDarkMode__link.addEventListener("click",toggleColorScheme),colorSchemeQueryList.addEventListener("change",toggleColorScheme);