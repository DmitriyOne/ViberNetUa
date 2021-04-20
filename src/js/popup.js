$('.zayavka').click(function(event) {
  event.preventDefault();
  show();
});

$('.popup-first__bg').click(function(event) {
  event.preventDefault();
  hide();
});



function show() {
  $('.popup-first').fadeIn(300);
  $('.popup-first__bg').fadeIn(300);
}
function hide() {
  $('.popup-first').fadeOut(300);
  $('.popup-first__bg').fadeOut(300);
}






$('.zayavka-popup-first, .zayavka1').click(function(event) {
  event.preventDefault();
  hide();
  show1();
});

$('.popup__bg').click(function(event) {
  event.preventDefault();
  hide1();
});



function show1() {
  $('.popup').fadeIn(300);
  $('.popup__bg').fadeIn(300);
}
function hide1() {
  $('.popup').fadeOut(300);
  $('.popup__bg').fadeOut(300);
}
