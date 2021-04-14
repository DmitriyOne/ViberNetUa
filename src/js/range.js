import 'ion-rangeslider/js/ion.rangeSlider';

// калькулятор на первом и третем слайде 

$('.js-range-sms11').ionRangeSlider({
  grid: true,
  from: new Date().getMonth(),
  values: [
    '10000 ', '15000', '50000', '100000', '1000000'
  ],
  onChange: function(data) {

    const valueRange1 = $(data.input[0]).parents('.gallery-top-slide-content1').find('.js-range-suma11').val().substr(0, $(data.input[0]).parents('.gallery-top-slide-content1').find('.js-range-suma11').val().length - 5);
    const valueRange2 = data.from_value;
    $(data.input[0]).parents('.gallery-top-slide-content1').find('.final-suma-number').text((+valueRange1 * +valueRange2).toFixed(0) + ' грн.');

  }
});

$('.js-range-suma11').ionRangeSlider({
  grid: true,
  from: new Date().getMonth(),
  values: [
    '0.82 грн.', '0.79 грн.', '0.76 грн.', '0.74 грн.', '0.72 грн.'
  ],
  onChange: function(data) {

    const valueRange1 = $(data.input[0]).parents('.gallery-top-slide-content1').find('.js-range-sms11').val();
    const valueRange2 = data.from_value.substr(0, data.from_value.length - 5);

    $(data.input[0]).parents('.gallery-top-slide-content1').find('.final-suma-number').text((+valueRange1 * +valueRange2).toFixed(0) + ' грн.');

  }

});

// калькулятор на втором слайде 

$('.js-range-sms2').ionRangeSlider({
  grid: true,
  from: new Date().getMonth(),
  values: [
    '5000 ', '10000', '30000', '50000', '100000'
  ],
  onChange: function(data) {

    const valueRange1 = $(data.input[0]).parents('.gallery-top-slide-content2').find('.js-range-suma2').val().substr(0, $(data.input[0]).parents('.gallery-top-slide-content2').find('.js-range-suma2').val().length - 5);
    const valueRange2 = data.from_value;
    $(data.input[0]).parents('.gallery-top-slide-content2').find('.final-suma-number').text((+valueRange1 * +valueRange2).toFixed(0) + ' грн.');

  }
});


$('.js-range-suma2').ionRangeSlider({
  grid: true,
  from: new Date().getMonth(),
  values: [
    '0.85 грн.', '0.75 грн.', '0.72 грн.', '0.69 грн.', '0.65 грн.'
  ],
  onChange: function(data) {

    const valueRange1 = $(data.input[0]).parents('.gallery-top-slide-content2').find('.js-range-sms2').val();
    const valueRange2 = data.from_value.substr(0, data.from_value.length - 5);

    $(data.input[0]).parents('.gallery-top-slide-content2').find('.final-suma-number').text((+valueRange1 * +valueRange2).toFixed(0) + ' грн.');

  }

});


// калькулятор на чевертый и пятный слайде 

$('.js-range-sms4').ionRangeSlider({
  grid: true,
  from: new Date().getMonth(),
  values: [
    '10000 ', '25000', '50000', '100000', '200000'
  ],
  onChange: function(data) {

    const valueRange1 = $(data.input[0]).parents('.gallery-top-slide-content4').find('.js-range-suma4').val().substr(0, $(data.input[0]).parents('.gallery-top-slide-content4').find('.js-range-suma4').val().length - 5);
    const valueRange2 = data.from_value;
    $(data.input[0]).parents('.gallery-top-slide-content4').find('.final-suma-number').text((+valueRange1 * +valueRange2).toFixed(0) + ' грн.');

  }
});


$('.js-range-suma4').ionRangeSlider({
  grid: true,
  from: new Date().getMonth(),
  values: [
    '0.35 грн.', '0.30 грн.', '0.29 грн.', '0.28 грн.', '0.27 грн.'
  ],
  onChange: function(data) {

    const valueRange1 = $(data.input[0]).parents('.gallery-top-slide-content4').find('.js-range-sms4').val();
    const valueRange2 = data.from_value.substr(0, data.from_value.length - 5);

    $(data.input[0]).parents('.gallery-top-slide-content4').find('.final-suma-number').text((+valueRange1 * +valueRange2).toFixed(0) + ' грн.');

  }

});
