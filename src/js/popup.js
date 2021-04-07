// попапы
$('.hello-popup').click(function(event) {
  event.preventDefault();
  show();
});

$('.popup__bg').click(function(event) {
  event.preventDefault();
  hide();
});



// функции для попапов
// открытие
function show() {
  $('.popup').fadeIn(300);
  $('.popup__bg').fadeIn(300);
}
// закрытие
function hide() {
  $('.popup').fadeOut(300);
  $('.popup__bg').fadeOut(300);
}
