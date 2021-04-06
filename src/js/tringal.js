// добавление класса треугольнику в header

$('.header__select-phone').mouseover(function() {
  $('.jsTringal').toggleClass('active');
});

$('.header__select-phone').mouseout(function() {
  $('.jsTringal').removeClass('active');
});





$('.header__select-language').mouseover(function() {
  $('.jsTringal-language').toggleClass('active');
});

$('.header__select-language').mouseout(function() {
  $('.jsTringal-language').removeClass('active');
});
