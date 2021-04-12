import 'ion-rangeslider/js/ion.rangeSlider';


// калькулятор на первом слайде 

$('.js-range-sms1').ionRangeSlider({
  grid: true,
  from: new Date().getMonth(),
  values: [
    '5000 ', '10000', '30000', '50000', '100000'
  ],
  onChange: function(data) {

    const valueRange1 = $(data.input[0]).parents('.gallery-top-slide-content').find('.js-range-suma1').val().substr(0, $(data.input[0]).parents('.gallery-top-slide-content').find('.js-range-suma1').val().length - 5);
    const valueRange2 = data.from_value;
    console.log(valueRange1);
    $(data.input[0]).parents('.gallery-top-slide-content').find('.final-suma-number').text((+valueRange1 * +valueRange2).toFixed(0) + ' грн.');

  }
});


$('.js-range-suma1').ionRangeSlider({
  grid: true,
  from: new Date().getMonth(),
  values: [
    '0.85 грн.', '0.75 грн.', '0.72 грн.', '0.69 грн.', '0.65 грн.'
  ],
  onChange: function(data) {

    const valueRange1 = $(data.input[0]).parents('.gallery-top-slide-content').find('.js-range-sms1').val();
    const valueRange2 = data.from_value.substr(0, data.from_value.length - 5);

    $(data.input[0]).parents('.gallery-top-slide-content').find('.final-suma-number').text((+valueRange1 * +valueRange2).toFixed(0) + ' грн.');

  }

});


