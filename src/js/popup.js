$('.zayavka').click(function(event) {
  show();
});

$('.popup-first__bg').click(function(event) {
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

$('.zayavka-popup-first').click(function(event) {
  event.preventDefault();
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
