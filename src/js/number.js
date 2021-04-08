$(window).scroll(function() { // Когда страница прокручивается
  var scrTop = $(window).scrollTop();
  if (scrTop > $('.numbers-client__nmb').offset().top - $(window).height()) {
    numAnimate();
  }
});
function numAnimate() {
  var number = 1;
  var result = $('.numbers-client__nmb').text();
  setInterval(function() {
    number++;
    if (number <= result) { $('.numbers-client__nmb').text(number); };
  }, 10);
};



