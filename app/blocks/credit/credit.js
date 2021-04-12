import rangeSlider from 'rangeslider-pure';

const credit = (() => {
  const slider = document.querySelectorAll('.credit input[type="range"]');

  if (!slider.length) {
    return;
  }

  rangeSlider.create(slider, {
    polyfill: true
  });

  const valueRanges = document.querySelectorAll('.credit-calc__range .range');

  valueRanges.forEach(valueRange => {
    const valueField = valueRange.closest('.credit-calc__range').querySelector('.credit-calc__range-countfield');

    if (!valueRange) {
      return;
    }

    valueRange.addEventListener('input', () => {
      valueField.value = valueRange.value;
    });

    window.addEventListener('load', () => {
      valueField.value = valueRange.value;
    });
  });

})();

export default credit;
