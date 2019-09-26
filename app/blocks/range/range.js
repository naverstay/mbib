import $ from 'jquery';
import rangeSlider from 'rangeslider-pure';

const range = (() => {
  const slider = document.querySelectorAll('.step input[type="range"]');
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
})();

export default range;
