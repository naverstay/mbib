import $ from 'jquery';
import 'select2';
import 'magnific-popup';

export default {

	init() {
		$('.select').select2({
			width : "resolve",
			dropdownParent: $('#modal .modal__body'),
			closeOnSelect: false
		});

		$('.select').on('select2:opening', function(e) {
			const modal = $('.modal_mobile-select');

			$.magnificPopup.open({
				items: {
					src: modal, // can be a HTML string, jQuery object, or CSS selector
					type: 'inline'
				},
				callbacks : {
					open: function() {
						console.log(modal.find('li').length);
					}
				}
			});
			
		})
	}

};