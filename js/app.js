var toggler = document.querySelector('.toggler');
var navList = document.querySelector('.nav__list');
toggler.addEventListener('click', function () {
  toggler.classList.toggle('active');
  navList.classList.toggle('toggle-transform');
});

var swiper = new Swiper(".slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  speed: 500,
  loop: true,
  autoplay: {
    delay: 1500, // Set the delay to 1000 milliseconds (1 second)
    disableOnInteraction: false, // Enable to continue autoplay even after user interactions
  },
  pagination: {
    el: ".slider__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider__button-next",
    prevEl: ".slider__button-prev",
  },
});


var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
    loop: true,
    speed: 500,
  },
  autoplay: {
    delay: 1000, // Set the delay to 1000 milliseconds (1 second)
    disableOnInteraction: false, // Enable to continue autoplay even after user interactions
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
const navBar = document.querySelector('.nav');
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 600)
    navBar.classList.add("sticky");
  else
    navBar.classList.remove("sticky");
});


////////////////////////////
window.addEventListener('load', function () {
  // Get the overlay element
  var overlay = document.querySelector('.loader-wrapper');

  // Fade out the overlay
  overlay.style.opacity = 1;
  (function fade() {
    if ((overlay.style.opacity -= 0.1) < 0) {
      overlay.style.display = 'none';
    } else {
      requestAnimationFrame(fade);
    }
  })();
});

/////////////////////////

document.addEventListener('DOMContentLoaded', () => { 
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  const player1 = new Plyr('#player1');
  window.player1 = player1;
  const player2 = new Plyr('#player2');
  window.player2 = player2;
  const player3 = new Plyr('#player3');
  window.player3 = player3;
});

////////////////////////////
// let map;

// async function initMap() {
//   // The location of Uluru
//   const position = { lat: -25.344, lng: 131.031 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }
// initMap();