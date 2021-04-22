import './select';
import './tringal';
import './menu';
import './popup';
import './button';
import './error';

import './swiper';
import './fancybox';
import './number';
import './range';
import './lazy-line';


import AOS from 'aos';

AOS.init({
  mirror: true,
  delay: 300,
  once: true
});




// скрол карты
$(window).scroll(function(e) {
  if ($(window).scrollTop() >= 200) {
    $('.wrap__svg-map svg').fadeIn(200);

  } else {
    $('.wrap__svg-map svg').fadeOut(200);
  }
});


$('form a').toggleClass('button-none');
$('form a').addClass('animate__heartBeat');







// times
// получил вчерашнюю дату и переобразовую в милисекунды
var dataStart = new Date(2021, 3, 15, 0, 0, 0).getTime();

// получил сегодняшнюю дату и переобразовую в милисекунды
var dataNew = new Date().getTime();

// отнял от сегодняшней вчерашнюю и из милисекудн переобразовую в часы
var res = Math.floor(Math.floor((dataNew - dataStart) / 3600000) / 2);
// var res = Math.floor(Math.floor((dataNew - dataStart) / 60) / 2);

// перевожу в переменую то число, что у меня в коде
var numberTime = $('.advantage__content-title span').text();

// отнимаю свое число, что было написано изначало в коде от того что получил в js
$('.advantage__content-title span').text(+numberTime + res);







