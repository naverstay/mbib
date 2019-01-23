import $ from 'jquery';
import IMask from 'imask';

const phoneField = (() => {

	const phones= document.querySelectorAll('.js-phone-field__control');

	if (phones) {
		phones.forEach(phone => {
			const maskOptions = {
				mask: '+{7} 000 000 00 00'
			};
			
			const mask = new IMask(phone, maskOptions);
		})
	}

	const cloneButton = $('.js-phone-field__clone');
	const removeButton = $('.js-phone-field__remove');

	cloneButton.on('click', (event) => {
		const phoneRow = $(event.target).closest('.js-row_can-cloned');
		const clonePhoneRow = phoneRow.clone(true);
		const newId = phoneRow.find('input').attr('id') + Date.now();
		clonePhoneRow.find('label').attr('for', newId);
		clonePhoneRow.find('input').attr('id', newId);
		phoneRow.after(clonePhoneRow);
	})

	removeButton.on('click', (event) => {
		const phoneRow = $(event.target).closest('.js-row_can-cloned');
		phoneRow.remove();
	})

})();

export default phoneField