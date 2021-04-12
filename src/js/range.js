import 'ion-rangeslider/js/ion.rangeSlider';


// калькулятор на первом слайде 

$('.js-range-sms1').ionRangeSlider({
  grid: true,
  from: new Date().getMonth(),
  values: [
    '10 000', '15 000', '50 000', '100 000', '1 000000'
  ]
});


$('.js-range-suma1').ionRangeSlider({
  grid: true,
  from: new Date().getMonth(),
  values: [
    '0,82 грн.', '0,79 грн.', '0,76 грн.', '0,74 грн.', '0,72 грн.'
  ]
});
