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


import AOS from 'aos';

AOS.init({
  delay: 120,
  once: true
});




// скрол карты
$(window).scroll(function(e) {
  if ($(window).scrollTop() >= 200) {
    $('.wrap__svg-map').fadeIn(200);
  } else {
    $('.wrap__svg-map').fadeOut(200);
  }
});



// плавность при нажатии на меню


$('a.menu__link').click(function() {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top + 'px'
  }, {
    duration: 500,
    easing: 'swing'
  });
  return false;
});


$('.menu__link').click(function() {
  $('.menu, .header__burger, .header-btn, .logoWhite, .logoViol').removeClass('active');
  $('body').removeClass('fixedPosition');
});




// times
var dataStart = new Date(2021, 3, 15, 0, 0, 0).getTime();

var dataNew = new Date().getTime();

var res = Math.floor(Math.floor((dataNew - dataStart) / 3600000) / 2);

var numberTime = $('.advantage__content-title span').text();

$('.advantage__content-title span').text(+numberTime + res);

console.log(numberTime);
console.log(dataStart, dataNew, res, new Date(dataStart));
console.log(res);
console.log(dataStart);





