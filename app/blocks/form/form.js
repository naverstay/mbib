import $ from 'jquery';
import hyperform from 'hyperform';

const form = (() => {

	hyperform.addTranslation("ru",{
		TextTooLong:"Пожалуйста, сократите этот текст до %l символов или меньше (сейчас Вы используете %l символов).",
		TextTooShort:"Пожалуйста, используйте не менее %l символов (сейчас Вы используете %l символов).",
		ValueMissing:"Пожалуйста, заполните это поле.",
		CheckboxMissing:"Пожалуйста, поставьте флажок, если Вы хотите продолжить.",
		RadioMissing:"Пожалуйста, выберите один из этих вариантов.",
		FileMissing:"Пожалуйста, выберите файл.",
		SelectMissing:"Пожалуйста, выберите пункт из списка.",
		InvalidEmail:"Пожалуйста, введите адрес электронной почты.",
		InvalidURL:"Пожалуйста, введите веб-адрес.",
		InvalidDate:"Пожалуйста, введите дату",
		PatternMismatch:"Пожалуйста, придерживайтесь установленного формата.",
		PatternMismatchWithTitle:"Пожалуйста, придерживайтесь установленного формата: %l.",
		NumberRangeOverflow:"Пожалуйста, выберите значение, не больше чем %l.",
		DateRangeOverflow:"Пожалуйста, выберите значение, не позднее %l.",
		TimeRangeOverflow:"Пожалуйста, выберите значение, не позднее %l.",
		NumberRangeUnderflow:"Пожалуйста, выберите значение, не менее %l.",
		DateRangeUnderflow:"Пожалуйста, выберите значение, не ранее, чем %l.",
		TimeRangeUnderflow:"Пожалуйста, выберите значение, не ранее, чем %l.",
		StepMismatch:"Пожалуйста, выберите корректное значение. Два ближайших допустимых значения %l и %l",
		StepMismatchOneValue:"Пожалуйста, введите корректное значение. Ближайшее допустимое значение %l.",
		BadInputNumber:"Пожалуйста, введите число",
		"Please match the requested type.":"Пожалуйста, придерживайтесь требуемого типа.",
		"Please comply with all requirements.":"Пожалуйста, выполните все необходимые условия.",
		"Please lengthen this text to %l characters or more (you are currently using %l characters).":"Пожалуйста, увеличьте этот текст на %l символов или более (вы используете %l символов).",
		"Please use the appropriate format.":"Пожалуйста, используйте правильный формат.",
		"Please enter a comma separated list of email addresses.":"Пожалуйста, введите список адресов электронной почты через запятую",
		"Please select a file of the correct type.":"Пожалуйста, выберите файл правильного типа.",
		"Please select one or more files.":"Пожалуйста, выберите один или несколько файлов.",
		"any value":"любое значение",
		"any valid value":"любое допустимое значение",
	});
	hyperform.setLanguage("ru");

	hyperform.setRenderer('attachWarning', function(warning, element) {
		if (element.getAttribute('type') === 'radio' || element.getAttribute('type') === 'checkbox') {
			element.closest('.control-group').after(warning);
		} else {
			element.parentNode.append(warning);
		}
	});

	const authForm = document.querySelector('.form[name=auth]');
	const bookmarkletForm = document.querySelector('.form[name=bookmarklet]');
	const registrForm = document.querySelector('.form[name=registr]');
	const recoveryForm = document.querySelector('.form[name=recovery]');
	const feedbackForm = document.querySelector('.form[name=feedback]');

	const validatorClasses = {
		classes : {
			warning : 'form__warning',
			valid : 'input_valid',
			invalid : 'input_invalid',
			validated : 'input_validated'
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
		const $formRegistr = hyperform(recoveryForm, validatorClasses);
	}

	if (feedbackForm) {
		const $formRegistr = hyperform(feedbackForm, validatorClasses);
	}
	
})();

export default form