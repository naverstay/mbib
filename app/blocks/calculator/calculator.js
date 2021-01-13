import rangeSlider from 'rangeslider-pure';

function addSpace(value) {
  const newValue = value.split('').reverse().join('').replace(/\d{3}(?!$|(?:\s$))/g, '$& ').split('').reverse().join('');
  return newValue;
}

const calculator = (() => {
  const slider = document.querySelectorAll('.calculator input[type="range"]');
  const paymentCount = document.querySelector('.calculator__payment-count ');
  const paymentCountInc = document.querySelector('.calculator__payment-inc ');
  const paymentCountDec = document.querySelector('.calculator__payment-dec ');

  if (slider.length) {
    rangeSlider.create(slider, {
      polyfill: true
    });

    const valueRange = document.querySelector('.calculator__range .range');
    const valueField = document.querySelector('.calculator__range-textfield');

    if (valueRange) {
      valueRange.addEventListener('input', () => {
        valueField.value = valueRange.value;
      });
    }

    window.addEventListener('load', () => {
      if (valueRange) {
        valueField.value = valueRange.value;
      }
    });
  }

  if (paymentCount) {
    paymentCountInc.addEventListener('click', () => {
      const val = Number(paymentCount.innerHTML.trim().split(' ').join('')) + 5000;
      paymentCount.innerHTML = addSpace(val.toString());
    });

    paymentCountDec.addEventListener('click', () => {
      const currentVal = Number(paymentCount.innerHTML.trim().split(' ').join(''));
      const newVal = currentVal <= 10000 ? 5000 : currentVal - 5000;
      paymentCount.innerHTML = addSpace(newVal.toString());
    });
  }

})();

export default calculator;
