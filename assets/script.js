$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 100) {
      $(".downArrow").addClass("active");
    } else {
      $(".downArrow").removeClass("active");
    }
    if (this.scrollY > 1000) {
      $(".scroll-up-button").addClass("show");
    } else {
      $(".scroll-up-button").removeClass("show");
    }
  });

  $(".scroll-up-button").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  $(".menu-button").click(function () {
    $(".navbar .menu").toggleClass("active");
  });

  /*
  $("#python-card").hover(function () {
    $("#python-img").attr("src", "/assets/images/user-dark.png");
  }, function(){
    $("#python-img").attr("src", "/assets/images/python-logo.png");
  });

  */

  var typed = new Typed(".typing", {
    strings: [
      "Student",
      "Programming enthusiast ¯\\_(ツ)_/¯",
      "Human",
      "Solver",
      "...eh...so many ah!!!",
    ],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
  });

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 6000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  $(".carousel1").owlCarousel({
    margin: 20,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeOut: 0,
    slideTransition: 'linear',
    autoplaySpeed: 6500,
    smartSpeed: 6500,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      300: {
        items: 1.2,
        nav: false,
      },
      380: {
        items: 1.5,
        nav: false
      },
      600: {
        items: 2.5,
        nav: false,
      },
      1000: {
        items: 3.5,
        nav: false,
      },
    },
  });

  $(".carousel2").owlCarousel({
    margin: 20,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeOut: 0,
    slideTransition: 'linear',
    autoplaySpeed: 5000,
    smartSpeed: 5000,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      300: {
        items: 1.2,
        nav: false,
      },
      380: {
        items: 1.5,
        nav: false
      },
      600: {
        items: 2.5,
        nav: false,
      },
      1000: {
        items: 3.5,
        nav: false,
      },
    },
  });
});
