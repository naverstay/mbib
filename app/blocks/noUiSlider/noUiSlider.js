// import $ from 'jquery';

const noUiSlider = (() => {
  const formatter = new Intl.NumberFormat('ru', {
    minimumFractionDigits: 0
  });

  const priceFormatter = (val, precision) => {
    return formatter.format(val);
  }

  function plural(n, str1, str2, str5) {
    return n + ' ' + ((((n % 10) == 1) && ((n % 100) != 11)) ? (str1) : (((((n % 10) >= 2) && ((n % 10) <= 4)) && (((n % 100) < 10) || ((n % 100) >= 20))) ? (str2) : (str5)))
  }

  const sliders = document.querySelectorAll('.noUiSlider');

  const range_all_sliders = {
    'min': [0],
    '10%': [500],
    '50%': [1000],
    'max': [10000]
  };

  if (sliders.length) {
    sliders.forEach((sld) => {
      let values = [];
      let range = {};
      let step = 1;
      let format = sld.dataset.format || '';
      const target = document.getElementById(sld.dataset.target);

      if (sld.dataset.values) {
        values = sld.dataset.values.split(',');
      }

      if (values.length && sld.dataset.range) {
        let ranges = sld.dataset.range.split(',')
        values.forEach((f, fi) => {
          const val = parseFloat(ranges[fi]);
          range[fi === 0 ? 'min' : fi === values.length - 1 ? 'max' : values[fi] + '%'] = [val, val];
        });
      } else {
        values = [0, 33.33, 66.66, 100];
        range = range_all_sliders;
      }

      if (sld.dataset.step) {
        step = parseInt(sld.dataset.step);
      }

      //console.log('range', range, values, step);

      nouislider.create(sld, {
        range: range,
        step: step,
        start: 0,
        connect: [true, false],
        pips: {
          mode: 'positions',
          values: values,
          density: 4,
          stepped: true,
          format: {
            // 'to' the formatted value. Receives a number.
            to: function (value) {
              if (format === 'currency') {
                return priceFormatter(parseInt(value)) + ' ₽';
              } else if (format === 'date') {
                return plural(parseInt(value), 'год', 'года', 'лет');
              } else {
                return value;
              }
            },
            // 'from' the formatted value.
            // Receives a string, should return a number.
            from: function (value) {
              return Number(value.replace(/\D/g, ''));
            }
          }
        }
      });

      sld.noUiSlider.on('change', (val) => {
        if (target) {
          target.value = priceFormatter(parseInt(val[0]));
        }
      });
    })
  }

  return false;
})();

export default noUiSlider;
