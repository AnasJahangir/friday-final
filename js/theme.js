// js Document

// Created on   : 15/09/2023.
// Theme Name   : Babun - Business & Finance HTML5 Template
// Version      : 1.0.
// Developed by : (me@heloshape.com) / (www.me.heloshape.com)

(function ($) {
  "use strict";

  //-------------- Click event to scroll to top
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  });
  $(".scroll-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 });
    return false;
  });

  // --------------------- Add .active class to current navigation based on URL
  var pgurl = window.location.href.substr(
    window.location.href.lastIndexOf("/") + 1
  );
  $(".navbar-nav > li  a").each(function () {
    if ($(this).attr("href") == pgurl || $(this).attr("href") == "")
      $(this).addClass("active");
    // $(this).parent("li").addClass("active");
  });

  // ----------------------------- Lazy Load
  if ($(".lazy-img").length) {
    $(".lazy-img").Lazy({
      effect: "fadeIn",
      threshold: 300,
    });
  }

  // ----------------------------- Counter Function
  var timer = $(".counter");
  if (timer.length) {
    $(".counter").counterUp({
      delay: 10,
      time: 1200,
    });
  }

  // ------------------------ Navigation Scroll
  // $(window).on('scroll', function (){
  //   var sticky = $('.sticky-menu'),
  //   scroll = $(window).scrollTop();
  //   if (scroll >= 180) sticky.addClass('fixed');
  //   else sticky.removeClass('fixed');

  // });

  // -------------------- Remove Placeholder When Focus Or Click
  $("input,textarea").each(function () {
    $(this).data("holder", $(this).attr("placeholder"));
    $(this).on("focusin", function () {
      $(this).attr("placeholder", "");
    });
    $(this).on("focusout", function () {
      $(this).attr("placeholder", $(this).data("holder"));
    });
  });

  // ------------------------ Product Quantity Selector
  if ($(".product-value").length) {
    $(".value-increase").on("click", function () {
      var $qty = $(this).closest("ul").find(".product-value");
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal)) {
        $qty.val(currentVal + 1);
      }
    });
    $(".value-decrease").on("click", function () {
      var $qty = $(this).closest("ul").find(".product-value");
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal) && currentVal > 1) {
        $qty.val(currentVal - 1);
      }
    });
  }

  // ------------------------ Credit Card Option
  if ($("#credit-card").length) {
    $(".payment-radio-button").on("click", function () {
      if ($("#credit-card").is(":checked")) {
        $(".credit-card-form").show(300);
      } else {
        $(".credit-card-form").hide(300);
      }
    });
  }

  if ($(".popular-items-slick").length) {
    var popularSwiper = new Swiper(".popular-items-slick", {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      autoplay: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
      },
    });
  }

  if ($(".gallery-swiper").length) {
    var popularSwiper2 = new Swiper(".gallery-swiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      autoplay: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 4,
        },
        576: {
          slidesPerView: 2,
        },
      },
    });
  }

  if ($(".project-slider-one").length) {
    var popularSwiper3 = new Swiper(".project-slider-one", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: false,
      centeredSlides: true,
      navigation: {
        nextEl: ".next_b",
        prevEl: ".prev_b",
      },
      // pagination: {
      //   el: ".swiper-pagination",
      // },
      breakpoints: {
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        576: {
          slidesPerView: 1,
        },
      },
    });
  }


  if ($(".partner-slider-one").length) {
    var popularSwiper3 = new Swiper(".partner-slider-one", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: false,
      centeredSlides: true,
      navigation: {
        nextEl: ".next_b",
        prevEl: ".prev_b",
      },
      // pagination: {
      //   el: ".swiper-pagination",
      // },
      breakpoints: {
        992: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 6,
        },
        576: {
          slidesPerView: 3,
        },
      },
    });
  }

  var swiper = new Swiper(".hero-slider-one", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop:true
  });

  
  
  var swiper = new Swiper(".offer-slick", {
      slidesPerView: 1,
//        spaceBetween: 30,
    loop:true,
    autoplay: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });





  // --------------------------------- Contact Form
  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  if ($("#contact-form").length) {
    $("#contact-form").validator();
    // when the form is submitted
    $("#contact-form").on("submit", function (e) {
      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
        var url = "inc/contact.php";

        // POST values in the background the the script URL
        $.ajax({
          type: "POST",
          url: url,
          data: $(this).serialize(),
          success: function (data) {
            // data = JSON object that contact.php returns

            // we recieve the type of the message: success x danger and apply it to the
            var messageAlert = "alert-" + data.type;
            var messageText = data.message;

            // let's compose Bootstrap alert box HTML
            var alertBox =
              '<div class="alert ' +
              messageAlert +
              ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
              messageText +
              "</div>";

            // If we have messageAlert and messageText
            if (messageAlert && messageText) {
              // inject the alert to .messages div in our form
              $("#contact-form").find(".messages").html(alertBox);
              // empty the form
              $("#contact-form")[0].reset();
            }
          },
        });
        return false;
      }
    });
  }

  // ------------------------ Password Toggler
  if ($(".user-data-form").length) {
    $(".passVicon").on("click", function () {
      $(".passVicon").toggleClass("eye-slash");
      var input = $(".pass_log_id");
      if (input.attr("type") === "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }

  $(window).on("load", function () {
    // makes sure the whole site is loaded

    // -------------------- Site Preloader
    $("#ctn-preloader").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
    $("body").delay(350).css({ overflow: "visible" });

    // ------------------------------- Scroll Animation
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();

    // ------------------------------------- Fancybox
    var fancy = $(".fancybox");
    if (fancy.length) {
      fancy.fancybox({
        arrows: true,
        buttons: [
          "zoom",
          //"share",
          "slideShow",
          //"fullScreen",
          //"download",
          "thumbs",
          "close",
        ],
        animationEffect: "zoom-in-out",
        transitionEffect: "zoom-in-out",
      });
    }

    // ----------------------------- isotop gallery
    if ($("#isotop-gallery-wrapper").length) {
      var $grid = $("#isotop-gallery-wrapper").isotope({
        // options
        itemSelector: ".isotop-item",
        percentPosition: true,
        masonry: {
          // use element for option
          columnWidth: ".grid-sizer",
        },
      });

      // filter items on button click
      $(".isotop-menu-wrapper").on("click", "li", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });

      // change is-checked class on buttons
      $(".isotop-menu-wrapper").each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on("click", "li", function () {
          $buttonGroup.find(".is-checked").removeClass("is-checked");
          $(this).addClass("is-checked");
        });
      });
    }
  }); //End On Load Function
})(jQuery);

function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(".closeSmBtn").on("click", function () {
  $(this).parent().parent().removeClass("show");
  $("button.navbar-toggler").attr("aria-expanded", false);
});
