























// с номером
$('.zayavka').click(function(event) {
  event.preventDefault();
  $('.wrap__popup-first h2').html($(this).html());
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







// сама заявка
$('.zayavka-popup-first').click(function(event) {
  event.preventDefault();
  $('.wrap__popup h2').html($('.wrap__popup-first').find('h2').html());
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



// без телефона
$('.zayavka1').click(function(event) {
  event.preventDefault();
  $('.wrap__popup h2').html($(this).html());
  show2();


});

$('.popup__bg').click(function(event) {
  event.preventDefault();
  hide2();
});



function show2() {
  $('.popup').fadeIn(300);
  $('.popup__bg').fadeIn(300);
}
function hide2() {
  $('.popup').fadeOut(300);
  $('.popup__bg').fadeOut(300);
}
