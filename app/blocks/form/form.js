import $ from 'jquery';
import hyperform from 'hyperform';

const form = (() => {
	const authForm = document.querySelector('.form[name=auth]');
	if (authForm) {
		const validatorClasses = {
			classes : {
				warning : 'form__warning',
				valid : 'input_valid',
				invalid : 'input_invalid',
				validated : 'input_validated'
			}
		};
		const $formAuth = hyperform(authForm, validatorClasses);
	}
})();

export default form