$(document).ready(function () {
  var sliderfit = $('.sliderfit'),
      scrolltop = $('#scrolltop');

  showScrolltop();
  adjustSlider();

  $(document).on('scroll', function () {
    setTimeout(showScrolltop, 300);
  });

  $(window).on('resize', function () {
    setTimeout(adjustSlider, 100);
  });

  function showScrolltop () {
    var scrollPosition = $(document).scrollTop();
    if (scrollPosition > 50) {
      scrolltop.fadeIn(300);
    }
    else {
      scrolltop.fadeOut(300);
    }
  }

  function adjustSlider () {
    var windowWidth = $(window).width() + 17,
        ratio = 3.047,
        windowHeight = Math.floor(windowWidth/ratio);
    sliderfit.height(windowHeight);
  }

});
