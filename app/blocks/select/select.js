import $ from 'jquery';
import 'select2';
import 'magnific-popup';

export default {
	init() {
		$('.select').select2({
			width : "resolve",
			dropdownParent: $('#modal .modal__body')
		});

		$('.select').on('select2:opening', function(e) {
			console.log('asfs');
			$.magnificPopup.open({
				items: {
					src: '#modal', // can be a HTML string, jQuery object, or CSS selector
					type: 'inline'
				}
			});
		})
	}

};