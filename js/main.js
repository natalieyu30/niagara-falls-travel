const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navOpen = document.getElementById('nav-toggle');

//============ MENU OPEN ============
if (navOpen){
  navOpen.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

//============ MENU HIDDEN ============
if (navOpen){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}

//============ REMOVE MENU MOBILE ============ 
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('show-menu'))
})

//============ CHANGE BACKGROUND HEADER ============
function scrollHeader() {
  const header = document.getElementById('header')
  // when the scroll is greater than 200 viewport height
  if (this.scrollY >= 200) {
    header.classList.add('scroll-height');
  } else {
    header.classList.remove('scroll-height');
  }
}

window.addEventListener('scroll', scrollHeader)

//============ SWIPER DISCOVER ============
var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  }
});

//============ VIDEO ============
const videoFileOne = document.getElementById('video-file-one');
const videoFileTwo = document.getElementById('video-file-two');
const videoButtonOne = document.getElementById('video-button-one');
const videoButtonTwo = document.getElementById('video-button-two');
const videoIconOne = document.getElementById('video-icon-one');
const videoIconTwo = document.getElementById('video-icon-two');

function playPauseOne() {
  if (videoFileOne.paused){
    // play video
    videoFileOne.play()
    // change the icon
    videoIconOne.classList.add("ri-pause-line");
    videoIconOne.classList.remove("ri-play-line");
  } else {
    // pause video
    videoFileOne.pause()
    // change the icon
    videoIconOne.classList.add("ri-play-line");
    videoIconOne.classList.remove("ri-pause-line");
  }
}

function playPauseTwo() {
  if (videoFileTwo.paused){
    // play video
    videoFileTwo.play()
    // change the icon
    videoIconTwo.classList.add("ri-pause-line");
    videoIconTwo.classList.remove("ri-play-line");
  } else {
    // pause video
    videoFileTwo.pause()
    // change the icon
    videoIconTwo.classList.add("ri-play-line");
    videoIconTwo.classList.remove("ri-pause-line");
  }
}

videoButtonOne.addEventListener('click', playPauseOne);
videoButtonTwo.addEventListener('click', playPauseTwo);

function finalVideoOne(){
  // video ends, icon changes
  videoIconOne.classList.remove('ri-pause-line'); 
  videoIconOne.classList.add('ri-play-line'); 
}

function finalVideoTwo(){
  // video ends, icon changes
  videoIconTwo.classList.remove('ri-pause-line'); 
  videoIconTwo.classList.add('ri-play-line'); 
}

videoFileOne.addEventListener('ended', finalVideoOne);
videoFileTwo.addEventListener('ended', finalVideoTwo);


//============ SHOW SCROLL UP ============
function scrollTop() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the tag with scrollup class
  if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)


//============ SCROLL SECTIONS ACTIVE LINK ============
const sections = document.querySelectorAll('section[id]')
console.log(sections)

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__menu a[href='#${sectionId}']`).classList.add('active-link')
    } else {
      document.querySelector(`.nav__menu a[href='#${sectionId}']`).classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive);

//============ DARK LIGHT THEME ============
const themeButton = document.getElementById('theme-button')

const selectedTheme = localStorage.getItem('selected-theme')
const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light'

if (selectedTheme) {
  document.body.classList[ selectedTheme === 'dark' ? 'add' : 'remove']('dark-theme')
}

themeButton.addEventListener('click', () => {
  if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme');
    themeButton.classList.remove('ri-sun-line');
    themeButton.classList.add('ri-moon-line');
  } else {
    document.body.classList.add('dark-theme');
    themeButton.classList.add('ri-sun-line');
    themeButton.classList.remove('ri-moon-line');
  }
  localStorage.setItem('selected-theme', getCurrentTheme())
})

//============ SCROLL REVEAL ANIMATION ============
const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  reset: true
})

sr.reveal(`.home__data, .home__social-link, .home__info, .discover__container, .experience__data, .experience__overlay, .place__card, .sponsor__content, .footer__data, .footer__rights`, {
  origin: 'top',
  interval: 100
})

sr.reveal(`.about__data, .video__description, .subscribe__description`, {
  origin: 'left',
})

sr.reveal(`.about__img-overlay, .video__content, .subscribe__form`, {
  origin: 'right',
  interval: 100
})

