import $ from 'jquery';
import IMask from 'imask';
import intlTelInput from './intlTelInput.js';

const phoneField = (() => {
	$('.phone-field').intlTelInput({
		initialCountry : 'ru'
	});

	const phone = document.querySelector('.phone-field');
	const maskOptions = {
		mask: '000 000 00 00'
	};
	const mask = new IMask(phone, maskOptions);
})();

export default phoneField