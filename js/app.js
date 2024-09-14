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
  if (window.screenY > 600)
    navBar.classList.add("sticky");
  else
    navBar.classList.remove("sticky");
});


////////////////////////////
window.addEventListener('load', function () {
  // Get the overlay element
  var overlay = document.querySelector('.loader-wrapper');

  // Set a maximum fade-out duration of 5 seconds
  var fadeDuration = 5000; // 5 seconds in milliseconds
  var fadeStep = 0.1;      // Step to reduce opacity
  var fadeInterval = fadeDuration / (1 / fadeStep); // Calculate time between opacity changes

  // Fade out the overlay
  overlay.style.opacity = 1;
  (function fade() {
    if ((overlay.style.opacity -= fadeStep) <= 0) {
      overlay.style.display = 'none';
    } else {
      setTimeout(fade, fadeInterval); // Fade with a calculated interval
    }
  })();
});

/////////////////////////

// document.addEventListener('DOMContentLoaded', () => { 
//   // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
//   const player1 = new Plyr('#player1');
//   window.player1 = player1;
//   const player2 = new Plyr('#player2');
//   window.player2 = player2;
//   const player3 = new Plyr('#player3');
//   window.player3 = player3;
// });

// var playerBtn1 = document.querySelector('.video1');
// var playerBtn2 = document.querySelector('.video2');
// var playerBtn3 = document.querySelector('.video3');
// playerBtn1.addEventListener('click', function(){
//   document.querySelector('.video1 .plyr__controls').style.display = 'block';
// });
// playerBtn2.addEventListener('click', function(){
//   document.querySelector('.video2 .plyr__controls').style.display = 'block';
// });

// playerBtn3.addEventListener('click', function(){
//   document.querySelector('.video3 .plyr__controls').style.display = 'block';
// });

/////////////////////////////////////////
document.getElementById("thumbnail").addEventListener("click", function() {
  var thumbnail = document.getElementById("thumbnail");
  var video = document.getElementById("home__video");
  var playButton = document.querySelector(".playButton");
  
  thumbnail.style.opacity = "0";
  playButton.style.opacity = "0";
  
  setTimeout(function() {
      thumbnail.style.display = "none";
      playButton.style.display = "none";
      video.style.display = "block";
      video.style.opacity = "1";
      
      // Play the video
      var iframe = video.querySelector("iframe");
      iframe.src += "&autoplay=1";
  }, 500); // Adjust the delay as needed
});

document.querySelector(".lecture .thumbnail").addEventListener("click", function() {
  var thumbnail = document.querySelector(".lecture .thumbnail");
  var video = document.querySelector(".lecture .lecture__video");
  var playButton = document.querySelector(".lecture .playButton");
  
  thumbnail.style.opacity = "0";
  playButton.style.opacity = "0";
  
  setTimeout(function() {
      thumbnail.style.display = "none";
      playButton.style.display = "none";
      video.style.display = "block";
      video.style.opacity = "1";
      
      // Play the video
      var iframe = video.querySelector(".lecture iframe");
      iframe.src += "&autoplay=1";
  }, 500); // Adjust the delay as needed
});

document.querySelector(".review .thumbnail").addEventListener("click", function() {
  var thumbnail = document.querySelector(".review .thumbnail");
  var video = document.querySelector(".review .review__video");
  var playButton = document.querySelector(".review .playButton");
  
  thumbnail.style.opacity = "0";
  playButton.style.opacity = "0";
  
  setTimeout(function() {
      thumbnail.style.display = "none";
      playButton.style.display = "none";
      video.style.display = "block";
      video.style.opacity = "1";
      
      // Play the video
      var iframe = video.querySelector(".review  iframe");
      iframe.src += "&autoplay=1";
  }, 500); // Adjust the delay as needed
});


