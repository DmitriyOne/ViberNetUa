
import Swiper from 'swiper/bundle';


new Swiper('.swiper-review', {
  slidesPerView: 1,
  spaceBetween: 0,
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
    nextEl: '.button-next__review',
    prevEl: '.button-prev__review',
  },
  breakpoints: {
    900: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 1
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
      slidesPerColumn: 4,
    },

  }

});



// // swiper calc


var galleryThumbs = new Swiper('.gallery-thumbs', {
  allowTouchMove: true,
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.button-next__gallery-thumbs',
    prevEl: '.button-prev__gallery-thumbs',
  },

  breakpoints: {
    900: {
      spaceBetween: 0,
      slidesPerView: 6,
      slidesPerColumn: 6,
    }
  },
});
var galleryTop = new Swiper('.gallery-top', {
  allowTouchMove: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  spaceBetween: 10,
  navigation: {
    nextEl: '.button-next__gallery-thumbs',
    prevEl: '.button-prev__gallery-thumbs',
  },
  thumbs: {
    swiper: galleryThumbs
  },

});



// скрины в калькуляторе
new Swiper('.gallert-top-swiper', {
  preloadImages: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
  },
  speed: 700,
});




$('.gallery-thumbs-slide1').on('click', function() {
  $('.gallery-top-slide-img2, .gallery-top-slide-img3, .gallery-top-slide-img4, .gallery-top-slide-img5, .gallery-top-slide-img6').removeClass('animate__fadeInRight');
  $('.gallery-top-slide-img').addClass('animate__fadeInRight');
});


$('.gallery-thumbs-slide2').on('click', function() {
  $('.gallery-top-slide-img1, .gallery-top-slide-img3, .gallery-top-slide-img4, .gallery-top-slide-img5, .gallery-top-slide-img6').removeClass('animate__fadeInRight');
  $('.gallery-top-slide-img2').addClass('animate__fadeInRight');
});

$('.gallery-thumbs-slide3').on('click', function() {
  $('.gallery-top-slide-img1, .gallery-top-slide-img2, .gallery-top-slide-img4, .gallery-top-slide-img5, .gallery-top-slide-img6').removeClass('animate__fadeInRight');
  $('.gallery-top-slide-img3').addClass('animate__fadeInRight');
});

$('.gallery-thumbs-slide4').on('click', function() {
  $('.gallery-top-slide-img1, .gallery-top-slide-img3, .gallery-top-slide-img2, .gallery-top-slide-img5, .gallery-top-slide-img6').removeClass('animate__fadeInRight');
  $('.gallery-top-slide-img4').addClass('animate__fadeInRight');
});

$('.gallery-thumbs-slide5').on('click', function() {
  $('.gallery-top-slide-img1, .gallery-top-slide-img3, .gallery-top-slide-img4, .gallery-top-slide-img2, .gallery-top-slide-img6').removeClass('animate__fadeInRight');
  $('.gallery-top-slide-img5').addClass('animate__fadeInRight');
});

$('.gallery-thumbs-slide6').on('click', function() {
  $('.gallery-top-slide-img1, .gallery-top-slide-img3, .gallery-top-slide-img4, .gallery-top-slide-img5, .gallery-top-slide-img2').removeClass('animate__fadeInRight');
  $('.gallery-top-slide-img6').addClass('animate__fadeInRight');
});







if($('.button-next__gallery-thumbs').hasClass('swiper-button-disabled')) {
  $('.button-prev__gallery-thumbs').addClass('animate__heartBeat');
}




