
import Swiper from 'swiper/bundle';


new Swiper('.swiper-review', {
  allowTouchMove: false,
  slidesPerView: 1,
  spaceBetween: 0,
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
  breakpoints: {
    900: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});





// // swiper 2 block

new Swiper('.swiper-advantage', {
  slidesPerView: 1,
  slidesPerColumn: 4,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination__advantage',
    clickable: true,
  },
  breakpoints: {
    1050: {
      slidesPerView: 4,
      slidesPerColumn: 2,
    },
    900: {
      slidesPerView: 3,
      slidesPerColumn: 2,
    },
    670: {
      slidesPerView: 2,
      slidesPerColumn: 2,
    },

  }

});
