


// селект телефонов
$('.select__phone, .tringal').on('click', function() {
  $('.header__select-phone').toggleClass('is-active');
});


$('.select__item-phone').on('click', function() {
  var html = $(this).html();
  $('.select__phone').html(html);
  $('.header__select-phone').removeClass('is-active');
  $('.select__item-phone').removeClass('remove');
  $(this).addClass('remove');
});








// селект языков
$('.select__language-top, .jsTringal-language').on('click', function() {
  $('.header__select-language').toggleClass('is-active');
});


$('.select__item-language').on('click', function() {
  var html = $(this).html();
  $('.select__language-top').html(html);
  $('.header__select-language, .traingal-language').removeClass('is-active');
  $('.select__item-language').removeClass('remove');
  $(this).addClass('remove');
});
