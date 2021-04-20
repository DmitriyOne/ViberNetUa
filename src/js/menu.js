
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

  
$('.menu__list').on('click','a', function(event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});

$('.menu__link').click(function() {
  $('.menu, .header__burger, .header-btn, .logoWhite, .logoViol').removeClass('active');
  $('body').removeClass('fixedPosition');
});








