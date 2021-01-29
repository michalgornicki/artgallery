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
  if (document.body.scrollTop > 850 && document.body.scrollTop < 2699 || document.documentElement.scrollTop > 850 && document.documentElement.scrollTop < 2699){
  document.getElementsByClassName("content")[0].style.backgroundColor="rgb(55, 55, 55)";
  document.getElementsByClassName("content")[0].style.transitionDuration="4s";
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
}

else if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700){
document.getElementsByClassName("content")[0].style.backgroundColor="rgb(77, 0, 124)";
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
}

  else {
    document.getElementsByClassName("content")[0].style.backgroundColor="rgb(138, 0, 222)";
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
  }
}


window.onscroll = function() {
  changeBackground()
}

$('.single-item-slider').slick({
   arrows: false,
   autoplay: false,
   autoplaySpeed: 7000,
   speed: 800,
   pauseOnFocus: false,
   dots: false,
   fade: false,
   draggable: false,
});

$('.single-item-fade').slick({
   arrows: true,
   autoplay: true,
   autoplaySpeed: 3000,
   speed: 2000,
   pauseOnFocus: false,
   dots: true,
   slidesToShow: 1,
   fade: true,
});

$('.multi-item-slider').slick({
   arrows: true,
   autoplay: true,
   autoplaySpeed: 50,
   speed: 1000,
   pauseOnFocus: false,
   dots: true,
   slidesToShow: 1,
   fade: true,
});


$('.multi-item-slider-alter').slick({
   arrows: true,
   autoplay: true,
   autoplaySpeed: 0,
   speed: 1000,
   pauseOnFocus: false,
   dots: true,
   slidesToShow: 1,
   fade: true,
});
