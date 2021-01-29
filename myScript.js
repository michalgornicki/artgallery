window.onload = function() {
  document.getElementsByClassName("content")[0].style.filter="brightness(1)";
  document.getElementById("menu").style.filter="opacity(1)";
  document.getElementsByClassName("gallery")[0].style.filter="opacity(1)";
  document.getElementsByClassName("gallery")[1].style.filter="opacity(1)";
  document.getElementById("menu").style.transitionDelay="0s";
  document.getElementsByClassName("gallery")[0].style.transitionDelay="0s";
  document.getElementsByClassName("gallery")[1].style.transitionDelay="0s";
  document.getElementById("home-nav").style.transitionDelay="0s";
  document.getElementById("gallery-nav").style.transitionDelay="0s";
  document.getElementById("contact-nav").style.transitionDelay="0s";
}

function openMenu() {
  document.getElementById("menu").style.left="0px";
  document.getElementById("menu").style.visibility="visible";
  document.getElementById("burger-button").style.filter="opacity(0.0)";
  document.getElementById("close-button").style.filter="opacity(1)";
}

function closeMenu() {
  document.getElementById("menu").style.left="-100%";
  document.getElementById("menu").style.visibility="hidden";
  document.getElementById("burger-button").style.filter="opacity(1)";
  document.getElementById("close-button").style.filter="opacity(0)";
}


function changeBackground() {
  if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850){
  document.getElementsByClassName("content")[0].style.backgroundColor="rgb(0, 0, 0)";
  document.getElementById("menu").style.height="82px";
  document.getElementById("menu").style.top="-150px";
  document.getElementById("menu").style.transitionDelay="1.2s";
  document.getElementsByClassName("gallery")[0].style.filter="opacity(0)";
  document.getElementsByClassName("gallery")[1].style.filter="opacity(0)";
  document.getElementsByClassName("gallery")[0].style.transitionDelay="0.7s";
  document.getElementsByClassName("gallery")[1].style.transitionDelay="0.7s";
  document.getElementById("home-nav").style.filter="opacity(0)";
  document.getElementById("gallery-nav").style.filter="opacity(0)";
  document.getElementById("contact-nav").style.filter="opacity(0)";
  document.getElementById("home-nav").style.transitionDelay="0.3s";
  document.getElementById("gallery-nav").style.transitionDelay="0.6s";
  document.getElementById("contact-nav").style.transitionDelay="0.9s";
  document.getElementById("container0").style.backgroundColor="black";
}
  else {
    document.getElementsByClassName("content")[0].style.backgroundColor="white";
    document.getElementById("menu").style.height="128px";
    document.getElementById("menu").style.top="0px";
    document.getElementById("menu").style.transitionDelay="0s";
    document.getElementsByClassName("gallery")[0].style.filter="opacity(1)";
    document.getElementsByClassName("gallery")[1].style.filter="opacity(1)";
    document.getElementsByClassName("gallery")[0].style.transitionDelay="1.2s";
    document.getElementsByClassName("gallery")[1].style.transitionDelay="1.2s";
    document.getElementById("home-nav").style.filter="opacity(1)";
    document.getElementById("gallery-nav").style.filter="opacity(1)";
    document.getElementById("contact-nav").style.filter="opacity(1)";
    document.getElementById("home-nav").style.transitionDelay="0.6s";
    document.getElementById("gallery-nav").style.transitionDelay="0.9s";
    document.getElementById("contact-nav").style.transitionDelay="1.2s";
    document.getElementById("container0").style.backgroundColor="white";
  }
}

window.onscroll = function() {
  changeBackground()
}

$('.single-item-fade').slick({
   arrows: false,
   autoplay: true,
   autoplaySpeed: 0,
   speed: 2500,
   pauseOnFocus: false,
   dots: false,
   fade: true,
   pauseOnHover: true,
});

$('.single-item-slider').slick({
   arrows: false,
   autoplay: true,
   autoplaySpeed: 5000,
   speed: 500,
   pauseOnFocus: false,
   dots: false,
   slidesToShow: 1,
   draggable: true,
   pauseOnHover: false,
});

$('.multi-item-slider').slick({
   arrows: false,
   autoplay: true,
   autoplaySpeed: 0,
   speed: 3000,
   pauseOnFocus: false,
   dots: false,
   slidesToShow: 1,
   fade: true,
   arrows: false,
   pauseOnHover: false,
});

var sliderAlter = $('.multi-item-slider-alter');

$('.multi-item-slider-alter').slick({
   arrows: false,
   autoplay: true,
   autoplaySpeed: 0,
   speed: 3000,
   pauseOnFocus: false,
   dots: false,
   slidesToShow: 1,
   fade: true,
   arrows: false,
   pauseOnHover: false,
}).slick("slickPause");

var initialDelay = 3000;

setTimeout(function() {
    sliderAlter.slick("slickPlay");
},initialDelay);
