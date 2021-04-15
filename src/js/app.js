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
var $page = $('html, body');
$('a[href*="#"]').click(function() {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top + 300
  }, 2000);
  return false;
});







$('.menu__link').click(function() {
  $('.menu, .header__burger, .header-btn, .logoWhite, .logoViol').removeClass('active');
  $('body').removeClass('fixedPosition');
});
