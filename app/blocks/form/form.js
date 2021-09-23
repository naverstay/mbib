import $ from 'jquery';
import hyperform from 'hyperform';

const form = (() => {

  hyperform.addTranslation('ru', {
    TextTooLong: 'Пожалуйста, сократите этот текст до %l символов или меньше (сейчас Вы используете %l символов).',
    TextTooShort: 'Пожалуйста, используйте не менее %l символов (сейчас Вы используете %l символов).',
    ValueMissing: 'Пожалуйста, заполните это поле.',
    CheckboxMissing: 'Пожалуйста, поставьте флажок, если Вы хотите продолжить.',
    RadioMissing: 'Пожалуйста, выберите один из этих вариантов.',
    FileMissing: 'Пожалуйста, выберите файл.',
    SelectMissing: 'Пожалуйста, выберите пункт из списка.',
    InvalidEmail: 'Пожалуйста, введите адрес электронной почты.',
    InvalidURL: 'Пожалуйста, введите веб-адрес.',
    InvalidDate: 'Пожалуйста, введите дату',
    PatternMismatch: 'Пожалуйста, придерживайтесь установленного формата.',
    PatternMismatchWithTitle: 'Пожалуйста, придерживайтесь установленного формата: %l.',
    NumberRangeOverflow: 'Пожалуйста, выберите значение, не больше чем %l.',
    DateRangeOverflow: 'Пожалуйста, выберите значение, не позднее %l.',
    TimeRangeOverflow: 'Пожалуйста, выберите значение, не позднее %l.',
    NumberRangeUnderflow: 'Пожалуйста, выберите значение, не менее %l.',
    DateRangeUnderflow: 'Пожалуйста, выберите значение, не ранее, чем %l.',
    TimeRangeUnderflow: 'Пожалуйста, выберите значение, не ранее, чем %l.',
    StepMismatch: 'Пожалуйста, выберите корректное значение. Два ближайших допустимых значения %l и %l',
    StepMismatchOneValue: 'Пожалуйста, введите корректное значение. Ближайшее допустимое значение %l.',
    BadInputNumber: 'Пожалуйста, введите число',
    'Please match the requested type.': 'Пожалуйста, придерживайтесь требуемого типа.',
    'Please comply with all requirements.': 'Пожалуйста, выполните все необходимые условия.',
    'Please lengthen this text to %l characters or more (you are currently using %l characters).': 'Пожалуйста, увеличьте этот текст до %l символов или более (вы используете %l символов).',
    'Please use the appropriate format.': 'Пожалуйста, используйте правильный формат.',
    'Please enter a comma separated list of email addresses.': 'Пожалуйста, введите список адресов электронной почты через запятую',
    'Please select a file of the correct type.': 'Пожалуйста, выберите файл правильного типа.',
    'Please select one or more files.': 'Пожалуйста, выберите один или несколько файлов.',
    'any value': 'любое значение',
    'any valid value': 'любое допустимое значение'
  });
  hyperform.setLanguage('ru');

  hyperform.setRenderer('attachWarning', function (warning, element) {
    if (element.getAttribute('type') === 'tel') {
      element.closest('.phone-field').after(warning);
    }
  });

  hyperform.setRenderer('attachWarning', function (warning, element) {
    switch (element.getAttribute('type')) {
      case 'radio' :
        element.closest('.control-group').after(warning);
        break;
      case 'checkbox' :
        element.closest('.control-group').after(warning);
        break;
      case 'tel' :
        element.closest('.phone-field').after(warning);
        break;
      default:
        element.parentNode.append(warning);
        break;
    }

    if (element.classList.contains('select__control')) {
      element.closest('.select').after(warning);
    }
    /* if (element.getAttribute('type') === 'radio' || element.getAttribute('type') === 'checkbox') {
      element.closest('.control-group').after(warning);
    } else if {
      element.parentNode.append(warning);
    }
    else {
      element.parentNode.append(warning);
    }*/
  });


  const authForm = document.querySelector('.form[name=auth]');
  const feedHeaderForm = document.querySelector('.form[name=feedheader]');
  const feedFooterForm = document.querySelector('.form[name=feedfooter]');
  const bookmarkletForm = document.querySelector('.form[name=bookmarklet]');
  const registrForm = document.querySelector('.form[name=registr]');
  const recoveryForm = document.querySelector('.form[name=recovery]');
  const feedbackForm = document.querySelector('.form[name=feedback]');
  const claimForm = document.querySelector('.form[name=claim]');
  const addCarForm = document.querySelector('.form[name=addCar]');

  const validatorClasses = {
    classes: {
      warning: 'form__warning',
      valid: 'input_valid',
      invalid: 'input_invalid',
      validated: 'input_validated'
    }
  };

  if (bookmarkletForm) {
    const $bookmarkletForm = hyperform(bookmarkletForm, validatorClasses);
  }

  if (authForm) {
    const $formAuth = hyperform(authForm, validatorClasses);
  }

  if (registrForm) {
    const $formRegistr = hyperform(registrForm, validatorClasses);
  }

  if (recoveryForm) {
    const $formRecovery = hyperform(recoveryForm, validatorClasses);
  }

  if (feedbackForm) {
    const $formFeedback = hyperform(feedbackForm, validatorClasses);
  }

  if (feedHeaderForm) {
    const $feedHeaderForm = hyperform(feedHeaderForm, validatorClasses);
  }

  if (feedFooterForm) {
    const $feedFooterForm = hyperform(feedFooterForm, validatorClasses);
  }

  if (claimForm) {
    const $formClaim = hyperform(claimForm, validatorClasses);
  }

  if (addCarForm) {
    const $addCarForm = hyperform(addCarForm, validatorClasses);
    addCarForm.addEventListener('invalid', event => {
      let invalidElement = $('.input_invalid').closest('.form__section');
      $('html, body').stop().animate({scrollTop: invalidElement.offset().top}, 500);
    });
  }

})();

export default form;
