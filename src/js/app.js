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



$(window).scroll(function(e) {
  if ($(window).scrollTop() >= 200) {
    $('.wrap__svg-map').fadeIn(200);
  } else {
    $('.wrap__svg-map').fadeOut(200);
  }
});

