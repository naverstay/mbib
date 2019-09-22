import $ from 'jquery';
import rangeSlider from 'rangeslider-pure';

const range = (() => {
  const slider = document.querySelectorAll('input[type="range"]');
  if (slider.length) {
    rangeSlider.create(slider, {
      polyfill: true
    });

    const powerRange = document.querySelector('.range_power');
    const powerRangeOutput = document.querySelector('.form__output_power');

    if (powerRange) {
      powerRange.addEventListener('input', (event) => {
        powerRangeOutput.innerHTML = powerRange.value;
      });
    }

    const valueRange = document.querySelector('.range_value');
    const valueRangeOutput = document.querySelector('.form__output_value');

    if (valueRange) {
      valueRange.addEventListener('input', (event) => {
        valueRangeOutput.innerHTML = valueRange.value;
      });
    }

  }

  const radiusRange = document.querySelectorAll('.geoplace__radius');

  if (radiusRange.length) {
    rangeSlider.create(radiusRange, {
      polyfill: true,
      step: 1,
      min: 0,
      max: 6,
      value: 0
    });
  }
})();

export default range;
