
// menu
$('.header-btn').on('click', function() {
  $('.menu, .header__burger, .header-btn').toggleClass('active');

  if ($('.menu').hasClass('active')) {
    $('.logoWhite').toggleClass('active');
    $('.logoViol').toggleClass('active');
  } else {
    $('.logoWhite').removeClass('active');
    $('.logoViol').removeClass('active');
  }

  if ($('.menu').hasClass('active')) {
    $('body').addClass('fixedPosition');
  }
  else {
    $('body').removeClass('fixedPosition');
  }



});









