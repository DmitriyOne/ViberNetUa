
//number step
var animation = false;
$(document).on('scroll', function() {
  if ($(this).scrollTop() >= ($('.wrap__map-numbers').offset().top - $(window).height() / 2) && !animation) {
    animation = true;
    $('.map-numbers').addClass('active');
    $('.number1').each(function() {

      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 1500,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  }

});


var animation2 = false;
$(document).on('scroll', function() {
  if ($(this).scrollTop() >= ($('.wrap__map-numbers').offset().top - $(window).height() / 2) && !animation2) {
    animation2 = true;
    $('.map-numbers').addClass('active');
    $('.number2').each(function() {

      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  }

});


var animation3 = false;
$(document).on('scroll', function() {
  if ($(this).scrollTop() >= ($('.wrap__map-numbers').offset().top - $(window).height() / 2) && !animation3) {
    animation3 = true;
    $('.map-numbers').addClass('active');
    $('.number3').each(function() {

      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now) + ' %');
        }
      });
    });
  }

});
