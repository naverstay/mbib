import $ from 'jquery';
import IMask from 'imask';

const phoneField = (() => {

	const phones= document.querySelectorAll('.phone-field');

	if (phones) {
		phones.forEach(phone => {
			const maskOptions = {
				mask: '+{7} 000 000 00 00'
			};
			
			const mask = new IMask(phone, maskOptions);
		})
	}
})();

export default phoneField