$(function() {

  /* Show/Hide Header
  -------------------------------------------------------------- */

  $(window).on("scroll", function() {
    var header = $("header");
    var marqueeHeight = $("#marquee").height();

    if ($(window).scrollTop() >= marqueeHeight) {
      header.addClass("js-header-is-visible");
    } else {
      header.removeClass("js-header-is-visible");
    }
  });

  /* Page Scroll
  -------------------------------------------------------------- */

  $(".js-page-scroll").on("click", function(e) {
    e.preventDefault();
    var target = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 250);
  });

  /* Mobile Nav
  -------------------------------------------------------------- */

  function openNav() {
    $("#sidenav-open").addClass('js-sidenav-open-btn-is-hidden');
    $("#sidenav-close").addClass('js-sidenav-close-btn-is-visible');
    $("#sidenav").addClass('js-sidenav-is-visible');
    $("#sidenav-overlay").addClass('js-sidenav-overlay-is-visible');
  }

  function closeNav() {
    $("#sidenav-open").removeClass('js-sidenav-open-btn-is-hidden');
    $("#sidenav-close").removeClass('js-sidenav-close-btn-is-visible');
    $("#sidenav").removeClass('js-sidenav-is-visible');
    $("#sidenav-overlay").removeClass('js-sidenav-overlay-is-visible');
  }

  $(document).on('click', "#sidenav-open", openNav);
  $(document).on('click', "#sidenav-close, #mobile a, #sidenav-overlay", closeNav);

  /* Show Marquee Video
  -------------------------------------------------------------- */

  $("#marquee-video").addClass("js-marquee-video-is-visible");

  /* Match Height
  -------------------------------------------------------------- */

  $('.js-match-height').matchHeight();

  /* Modals
  -------------------------------------------------------------- */

  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
	});

}); // End doc ready
