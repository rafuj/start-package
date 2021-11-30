(function ($) {
  "user strict";
  // Preloader Js
  $(window).on("load", function () {
    $(".loader").fadeOut(1000);
    var img = $(".bg_img");
    img.css("background-image", function () {
      var bg = "url(" + $(this).data("img") + ")";
      return bg;
    });
  });
  $(document).ready(function () {
    $(".faq-title").on("click", function (e) {
      var element = $(this).parent(".faq-item");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find(".faq-content").removeClass("open");
        element.find(".faq-content").slideUp(200, "swing");
      } else {
        element.addClass("open");
        element.children(".faq-content").slideDown(200, "swing");
        element
          .siblings(".faq-item")
          .children(".faq-content")
          .slideUp(200, "swing");
        element.siblings(".faq-item").removeClass("open");
        element.siblings(".faq-item").find(".faq-title").removeClass("open");
        element
          .siblings(".faq-item")
          .find(".faq-content")
          .slideUp(200, "swing");
      }
    });
    // wow js active
    new WOW().init();
    //Menu Dropdown Icon Adding
    $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $("ul")
      .parent("li")
      .hover(function () {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
          var newpos = -$(menu).width();
          menu.css({
            left: newpos,
          });
        }
      });
    $(".menu li a").on("click", function (e) {
      var element = $(this).parent("li");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
        element.find("ul").slideUp(300, "swing");
      } else {
        element.addClass("open");
        element.children("ul").slideDown(300, "swing");
        element.siblings("li").children("ul").slideUp(300, "swing");
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
        element.siblings("li").find("ul").slideUp(300, "swing");
      }
    });
    // Scroll To Top
    var scrollTop = $(".toTopBtn");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
      } else {
        scrollTop.addClass("active");
      }
    });
    //Click event to scroll to top
    $(".toTopBtn").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });
    //Header Bar
    $(".header-bar").on("click", function () {
      $(this).toggleClass("active");
      $(".overlay").toggleClass("active");
      $(".menu-area").toggleClass("active");
    });
    //Header Bar
    $(".overlay").on("click", function () {
      $(this).removeClass("active");
      $(".header-bar").removeClass("active");
      $(".menu-area").removeClass("active");
    });
    $(".overlay, .menu-close").on("click", function () {
      $(this).removeClass("active");
      $(".header-bar").removeClass("active");
      $(".menu-area").removeClass("active");
    });
    //Header
    var fixed_top = $("header");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 1) {
        fixed_top.addClass("active");
      } else {
        fixed_top.removeClass("active");
      }
    });
    $(".owl-prev").html('<i class="las la-arrow-left">');
    $(".owl-next").html('<i class="las la-arrow-right">');
  });
})(jQuery);
