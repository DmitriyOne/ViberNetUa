


// селект телефонов
$('.select__phone').on('click', function() {
  $('.header__select-phone, .tringal').toggleClass('is-active');
});


$('.select__item-phone').on('click', function() {
  var html = $(this).html();
  $('.select__phone').html(html);
  $('.header__select-phone, .tringal').removeClass('is-active');
  $('.select__item-phone').removeClass('remove');
  $(this).addClass('remove');
});







// селект языков
$('.select__language-top').on('click', function() {
  $('.header__select-language, .traingal-language').toggleClass('is-active');
});


$('.select__item-language').on('click', function() {
  var html = $(this).html();
  $('.select__language-top').html(html);
  $('.header__select-language, .traingal-language').removeClass('is-active');
  $('.select__item-language').removeClass('remove');
  $(this).addClass('remove');
});
