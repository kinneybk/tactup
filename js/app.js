// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: false,
  dots: true,
  arrows: false,
  speed: 500
});

window.sr = new scrollReveal({
  mobile: true
});
