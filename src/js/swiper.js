
import Swiper from 'swiper/bundle';


new Swiper('.swiper-review', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  speed: 700,
  pagination: {
    el: '.pagination__review',
    type: 'fraction',
    formatFractionCurrent: function(number) {
      if (number < 10) {
        number = '0' + number;
      }
      return number;
    },
  },
  navigation: {
    nextEl: '.button-next__review, .arrows__imgR',
    prevEl: '.button-prev__review, .arrows__imgL',
  },
});


