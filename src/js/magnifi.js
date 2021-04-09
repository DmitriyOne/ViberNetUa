import './magnific-popup';

$('.popup-gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
  },
});




$('.Demetra').mouseover(function() {
  $('.slide__border-Demetra').toggleClass('active');
  $('.slider__name-document-Demetra').toggleClass('active');
});

$('.Demetra').mouseout(function() {
  $('.slide__border-Demetra').removeClass('active');
  $('.slider__name-document-Demetra').removeClass('active');
});




